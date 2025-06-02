# 🛍️ Shopping Guide

**Shopping Guide** es una herramienta interactiva que permite visualizar y seleccionar tiendas dentro de un centro comercial utilizando un plano SVG. La aplicación resalta las áreas seleccionadas y muestra información detallada de cada tienda en tiempo real.

## 🚀 Tecnologías utilizadas

- **Next.js 15** – Framework React para aplicaciones modernas.
- **React** – Biblioteca principal para la interfaz de usuario.
- **JavaScript (ES6+)** – Lógica de interacción.
- **Tailwind CSS** – Estilos rápidos y responsivos.
- **SVG** – Visualización del plano del centro comercial.
- **React Zoom Pan Pinch** – Zoom y desplazamiento táctil/scroll en los planos.
- **Framer Motion** – Animaciones suaves y controladas en la interfaz.
- **Tabler Icons** – Íconos SVG modernos y ligeros.

## ✨ Funcionalidades principales

- 🌐 Plano interactivo por planta (planta baja y segundo piso).
- 🖱️ Selección de tiendas con cambio de color dinámico.
- 🔍 Zoom y paneo en el plano SVG (soporte táctil y mouse).
- 🎞️ Animaciones de transición entre vistas con **Framer Motion**.
- 🧭 Barra de navegación con íconos gracias a **Tabler Icons**.
- ♻️ Componentes reutilizables con props claros y estado global/local.

## 📂 Estructura del proyecto

```bash
└── 📁src
    └── 📁app
        └── 📁contact
            └── page.jsx
        └── layout.jsx
        └── not-found.jsx
        └── page.jsx
    └── 📁components
        └── 📁layout
            └── Footer.jsx
            └── Header.jsx
        └── MapRenderer.jsx
        └── 📁sections
            └── Contact.jsx
            └── Hero.jsx
            └── NotFound.jsx
        └── SvgGroundFloor.jsx
        └── SvgUpperFloor.jsx
        └── 📁ui
            └── ControlButtons.jsx
            └── FloorSelect.jsx
            └── OpeningHours.jsx
            └── StoreDetailsModal.jsx
    └── 📁constants
        └── index.js
    └── 📁data
        └── storeData.js
    └── 📁hooks
        └── useOpeningHours.jsx
    └── 📁styles
        └── globals.css
        └── variants.js


```

**eMartiDev**
