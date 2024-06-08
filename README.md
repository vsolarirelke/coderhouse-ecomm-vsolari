<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/vsolarirelke/coderhouse-ecomm-vsolari">
    <img src="https://github.com/vsolarirelke/coderhouse-ecomm-vsolari/blob/main/public/images/logo_react.png?raw=true" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Ecommerce-ReactJs</h3>

  <p align="center">
    Proyecto ReactJS
    <br />
    Alumno: Victor Solari
    <br />
    Curso: 57750
    <br />
    <br />
    <a href="https://incomparable-kheer-1a8e09.netlify.app">Ver Demostración</a>
    ·
    <a href="https://github.com/vsolarirelke/coderhouse-ecomm-vsolari/issues/new?labels=bug">Reporte Errores</a>
    ·
    <a href="https://github.com/vsolarirelke/coderhouse-ecomm-vsolari/issues/new?labels=enhancement">Solicitar Funcionalidad</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre el proyecto</a>
      <ul>
        <li><a href="#built-with">Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Empezando</a>
      <ul>
        <li><a href="#prerequisites">Requisitos previos</a></li>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Hoja de Ruta</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://incomparable-kheer-1a8e09.netlify.app)

El siguiente proyecto es un ejemplo de un Ecommerce que contempla categorias, productos, imagenes y carrito de compra.

<p align="right">(<a href="#readme-top">Ir arriba</a>)</p>



### Built With

A continuación se listan las principales tecnologias utilizadas.

* [![React][React.js]][React-url]
* [![Vitejs][Vite.com]][Vite-url]
* [![Bootstrap5][Bootstrap.com]][Bootstrap-url]
* [![Firebase][Firebase.com]][Firebase-url]

<p align="right">(<a href="#readme-top">Ir arriba</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Para poner en funcionamiento una copia local, siga estos sencillos pasos de ejemplo.

### Prerequisites

Debe tener instalado nodeJs superior a la version 18, de caso contrario ejecutar el siguiente comando:

1.- Ve al sitio web oficial de Node.js en nodejs.org.
2.- Descarga el instalador de Node.js segun las caracteristicas de tu computador.
3.- Una vez que se haya completado la descarga, ejecuta el instalador haciendo doble clic en el archivo descargado.
4.- Sigue las instrucciones del instalador para completar la instalación. Puedes aceptar la configuración predeterminada o personalizarla según tus preferencias.
5.- Después de la instalación, verifica que Node.js se haya instalado correctamente abriendo la Terminal y escribiendo los siguientes comandos:

* npm
  ```sh
  node -v
  npm -v
  ```

Si quieres crear un proyecto desde 0 en reactJS + ViteJS
* Proyecto
  ```sh
  npm create vite@latest .
  yes
  (opcion) React
  (opcion) Javascript
  ```


### Installation

A continuación se muestra un ejemplo de como descargar el proyecto e iniciarlo de manera local

1. Clonar el repositorio
   ```sh
   git clone https://github.com/vsolarirelke/coderhouse-ecomm-vsolari.git
   ```
3. Instalar NPM packages
   ```sh
   npm install
   ```
4. Iniciar proyecto
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">Ir arriba</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Pre-Entrega 1
    - [x] Crea una carpeta dentro de src llamada components que contenga la implementación del componente NavBar dentro del archivo NavBar.js. Su funcionalidad es la de renderizar una barra de menú (Navbar).
    - [x] Crear el menú e-commerce de tu proyecto.
    - [x] Brand (título/nombre de la tienda).
    - [x] Un listado de categorías clickeables.
    - [x] Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).
    - [x] Crea un componente CartWidget.jsx que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js para que esté visible en todo momento.
    - [x] Crea un componente ItemListContainer. Impórtalo dentro de App.jsx, y abajo de NavBar.jsx. 
    - [x] Crear la landing de tu proyecto.
    - [x] Link al último commit de tu repositorio en Github. Debe tener el nombre “PreEntrega1+Apellido”

- [x] Pre-Entrega 2
  - [x] Actividad 2
    - [x] Crea los componentes Item.js e ItemList.js para mostrar algunos productos en tu ItemListContainer.js. Los ítems deben provenir de un llamado a una promise que los resuelva en tiempo diferido (setTimeout) de 2 segundos, para emular retrasos de red (model/Products.js)
    - [x] Item.js: Es un componente destinado a mostrar información breve del producto que el user clickeará luego para acceder a los detalles (los desarrollaremos más adelante)
    - [x] ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer de la primera pre-entrega del Proyecto Final)
    - [x] Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red.

- [x] Entrega Final
  - [x] Un usuario debe poder ingresar, navegar por los productos e ir a sus detalles.
  - [x] Desde el detalle se debe poder ver la descripción, foto y precio e ingresarlo al carrito.
  - [x] Una vez que el carrito tenga al menos un producto, se deberá visualizar un listado compacto de la orden con el precio total.
  - [x] Al ingresar su nombre, apellido, teléfono e e-mail (ingresándolo dos veces para corroborar que sea correcto), debe activarse el botón de ‘realizar compra’.
  - [x] Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback del número de orden.
Los requisitos base serán parte de los criterios de evaluación para aprobar el proyecto.
React Js - Proyecto Final
- [x] Inicio: Al momento de ingresar a la app en la ruta base ‘/’
  - [x] Visualizar -como mínimo- un set de productos disponibles para la compra.
  - [x] Contar con algún acceso visible a la vista de carrito que debe alojarse en el route /cart.
  - [x] Acceder a un menú desplegable que contendrá las categorías. Al clickear en una, debe navegar a la lista de productos de la misma
    mediante un route /categories/:categoryId. Éste invocará la misma vista que el home, pero visualizando sólamente productos de esa categoría.
