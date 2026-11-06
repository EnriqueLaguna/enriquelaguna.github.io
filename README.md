# Portafolio de Enrique Laguna

Sitio estático con Astro, TypeScript y CSS. Los casos de estudio se editan como archivos Markdown en `src/projects/`. Astro genera una página por archivo en `/proyectos/`.

## Desarrollo local

Con Node.js 24 y pnpm 12.4.1, ejecuta lo siguiente desde el directorio del proyecto.

```sh
pnpm install --frozen-lockfile
pnpm run dev
```

Astro muestra la URL local en la terminal. Para revisar los tipos y compilar la versión estática, ejecuta lo siguiente.

```sh
pnpm run check
pnpm run build
pnpm run preview
```

## Salida estática

La compilación genera el sitio en `dist/`. La portada es `dist/index.html` y los casos tienen su propio `index.html` dentro de `dist/proyectos/`. Al configurar CloudFront, las rutas de directorio deben resolverse a su documento `index.html`. La página de error está en `dist/404.html`.
