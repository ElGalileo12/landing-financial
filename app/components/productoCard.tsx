"use client";

import Link from "next/link";

type Producto = {
  id: string;
  nombre: string;
  tipo: string;
  tasaInteres: number | null;
  categoria: string;
  nivelRiesgo: string;
};

export default function ProductoCard({ producto }: { producto: Producto }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold text-green-700 mb-1">
        {producto.nombre || "No registra"}
      </h2>
      <p className="text-sm text-gray-500 mb-2">
        {producto.tipo || "No registra"} | {producto.categoria || "No registra"}
      </p>

      <p className="text-sm text-gray-700">
        Tasa de interés:{" "}
        <span className="font-medium">
          {producto.tasaInteres !== null && producto.tasaInteres !== undefined
            ? `${producto.tasaInteres}%`
            : "No registra"}
        </span>
      </p>

      <p className="text-sm text-gray-700">
        Riesgo:{" "}
        <span className="font-medium">
          {producto.nivelRiesgo && producto.nivelRiesgo !== "N/A"
            ? producto.nivelRiesgo
            : "No registra"}
        </span>
      </p>

      <Link href={`/products/${producto.id}/info`}>
        <button className="mt-3 bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700 text-sm block mx-auto">
          Ver detalles
        </button>
      </Link>
    </div>
  );
}
