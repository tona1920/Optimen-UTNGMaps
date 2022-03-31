# Optimen_UTNGMaps
# Integradora II
[![Contribuidores][contribuidores-shield]][contributors-url]

## contenido
<details>
  <summary>Tabla contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#descripción">Descripción</a></li>
        <li><a href="#objetivos">Objetivos</a></li>
        <li><a href="#organigrama">Organigrama</a></li>
        <li><a href="#diagrama-gantt">Diagrama Gantt</a></li>
      </ul>
    </li>
    <li>
      <a href="#análisis-de-la-solución">Análisis de la Solución</a>
      <ul>
        <li><a href="#requerimientos">Requerimientos</a></li>
        <li><a href="#diagrama-casos-de-uso">Diagrama de Casos de Uso</a></li>
      </ul>
    </li>
    <li>
      <a href="#diseño-de-la-solución">Diseño de la Solución</a>
      <ul>
        <li><a href="#modelo-relacional">Modelo Relacional</a></li>
        <li><a href="#diagrama-de-clases">Diagrama de Clases</a></li>
        <li><a href="#diagrama-de-componentes">Diagrama de Componentes</a></li>
      </ul>
    </li>    
    <li>
      <a href="#implementación">Implementación</a>
      <ul>
        <li><a href="#estándares-codificación">Estándares Codificación</a></li>
        <li><a href="#arquitectura">Arquitectura</a></li>
        <li><a href="#código-fuente">Código Fuente</a></li>
      </ul>
    </li>      
    <li>
      <a href="#pruebas">Pruebas</a>
      <ul>
        <li><a href="#casos-de-prueba">Casos de prueba</a></li>
        <li><a href="#ejecución">Ejecución</a></li>
      </ul>
    </li>       
    <li><a href="#guias">Guias</a></li>
    <li><a href="#contribucion">Contribución</a></li>
    <li><a href="#licencia">licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#participantes">Participantes</a></li>
  </ol>
</details>

<!-- Acerca del proyecto -->
## Acerca del proyecto
Requisitos.

<!-- Descripción -->
#### Descripción.
<p>La finalidad por la que decidimos optar por la opción que nos ofrecía la empresa Optimen la cual constaba de dos proyectos, el primero era el mapeo e identificación de rutas que tiene la UTNG y el segundo era la detección de vuelos a través de Google Earth.</p>
<p>En este punto el equipo decidió que llevaremos a cabo la primera opción que es el mapeo de nuestra propia Institución académica, la cual va ayudar mucho tanto a estudiantes de nuevo ingreso como a personas que quieran visitar la institución, el proyecto que vamos a implementar es un software que esté conectado con Google Earth y pueda enseñar rutas directas en la escuela la cual te puedan llevar de un punto a otro.</p>
<p>De igual manera será una aplicación que puedan usar los estudiantes que ya conozcan la universidad, Dentro del mapeo que haremos existirán rutas para guiarnos dentro de la escuela también, se pondrán imágenes de los edificios donde se señalan los puntos de evacuación en caso de una emergencia( ya sea natural o de provocación humana).</p>
<p>Está pensado para que sea una aplicación web, para que el usuario use la interfaz que se le haga más cómodo en su momento, que con ayuda de Google Earth se pueda ver las rutas que hay para cada edificio desde el instante que entras a la institución UTNG.</p>
<p>Al igual que como una implementación que le agregaremos al proyecto podremos ver y analizar las áreas verdes comunes que hay dentro de la institución, proporcionaremos gráficas y mencionaremos con que software estamos obteniendo estos datos y cifras.</p>
<p>En cuanto a tiempo se estimo un total de 2 semanas para la planeacion del proyecto y 10 semanas para el desarrollo del mismo, en cuanto a dinero nada mas se invirtio en dos cursos uno llamado Google Earth Pro. Llega a experto desde cero y QGIS & Google Earth Engine for Environmental Applications con un valor de 100 MXN.</p>

<!-- Objetivos -->
#### Objetivos.
<p>Objetivo general:</p>
<p>El objetivo general que nosotros planteamos es el desarrollar una aplicación web que pueda ayudar a implementar varios softwares tales como google earth Engine, google maps, planet, en una solo aplicación y utilizando su api, todo esto enfocado a la universidad UTNG, con esta aplicación los usuarios tendrán acceso al software, donde podrán ver las rutas que hay para cada edificio de la universidad y la rutas mas rapida para llegar desde el momento en que entran.</p>
<p>Objetivos específicos:</p>
<p>Que la aplicación web pueda crear rutas para todos los edificios de la UTNG y que dentro del edificio a través de imágenes se pueda apreciar los puntos de acceso y los puntos de salida rápida. Al igual que pueda mostrar las áreas verdes comunes que tiene la escuela.</p>

