# 🏦 Landing Financiera

Sí desea ver el proyecto en producción subido al servidor de vercel, en la parte derecha del repositorio encuentra un titulo con el nombre "Prueba técnica para Bprosys" debajo el link que lo llevará a la página.

Este proyecto es una aplicación web de tipo landing page para mostrar productos financieros como cuentas, tarjetas, fondos, seguros, y préstamos. Desarrollado con Next.js, Tailwind CSS y TypeScript.

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Heroicons](https://heroicons.com/) (íconos SVG)
- [use-debounce](https://github.com/xnimorz/use-debounce) (para filtros eficientes)

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

Preguntas a respondes 
1. ¿Qué criterios seguiste para diseñar la UI de productos financieros?

Respuesta: Principalmente me fijé en la claridad y simplicidad visual, porque los productos financieros suelen tener mucha información, así que destaqué los datos claves como nombre, tipo, tasa de interés, etec... También tuve enfoque en la accesibilidad, como utilizar el aria-labels, utilizar las etiquetas semánticas y un contraste adecuado con un tono sobrio para garantizar que cualquier usuario pueda navegar en ella. Me aseguré de que la página se adaptará bien a dispositivos móviles, teblets y pc usando tailwind CSS.

2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

Respuesta: Decidí usar tailwind para la mayoría de los componentes, ya que con este se puede hacer el responsive de una manera más eficiente, usa una menor carga de css, pero este conlleva una desventaja cuando se quieren utilizar valores personalizados, es posible hacerlo pero se pierde mucho la consistencia. Usé styled components en el archivo homeintro.tsx que se encuentra en app/components, para una reutilación clara en los estilos de las cards y también se le pueden agregar estilos con tailwind.

3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

Respuesta: Lo que haría es desacoplar de una mejor manera los componentes dependeindo de la lógica del negocio, integrar una base de datos con PostgresSQL o mongoDB para reemplazar el archivo .json, como no existe backend aplicar la arquitectura basada en microservicios, implementar un sistema de autenticación usando stack auth, me aseguraría de cumplir las nombar WCAG realizando pruebas con cypress entre otras cosas que quizás se me escapan ahora. 

4. ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

Respuesta: Para el monitoreo sería ideal usar sentry para la captura de errores y trazabnilidad de fallos, automatización, también se puede usar Datadog. Para el rendimiento con GitHub Actions + Vercel, llevar Feature para probar funcionalidades de manera controlada.
