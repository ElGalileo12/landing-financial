"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductoCard from "@/app/components/productoCard";
import Search from "@/app/components/search";
import { normalizeText } from "@/app/lib/utils";
interface Producto {
  id: string;
  nombre: string;
  tipo: string;
  tasaInteres: number | null;
  categoria: string;
  nivelRiesgo: string;
}

const fetchProductos = async (): Promise<Producto[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Error al cargar los productos");
  return res.json();
};

export default function ProductosPage() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("categoria");

  useEffect(() => {
    fetchProductos()
      .then(setProductos)
      .catch((error) => console.error("Error al cargar los productos", error));
  }, []);

  const productosFiltrados = query
    ? productos.filter((producto) =>
        normalizeText(producto.categoria).includes(normalizeText(query))
      )
    : productos;

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Catálogo de Productos
      </h1>
      <Search placeholder="Filtrar por categoría" />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-4 px-5">
        {productosFiltrados.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}
