# Instrucciones del proyecto

## Propósito
Este proyecto es una pequeña landing page o base de sitio web personal construida con HTML, CSS y JavaScript vanilla. El objetivo es mantener una estructura simple, legible y fácil de personalizar.

## Stack y tecnologías
- HTML5 para la estructura semántica
- CSS3 para diseño, layout y temas
- JavaScript vanilla para interactividad
- No usar frameworks ni librerías adicionales salvo que se indique explícitamente

## Convenciones generales
- Mantener el código limpio, legible y consistente.
- Preferir nombres descriptivos y claros.
- Usar inglés para identificadores, funciones, variables, clases y selectores de JavaScript.
- Mantener textos visibles en español cuando formen parte de la interfaz del usuario.
- No introducir complejidad innecesaria ni abstraer lógica simple.
- Evitar comentarios redundantes; solo documentar partes no obvias.

## Convenciones de HTML
- Usar etiquetas semánticas: header, main, section, footer, article, nav, etc.
- Mantener la estructura accesible y ordenada.
- Mantener IDs y clases consistentes con el código JavaScript y CSS.
- Priorizar claridad sobre “eslógica” o nombres excesivamente cortos.

## Convenciones de CSS
- Organizar el CSS por bloques lógicos: variables, reset, layout, componentes, utilidades y media queries.
- Usar variables CSS para colores, sombras y tokens visuales.
- Preferir selectores semánticos y específicos.
- Mantener consistencia en nombres de clases: kebab-case.
- No duplicar reglas ni estilos cuando puedan reutilizarse.

## Convenciones de JavaScript
- Usar const para valores constantes y let para variables re-asignables.
- Nombrar funciones con verbos descriptivos, por ejemplo: changeMessage, toggleTheme, updateClock.
- Usar funciones pequeñas y con una sola responsabilidad.
- Preferir querySelector y getElementById solo cuando el propósito sea claro y directo.
- Evitar código duplicado; reutilizar lógica cuando sea posible.
- Mantener la inicialización de eventos en el mismo bloque lógico.

## Requisitos de calidad
- La funcionalidad ya existente debe mantenerse intacta.
- Cualquier cambio debe respetar la estructura visual actual del sitio.
- Las modificaciones deben mejorar la legibilidad o mantenibilidad sin romper la experiencia.
- Si se añaden nuevas funciones, deben integrarse con el estilo existente y no introducir comportamiento inesperado.
- Antes de dar por finalizado un cambio, comprobar que el JavaScript no tenga errores de sintaxis.

## Estructura esperada del proyecto
- index.html: estructura principal de la página
- style.css: estilos y diseño visual
- script.js: lógica de interacción y comportamiento
- .github/copilot-instructions.md: reglas y convenciones del proyecto

## Criterio de entrega
Cuando se trabaja en este proyecto, prioriza:
1. Consistencia con el estilo actual.
2. Simplicidad y claridad.
3. Buen mantenimiento del código.
4. Compatibilidad con la página sin añadir dependencias innecesarias.
