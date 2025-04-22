import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <section className="flex center w-full h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 No encontrado</h2>
      <p>No se pudo encontrar el producto seleccionado</p>
      <Link
        href="/products"
        className="mt-4 rounded-md bg-green-500 px-4 py-2 text-sm text-white transition-colors hover:bg-green-400"
      >
        Atrás
      </Link>
    </section>
  );
}
