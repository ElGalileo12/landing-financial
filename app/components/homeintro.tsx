export default function HomeIntro() {
  return (
    <section className="w-full bg-white text-gray-800 py-2 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-500">
          Bienvenido a  FinanTech
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Explora y compara productos financieros como cuentas, tarjetas, fondos
          y seguros de forma rápida, clara y confiable.
        </p>
        <div className="grid gap-6 md:grid-cols-2 text-left mt-10">
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">
              Catálogo de Productos
            </h2>
            <p className="text-gray-700">
              Accede a un catálogo con productos mockeados y visualiza
              información clave como tasa de interés, tipo y nivel de riesgo.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Filtros Interactivos</h2>
            <p className="text-gray-700">
              Usa filtros por categoría para encontrar el producto que se adapta
              a tus necesidades, desde un dropdown o tabs responsivos.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Detalle por Producto</h2>
            <p className="text-gray-700">
              Visualiza atributos clave, beneficios y gráficos simples de
              rendimiento o riesgo para cada producto.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Diseño Mobile First</h2>
            <p className="text-gray-700">
              Interfaz moderna, profesional y accesible pensada para brindar una
              experiencia óptima en cualquier dispositivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