- [x] Flow: Al clickear un ítem del listado debe navegar a la ruta /item/:id, donde id es el id del item (generado por firebase), y ver la descripción del producto (foto, precio, selector de cantidad). Si se ingresa a /item/:id y el producto no existe en firebase, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.
- [x] Firebase:
  - [x] items: catálogo completo
      - [x] Link para foto (puede almacenarse de modo estático en la página en una subruta /assets/:itemid )
      - [x] Precio unitario
      - [x] Descripción (sólo se ve en detalle)
      - [x] Categoria (id a mano para versión estática, o id de firebase para versión dinámica -opcional-)
  - [x] orders: las órdenes generadas, que deben incluir los productos, descripciones y los precios al momento de la compra.
      - [x] Las órdenes deben poder tener items surtidos, cada uno con su cantidad. Por ejemplo: remeras x 2 y gorra x 1
      - [x] id, items, fecha, estado ( por defecto en ‘generada’)
  - [x] categories (solo para versión dinámica -opcional-):
      - [x] Versión dinámica (-opcional-): Crear una colección de categories en firebase para hidratar el menú y usar los id’s de éstos para linkearlos a sus ítems. Idealmente, categories/:id debería tener una descripción {id: ‘ad43k348j’, key: ‘calzado’, description: ‘Calzado’} para que quede /categories/calzado en lugar de /categories/ad43k348j
      - [x] El cart debe ser accesible durante toda la experiencia y tener una indicación de la cantidad de items incluidos agregados (ej. si hay un ítem con dos unidades y un ítem con una unidad, debe decir ‘tres’).
- [x] Checkout mínimo:
  - [x] Items con sus cantidades
  - [x] Total de la orden
  - [x] Input para nombre, apellido y teléfono
  - [x] Input para email y lógica de repetir el email 2 veces (a excepción de que realicen el desafío extra de auth, en ese caso no sería necesario)   
- [x] Finalizada la orden, debo recibir mi order id con el id del objeto de firebase.
- [x] La navegabilidad debe ocurrir utilizando el router, y no href’s o location.
- [x] Por cada librería pública extra que utilices, deberás incluir en algún archivo el link al proyecto, y una justificación de por qué agrega valor.
- [x] Readme.md: El archivo debe estar en el root del proyecto para dar una breve introducción acerca de su proyecto y qué ideas o enfoque eligió para el mismo. Si incluyó dependencias extra por npm (por fuera de las trabajadas en clase), aparte debe hacer un resumen explicando sus decisiones.

Requisitos Extra
- [x] Stock check: Validar stock al momento de intentar generar la order.
- [x] Categories dinámicas: crear una colección de firebase para las categorías e hidratar el menú en base a eso.
- [x] Cart persistente: Hacer que el cart sea persistente en alguna api de almacenamiento local en el navegador (local/session storage).

Para visualizar el ultimo commit debe ingresar:

Historial de Commits - [commits](https://github.com/vsolarirelke/coderhouse-ecomm-vsolari/commits)


<p align="right">(<a href="#readme-top">Ir arriba</a>)</p>


<!-- CONTACT -->
## Contact

Linkedin - [Ver Linkedin](https://www.linkedin.com/in/victor-solari-orellana-62a89796)

Enlace Proyecto: [https://github.com/vsolarirelke/coderhouse-ecomm-vsolari](https://github.com/vsolarirelke/coderhouse-ecomm-vsolari)

<p align="right">(<a href="#readme-top">Ir arriba</a>)</p>

## Dependencies
`React`: Biblioteca de JavaScript para construir interfaces de usuario interactivas y componentes reutilizables.
`Firebase`: Plataforma de desarrollo de aplicaciones de Google que proporciona servicios backend como bases de datos en tiempo real, autenticación y alojamiento.
`Yup`: Biblioteca de validación de esquemas en JavaScript que se usa para definir y validar la estructura y los datos de formularios.
`Bootstrap`: Framework de código abierto para desarrollar sitios web y aplicaciones web responsivas y móviles, utilizando HTML, CSS y JavaScript.
`React-content-loader`: Permite crear animaciones de contenido de carga (placeholders) personalizables para mejorar la experiencia del usuario mientras se cargan los datos.
`React-icons`: Proporciona una colección de iconos populares y personalizables para su fácil integración en aplicaciones
`React-router-dom`: Facilita la implementación de enrutamiento y navegación en aplicaciones web de una sola página (SPA)
`React-toastify`: Permite mostrar notificaciones (ventanas emergentes) tipo "toast" de manera fácil y personalizable
`Vite`: Herramienta de desarrollo rápida que sirve como un bundler y servidor de desarrollo para aplicaciones web basadas en JavaScript y TypeScript



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/victor-solari-orellana-62a89796
[product-screenshot]: https://github.com/vsolarirelke/coderhouse-ecomm-vsolari/blob/main/public/images/screenshot.png?raw=true{:target="_blank"}
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Vite.com]: https://img.shields.io/badge/logo-compilacion-blue?logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Firebase.com]: https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34
[Firebase-url]: https://firebase.google.com

[bootstrap]: https://getbootstrap.com
[firebase]: https://firebase.google.com/
[react]: https://es.react.dev/
[react-content-loader]: https://github.com/danilowoz/react-content-loader
[react-icons]: https://react-icons.github.io/react-icons/
[react-router-dom]: https://reactrouter.com/
[react-toastify]: https://github.com/fkhadra/react-toastify
[yup]: https://github.com/jquense/yup
[Vite]: https://vitejs.dev/
