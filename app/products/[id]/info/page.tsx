import { notFound } from "next/navigation";
import { getProducto } from "@/app/lib/actions";
import GraficoRiesgoRendimiento from "@/app/components/graficos";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const producto = await getProducto(id);

  if (!producto) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{producto.nombre}</h1>
        <p className="text-xl text-gray-600">{producto.tipo}</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold text-gray-800">Categoría</h2>
          <p className="text-gray-700">{producto.categoria}</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold text-gray-800">Nivel de Riesgo</h2>
          <p className="text-gray-700">{producto.nivelRiesgo}</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="font-semibold text-gray-800">Tasa de Interés</h2>
          <p className="text-gray-700">
            {producto.tasaInteres ? producto.tasaInteres + "%" : "N/A"}
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
        <p className="text-gray-700">{producto.descripcion}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Beneficios Adicionales</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Emergencias cubiertas 24/7</li>
          <li>Acceso a descuentos en veterinarias asociadas</li>
          <li>Cobertura para todo tipo de mascota</li>
        </ul>
      </section>

      <GraficoRiesgoRendimiento
        tasaInteres={producto.tasaInteres}
        nivelRiesgo={producto.nivelRiesgo}
      />
    </div>
  );
}
