import Productos from "@/app/products/content/productsContainer";
import { Suspense } from "react";

export default function ProductosPage() {
  return (
    <Suspense fallback={<div>Cargando productos...</div>}>
      <Productos />
    </Suspense>
  );
}