<!-- Organigrama -->
#### Organigrama.
<table class="default">

  <tr>
    <th scope="row">INTEGRANTE</th>
    <th>ROL</th>
  </tr>

  <tr>
    <th>Alexander Alonso Rodriguez</th>
    <td>Lider, Programador, Project Management y Tester.</td>
  </tr>
<tr>
    <th>Gerardo Tonathiu Rojas</th>
    <td>Programador, Analista y DevOps.</td>
  </tr>

  <tr>
    <th>Andrés Arredondo Escalante</th>
    <td>Programador y Tester.</td>
  </tr>
  
   <tr>
    <th>José Israel Saldaña Godinez</th>
    <td>Programador y Analista.</td>
  </tr>

</table>

<!-- Diagrama Gantt -->
#### Diagrama Gantt.
Diagrama Gantt.

<!-- Análisis del proyecto -->
## Análisis de la Solución.
En ésta sección se indicará los artefactos generados en base a la solución.

<!-- Requerimientos -->
#### Requerimientos.
REQUERIMIENTOS FUNCIONALES

<table class="default">

  <tr>
    <th scope="row">Identificador</th>
    <th>RF01</th>
  </tr>

  <tr>
    <th>Nombre </th>
    <td>Registro de Usuarios</td>
  </tr>
<tr>
    <th>Descripción</th>
    <td>
      <p>Precondición: Se debe disponer con un correo y contraseña válida y disponible. </p>

 <p>Descripción: Se registrará en el sistema toda la información necesaria para llevar a cabo el registro de una persona. </p>

 <p>Postcondición: Se realizará el registro de una persona. </p>
</td>
  </tr>
</table>

<table class="default">

  <tr>
    <th scope="row">Identificador</th>
    <th>RF02</th>
  </tr>

  <tr>
    <th>Nombre </th>
    <td>Inicio de Sesión </td>
  </tr>
<tr>
    <th>Descripción</th>
    <td>
      <p>Precondición: Se debe tener una cuenta previamente registrada. </p>

 <p>Descripción: Se debe ingresar la información(correo electrónico y contraseña) correcta de la cuenta.</p>

 <p>Postcondición: El usuario tendrá acceso al sistema.</p>
</td>
  </tr>
</table>

<table class="default">

  <tr>
    <th scope="row">Identificador</th>
    <th>RF03</th>
  </tr>
  <tr>
    <th>Nombre </th>
    <td>Cifrado de Datos</td>
  </tr>
  <tr>
    <th>Descripción</th>
    <td>
<p>Precondición: Ingresar una contraseña la cual su extensión sea mayor a 6 caracteres.</p>
<p>Descripción: El usuario deberá ingresar la contraseña para que el sistema realice la encriptación de esta misma.</p>
<p>Postcondición: Se realizará la encriptación de la contraseña.</p>
</td>
  </tr>
</table>


<table class="default">

  <tr>
    <th scope="row">Identificador</th>
    <th>RF04</th>
  </tr>

  <tr>
    <th>Nombre </th>
    <td>Consulta de Edificios</td>
  </tr>
<tr>
    <th>Descripción</th>
    <td>
      <p>Precondición: Estar logueado en la aplicación. </p>

 <p>Descripción: El usuario del sistema podrá realizar la consulta de algún edificio de la UTNG.</p>

 <p>Postcondición: Se realizará el mapeo de la ruta para llegar a el edificio seleccionado</p>
</td>
  </tr>
</table>


<table class="default">

  <tr>
    <th scope="row">Identificador</th>
    <th>RF05</th>
  </tr>

  <tr>
    <th>Nombre </th>
    <td>Consulta de Áreas Verdes</td>
  </tr>
<tr>
    <th>Descripción</th>
    <td>
      <p>Precondición: Estar logueado en la aplicación. </p>

 <p>Descripción: El usuario podrá realizar consultas sobre las áreas verdes que cuenta la UTNG.</p>

 <p>Postcondición: El usuario tendrá información de manera gráfica en donde se especifique el relieve de la región(UTNG).</p>
</td>
  </tr>
</table>

<table class="default">

  <tr>
    <th scope="row">Identificador</th>
    <th>RF06</th>
  </tr>

  <tr>
    <th>Nombre </th>
    <td>Consulta de Rutas</td>
  </tr>
<tr>
    <th>Descripción</th>
    <td>
      <p>Precondición: Estar logueado en la aplicación. Selección de un edificio perteneciente a la UTNG.</p>

 <p>Descripción: El usuario del sistema podrá realizar la consulta de las rutas que tiene el edificio seleccionado de la UTNG.</p>

 <p>Postcondición: Se realizará el mapeo de las rutas que contiene el edificio seleccionado</p>
