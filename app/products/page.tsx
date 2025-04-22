import ProductosContainer from "@/app/components/productosContainer";

export default function ProductosPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Catálogo de Productos</h1>
      <ProductosContainer />
    </section>
  );
}
