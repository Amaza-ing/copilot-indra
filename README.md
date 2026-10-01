# Mi Web

texto añadido para comprobar los workflows.

Una página web sencilla creada con HTML, CSS y JavaScript. Incluye un diseño moderno, un botón para cambiar el mensaje, un botón para cambiar el tema y un reloj analógico en la esquina inferior derecha.

## Características

- Layout responsive y limpio
- Tema claro/oscuro
- Botón para cambiar el texto principal
- Reloj analógico con actualización en tiempo real
- Estructura simple para personalizar fácilmente

## Estructura del proyecto

- `index.html` – estructura de la página
- `style.css` – estilos visuales y diseño
- `script.js` – interactividad y reloj

## Cómo abrir el proyecto

Sirve la carpeta con un servidor local para que el navegador pueda cargar los módulos JavaScript. Ejecuta:

```bash
python -m http.server 8000
```

Luego abre en el navegador:

```text
http://localhost:8000
```

## Personalización

Puedes editar:

- textos en `index.html`
- colores y diseño en `style.css`
- comportamientos en `script.js`

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript

## Tests

Se usa el runner integrado de Node.js, sin dependencias adicionales. Necesitas Node.js 18 o superior.

```bash
npm test
```

Los tests cubren el avance circular de los mensajes y los cálculos de rotación del reloj.
