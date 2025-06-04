# 🏦 Landing Financiera

Sí desea ver el proyecto en producción subido al servidor de vercel, en la parte derecha del repositorio encuentra un titulo con el nombre "Landing sencilla para productos" debajo el link que lo llevará a la página.

Este proyecto es una aplicación web de tipo landing page para mostrar productos financieros como cuentas, tarjetas, fondos, seguros, y préstamos. Desarrollado con Next.js, Tailwind CSS y TypeScript.

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Heroicons](https://heroicons.com/) (íconos SVG)
- [use-debounce](https://github.com/xnimorz/use-debounce) (para filtros eficientes)

## 
ℹ️ Después de bajar el repositorio, se debe agregar un archivo .env en la raiz del proyecto, donde vas a escribir lo siguiente : NEXT_PUBLIC_BASE_URL=http://localhost:3000

## 📦 Instalación

Primero, asegúrate de tener [pnpm](https://pnpm.io/) instalado. Luego, ejecuta los siguientes comandos:

```bash
pnpm install
```

Para correr el proyecto en modo desarrollo 

```bash
pnpm run dev
```

Esto iniciará el servidor en http://localhost:3000

Una vez corriendo el servidor estará en el menú principal, en la parte superior tendrá un nav que lo llevará a productos, en los productos hay un botón con un texto "Ver detalles" que lo llevará a ver el detalle de cada producto, además tiene un buscador para filtrar cada producto.

Sí va a un producto qu eno existe por ejemplo  http://localhost:3000/products/11002/info verá un mensaje de que no se ha encontrado el producto.

Además en los productos http://localhost:3000/products hay un delay aproposito, para que se pueda apreciar un skeleton que se le añadió a cada producto.

Este proyecto está bajo una licencia privada.

## 
