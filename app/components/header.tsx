"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `font-medium text-lg ${
      pathname === path
        ? "text-green-700 font-semibold"
        : "text-gray-600 hover:text-green-600"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          aria-label="Inicio"
          href="/"
          className="text-xl font-bold text-black flex items-center gap-2"
        >
          <Image
            src="/landing/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          FinanTech
        </Link>

        <nav className="flex space-x-4 mx-10">
          <Link aria-label="Inicio" href="/" className={linkClasses("/")}>
            Inicio
          </Link>
          <Link
            aria-label="Productos"
            href="/products"
            className={linkClasses("/products")}
          >
            Productos
          </Link>
        </nav>
      </div>
    </header>
  );
}