</td>
  </tr>
</table>

REQUERIMIENTOS NO FUNCIONALES

<table class="default">

  <tr>
    <th scope="row">Identificador</th>
    <th>RN01</th>
  </tr>
  <tr>
    <th>Nombre </th>
    <td>Uso de NodeJS.</td>
  </tr>
  <tr>
    <th>Descripción</th>
    <td>
      El software deberá ser realizado mediante el entorno NodeJS y aunque no sea una restricción puede existir alguna herramienta que no podamos utilizar.
</td>
  </tr>
</table>

<table class="default">

  <tr>
    <th scope="row">Identificador</th>
    <th>RN01</th>
  </tr>
  <tr>
    <th>Nombre </th>
    <td>Cifrado de Datos</td>
  </tr>
  <tr>
    <th>Descripción</th>
    <td>
<p>Precondición: Ingresar una contraseña la cual su extensión sea mayor a 6 caracteres.</p>
<p>Descripción: El usuario deberá ingresar la contraseña para que el sistema realice la encriptación de esta misma.</p>
<p>Postcondición: Se realizará la encriptación de la contraseña.</p>
</td>
  </tr>
</table>

<table class="default">

  <tr>
    <th scope="row">Identificador</th>
    <th>RN01</th>
  </tr>
  <tr>
    <th>Nombre </th>
    <td>Cifrado de Datos</td>
  </tr>
  <tr>
    <th>Descripción</th>
    <td>
<p>Precondición: Ingresar una contraseña la cual su extensión sea mayor a 6 caracteres.</p>
<p>Descripción: El usuario deberá ingresar la contraseña para que el sistema realice la encriptación de esta misma.</p>
<p>Postcondición: Se realizará la encriptación de la contraseña.</p>
</td>
  </tr>
</table>

<table class="default">

  <tr>
    <th scope="row">Identificador</th>
    <th>RN01</th>
  </tr>
  <tr>
    <th>Nombre </th>
    <td>Cifrado de Datos</td>
  </tr>
  <tr>
    <th>Descripción</th>
    <td>
<p>Precondición: Ingresar una contraseña la cual su extensión sea mayor a 6 caracteres.</p>
<p>Descripción: El usuario deberá ingresar la contraseña para que el sistema realice la encriptación de esta misma.</p>
<p>Postcondición: Se realizará la encriptación de la contraseña.</p>
</td>
  </tr>
</table>



<!-- Diagrama de Casos de Uso -->
#### Diagrama Casos de Uso.
Agregar la imagen de los Casos de Uso.

<!-- Diseño del proyecto -->
## Diseño de la Solución.
En ésta sección se indicará los artefactos generados en base a la solución.

<!-- Modelo Relacional -->
#### Modelo Relacional.
Esquema de la base de datos (nombre de campo, tipo de datos, restricciones, etc)

<!-- Diagrama de Clases -->
#### Diagrama de Clases.
Esquema de las clases empleadas (atributos y sus métodos).

<!-- Diagrama de Componentes -->
#### Diagrama de Componentes.
Esquema de los componentes que interactúan (Modelo, Vista, Controlador, Servidor Web, Servidor de base de datos)

<!-- Implementación del proyecto -->
## Implementación.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Estándares de Codificación -->
#### Estándares Codificación.
Estándares empleados en la codificación

<!-- Arquitectura MVC y Middleware -->
#### Arquitectura.
Definir los patrones empleados y de seguridad.

<!-- Código Fuente -->
#### Código Fuente.
Código Fuente de la solución

<!-- Pruebas proyecto -->
## Pruebas.
En ésta sección se describe  los artefactos generados en base a la solución.

<!-- Casos de prueba -->
#### Casos de prueba.
Indicar los casos de prueba

<!-- Ejecución Casos de prueba -->
#### Ejecución.
Evidencia de Ejecución de Casos de prueba.

<!-- Iniciando -->
## Iniciando
Iniciando.

<!-- Requisitos -->
### Requisitos
Requisitos de Instalación.

<!-- Instalación -->
### Instalacion
Instalación del Software

## Guias
Guias de Uso.

## contribucion
Contribucion.

## Licencia
Licencia.

## Contacto
Contacto.

## Participantes
* [Alexander Alonso](https://github.com/AlexAlonRo)
* [Andres Arredondo](https://github.com/AndresArrEsc)
* [Gerardo Rojas](https://github.com/tona1920)
* [Jose Saldaña](https://github.com/Israel99XD)

[contribuidores-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
