# Gusteau's Web

- Stack: Next.js (App Router) + TypeScript + Sass + Bootstrap (solo los módulos Sass usados).
- Componentes: `.tsx` planos en `src/components/`.
- Estilos: un `_nombre.scss` por componente en `src/styles/components/`.
- `src/styles/main.scss` es el único scss importado (en `src/app/layout.tsx`); carga todo con `@use`.
- Breakpoints (`@include respond(...)`): mobile <768px, tablet-portrait 768-1023px, tablet-landscape 1024-1279px, desktop ≥1280px.
