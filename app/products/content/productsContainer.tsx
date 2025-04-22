"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductoCard from "@/app/components/productoCard";
import Search from "@/app/components/search";
import { normalizeText } from "@/app/lib/utils";
import SkeletonCard from "@/app/ui/skeletons";
import { fetchProductos, Producto } from "@/app/lib/actions";

export default function ProductosContainer() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const query = searchParams.get("categoria");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchProductos()
        .then(setProductos)
        .catch((error) => console.error("Error al cargar los productos", error))
        .finally(() => setLoading(false));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const productosFiltrados = query
    ? productos.filter((producto) =>
        normalizeText(producto.categoria).includes(normalizeText(query))
      )
    : productos;

  return (
    <>
      <Search placeholder="Filtrar por categoría" />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-4 px-5">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : productosFiltrados.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
      </div>
    </>
  );
}
