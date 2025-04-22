"use server";
export interface Producto {
  id: string;
  nombre: string;
  tipo: string;
  tasaInteres: number | null;
  categoria: string;
  nivelRiesgo: string;
}

export async function getProducto(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return res.json();
}


export async function fetchProductos(): Promise<Producto[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Error al cargar los productos");

  return res.json();
}