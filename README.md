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

---

# Problemas enfrentados durante la práctica.

@ Primer uso de cypress para hacer test, en este caso no unitarios, cypress te proporciona todo un entorno para testing tanto de front como de back, no estoy acostumbrado a realizar este tipo de tests, pero debo admitir que me parece impresionante.

Algunos problemas en la instalación.
Tras instalar el paquete con npm me lanzó un error de que faltaban dependencias.
correccíon:
npx cypress install --force

Configuración:
Hay que configurar algunas cosas para empezar a usar cypress por primera vez.

en package.json al script de test lo vamos a llamar:
"test": "cypress open",

En el fichero que se crea de cypress.json vamos a escribir la ruta para los test en local del front:
{
"baseUrl": "http://localhost:3000/"
}
Después de registrarnos en la web de cypress ya podemos correr el entorno de testing con:
npm run test
básicamente solo le hemos cambiado el valor para saber que estamos usando cypress pero esto no causa ningún cambio real.

En el directorio root de cypress, buscamos integración y allí vamos a crear los ficheros para nuestros test, ejemplo:
homepage.js
El resto se puede encontrar en la documentación.
Como detalle, lo ideal sería hacer un test completo por cada view y además por cada flujo posible puesto que la mayoría de estos van ha hacer uso de varios views para ellos.
Aún no tengo back ni database para probar el 100% del potencial de cypress, pero iré actualizando.
