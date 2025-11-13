/* 
DESCRIPCION :
------------------------------------------------------------------------------------------------------------------------------------------------------------------
BASE DE DATOS ESTATICA PARA MANEJAR REGISTROS CON VARIABLES CONSTANTES DE " LISTAS DE OBJETOS O DICCIONARIOS "
QUE  "NO" NECESITAN ESTAR EN UNA DB REAL Y ADEMAS LE DA UNA MEJOR LEGIBILIDAD AL CODIGO 

NOTA IMPORTANTE :
------------------------------------------------------------------------------------------------------------------------------------------------------------------
Este archivo se carga primero por eL orden en el que se encuentra en el HTML para que las VARIABLES y FUNCIONES definidas AQUI queden disponibles GLOBALMENTE
para los demas SCRIPTS ( por ejemplo: script.js o cualquier otro que se encuentre por debajo de el )


¿ POR QUE FUNCIONA ?
------------------------------------------------------------------------------------------------------------------------------------------------------------------
En JavaScript Clasico ( sin usar modulos ES6 ) todos los archivos <script> comparten el mismo contesto global del navegador llamado " WINDOW ".
Esto significa que cualquier VARIABLE o FUNCION definida AQUI se guarda automaticamente en " WINDOW " y puede ser accedida desde otros archivos cargados despues
*/

// Datos de servicios
const servicios = [
    {
        id: 1,
        nombre: "Un Mesero",
        descripcion: "Se Recomienda para un Evento con Capacidad de 20 Personas ( MAXIMO ).",
        precio: "Por Distancia (Km)",
        duracion: "8 HORAS y EXTRAS",
        imagen: "imagenes/imagenes-nuestroServicios/mesero1.jpg" // IMAGEN ALUSIVA A LA CANTIDAD DE MESEROS
    },
    {
        id: 2,
        nombre: "Dos Meseros",
        descripcion: "Se Recomienda para un Evento con Capacidad de 40 Personas ( MAXIMO ).",
        precio: "Por Distancia (Km)",
        duracion: "8 HORAS y EXTRAS",
        imagen: "imagenes/imagenes-nuestroServicios/mesero2.jpg" // IMAGEN ALUSIVA A LA CANTIDAD DE MESEROS
    },
    {
        id: 3,
        nombre: "Tres Meseros",
        descripcion: "Se Recomienda para un Evento con Capacidad de 60 Personas ( MAXIMO ).",
        precio: "Por Distancia (Km)",
        duracion: "8 HORAS y EXTRAS",
        imagen: "imagenes/imagenes-nuestroServicios/mesero3.jpg" // IMAGEN ALUSIVA A LA CANTIDAD DE MESEROS
    },
    {
        id: 4,
        nombre: "Cuatro Meseros",
        descripcion: "Se Recomienda para un Evento con Capacidad de 80 Personas ( MAXIMO ).",
        precio: "Por Distancia (Km)",
        duracion: "8 HORAS y EXTRAS",
        imagen: "imagenes/imagenes-nuestroServicios/mesero4.jpg" // IMAGEN ALUSIVA A LA CANTIDAD DE MESEROS
    },
    
    
    
];

// Imágenes para la galería De Trabajos  //  Sintaxis De Constantes En Lower Camel Case: La primera palabra empieza con minúscula y las subsiguientes con mayúscula. Ejemplo: variableNumeroUno
const galeriaImagenes = [
    {
        url: "imagenes/imagenes-galeriaTrabajos/0.jpg",
        alt: "Descripción de la imagen"
    },
    {
        url: "imagenes/imagenes-galeriaTrabajos/1.jpg",
        alt: "Descripción de la imagen"
    },
    {
        url: "imagenes/imagenes-galeriaTrabajos/2.jpg",
        alt: "Descripción de la imagen"
    },
    {
        url: "imagenes/imagenes-galeriaTrabajos/3.jpg",
        alt: "Descripción de la imagen"
    }
];

// Miembros del equipo Con Imagenes   // Sintaxis De Constantes En Lower Camel Case: La primera palabra empieza con minúscula y las subsiguientes con mayúscula. Ejemplo: variableNumeroUno
const miembrosEquipo = [
    {
        nombre: "Stefanni Echeverry",
        cargo: "Cordinadora",
        imagenEquipo: "imagenes/imagenes-miembrosEquipo/usuarioVacio.jpg" // FOTO DE CADA MIEMBRO DEL EQUIPO
    },
    {
        nombre: "Joel Jaramillo",
        cargo: "Cordinador",
        imagenEquipo: "imagenes/imagenes-miembrosEquipo/usuarioVacio.jpg" // FOTO DE CADA MIEMBRO DEL EQUIPO
    },
    {
        nombre: "Nilson Echeverry",
        cargo: "Mesero 1",
        imagenEquipo: "imagenes/imagenes-miembrosEquipo/usuarioVacio.jpg" // FOTO DE CADA MIEMBRO DEL EQUIPO
    },
    {
        nombre: "Angela Plaza",
        cargo: "Mesero 2",
        imagenEquipo: "imagenes/imagenes-miembrosEquipo/usuarioVacio.jpg" // FOTO DE CADA MIEMBRO DEL EQUIPO
    }
];
