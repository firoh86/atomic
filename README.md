# Atomic design

Esto es una práctica en react para poner en uso la metodología de web design basada en Atomic Design

---

# Hablemos de la estructura:

    En la estructura de atómic design partimos desde los elementos más pequeños hasta los más grandes para crear librerías de componentes reutilizables.
    átomos, moléculas, organismos, templates y páginas.

---

## Átomos

Consideramos atomos a los elementos más pequeños que pueden existir por sí mísmos, como por ejemplo, un logotipo, una imagen o un botón y no dependen de ninguno más para ser creados.
labels, buttons, imputs, text, modal

## Molécula

Las moléculas son componentes compuestos por dos o más átomos debidamente. (Un bloque con tres iconos o acciones, un bloque de comentarios, etc...)

## Organismos

Un organismo se crea por la unión de dos o más moléculas. Por ejemplo un card, un formulario, el navbar con sus secciones o el menú de navegacion (Bloques).

## Template o plantilla

La unión de dos o más organismos formarian un organismo. Sería la interfaz construida pero aún sin la información final.
Sería como la estructura ya ensamblada y lista para recibir la información.

## Pages

Las páginas son estos templates rellenos de la información necesaria para mostrarse y ser interactivas. Sería como la vista final de un template en uso, por así decirlo.

---

# Librerías y complementos para el desarrollo de esta práctica

Para ésta práctica voy a estar usando algunas librerías/módulos extra a react como son

Enrutado de los diferentes landings:
react/router
Manejo de control de estado de la aplicación:
react/redux
Librería de estylo externa:
Material UI

Para la parte del backend:
Nodejs
Express
Api de la aplicación aún no he decidido si haré una propia.
Depende de la base de datos que elija durante el desarrollo de esta aplicación.

Test unitarios con:
Cipress

Base de datos
Aún por especificar. Puede ser una base de datos con api integrada como firebase o sacaré la info de una API
