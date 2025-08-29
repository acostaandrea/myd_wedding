# Mirtha & Daniel - Invitación de Boda

Una elegante invitación de boda digital creada con React y TypeScript, diseñada para ser completamente responsiva y funcionar en todos los dispositivos.

## 🎉 Características

- **Diseño Responsivo**: Optimizado para móviles, tablets y desktop
- **Interfaz Elegante**: Diseño moderno con tipografías elegantes
- **Integración de Mapas**: Enlace directo a Google Maps
- **RSVP Integrado**: Formulario de Google Forms para confirmación
- **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- **PWA Ready**: Configurado como Progressive Web App

## 🚀 Tecnologías Utilizadas

- React 18
- TypeScript
- CSS3 con animaciones
- Google Fonts (Playfair Display, Montserrat)
- Google Maps Integration
- Google Forms Integration

## 📱 Secciones de la Aplicación

1. **Hero Section**: Imagen de portada con nombres y fecha
2. **Detalles**: Información completa del evento
3. **Ubicación**: Mapa interactivo y detalles del lugar
4. **RSVP**: Formulario de confirmación de asistencia
5. **Footer**: Información adicional y contacto

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd wedding-invitation
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construcción para Producción

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Hero.tsx          # Sección principal con imagen de portada
│   ├── Details.tsx       # Detalles del evento
│   ├── Location.tsx      # Información de ubicación
│   ├── RSVP.tsx          # Formulario de confirmación
│   └── Footer.tsx        # Pie de página
├── App.tsx               # Componente principal
└── index.tsx             # Punto de entrada
```

## 🎨 Personalización

### Cambiar Información de la Boda

Edita los siguientes archivos para personalizar la información:

- `src/components/Hero.tsx`: Nombres, fecha y descripción principal
- `src/components/Details.tsx`: Detalles del evento y timeline
- `src/components/Location.tsx`: Información de ubicación
- `src/components/RSVP.tsx`: Enlaces del formulario de RSVP

### Cambiar Imagen de Portada

Reemplaza la imagen en `docs/seebensee-2384369-810x540.jpg` con tu imagen de portada.

### Cambiar Enlaces

- **Google Maps**: Actualiza el enlace en `src/components/Location.tsx`
- **Google Forms**: Actualiza el enlace en `src/components/RSVP.tsx`

## 📱 Responsive Design

La aplicación está optimizada para:

- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🌐 Despliegue

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `build`

### Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es una aplicación React

### GitHub Pages

1. Instala `gh-pages`: `npm install --save-dev gh-pages`
2. Agrega el script en `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
3. Ejecuta: `npm run deploy`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

---

**Hecho con ❤️ para Mirtha & Daniel**
