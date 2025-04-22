"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 flex items-center gap-2"
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

        <nav className="space-x-4">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Inicio
          </Link>
          <Link
            href="/products"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Productos
          </Link>
        </nav>
      </div>
    </header>
  );
}
