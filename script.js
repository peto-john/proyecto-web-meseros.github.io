/* 
DESCRIPCION DE document.addEventListener('DOMContentLoaded'); :
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Es una forma estándar en JavaScript de ejecutar código solo cuando el documento HTML ha sido completamente cargado y analizado por el navegador. 

¿Por qué es útil?
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Esta línea de código se utiliza para evitar errores que pueden ocurrir si intentas manipular elementos HTML con JavaScript antes de que existan en la página. Por ejemplo:
Si un script intenta seleccionar un botón o un divantes de que el navegador lo haya cargado, el script fallará y no hará lo que se espera.
Al poner el código dentro del oyente de DOMContentLoaded, te aseguras de que todos los elementos HTML ya estén disponibles para ser accedidos y modificados por tu script. 
*/
document.addEventListener('DOMContentLoaded', function() { 

    // funcion para Cargar Servicios
    cargarServicios();
    
    // funcion para Cargar Galería
    cargarGaleria();

    // funcion para Cargar Equipo de Trabajo
    cargarEquipoTrabajo();

    // funcion para Cargar opciones de servicios en el formulario
    cargarServicioSeleccionado();

    // funcion para Manejar el envío del formulario
    // Asocia el evento "submit" del formulario con id "cita-form" a la función "manejarEnvioFormulario", encargada de procesar el envío.
    document.getElementById('cita-form').addEventListener('submit', manejarEnvioFormulario);

    // funcion para Manejar el menú hamburguesa
    configuracionMovilMenu();

    // funcion para Efecto de scroll para el header
    configurarEncabezadoDesplazamiento();

    // funcion para Abrir Modal de Login para el Administrador
    abrirLoginModal();

});


/* Sintaxis De Funciones En Lower Camel Case: La primera palabra empieza con minúscula y las subsiguientes con mayúscula. -->  Ejemplo: variableNumeroUno */
function cargarServicios() {
    // Selecciona un elemento HTML específico para su atributo Por id . El método getElementById() busca en el documento actual y devuelve una referencia al primer elemento que tiene el id
    const serviciosContenedor = document.getElementById('servicios-contenedor');

    // ( servicios es una CONST GLOBAL del ARCHIVO JavaScript " db_estatica.js " que se CARGA PRIMERO Segun el ORDEN en el HTML por eso TENEMOS Acceso sin Importar el Archivo) 
    // El método ( forEach ) Ejecuta la función que se le pasa como argumento (en este caso, la función flecha servicio => { ... }) una vez por cada elemento del array
    servicios.forEach(servicio => {
        const servicioTarjeta = document.createElement('div') // Crea un nuevo elemento HTML <div> en memoria y lo asigna a una variable llamada servicioTarjeta
        servicioTarjeta.className = 'servicios-card';  // Asigna el nombre de la clase CSS servicios-card a un objeto JavaScript llamado servicioCard

        /*modifica el contenido HTML de un elemento con el ID ServicioTarjeta. Esto se hace para reemplazar todo el contenido HTML dentro de ese elemento con el nuevo contenido
        especificado después del signo de igual en este caso se usa plantilla ( `...` ) literal en JavaScript, lo que significa que se puede escribir código HTML directamente dentro de ella, 
        incluyendo saltos de línea y expresiones incrustadas (como${variable}` */
        servicioTarjeta.innerHTML = `
            <div class="servicios-img">
                <img src="${servicio.imagen}" alt="${servicio.nombre}">
            </div>
            <div class="servicios-informacion">
                <h3>${servicio.nombre}</h3>
                <p>${servicio.descripcion}</p>
                <p class="servicios-precios">$${servicio.precio}</p>
            </div>
        `;

        serviciosContenedor.appendChild(servicioTarjeta); // Toma un elemento o nodo que ya ha sido creado y lo inserta como un hijo dentro de otro elemento, llamado serviciosContenedor en este caso. 

    });

}


// Esta función carga y muestra las imágenes en la galería de la página.
// Usa una lista global llamada "galeriaImagenes" (definida en otro archivo JS llamado "db_estatica.js").
// Por cada imagen en esa lista, crea un nuevo elemento <div> con la clase "galeria-item"
// y dentro coloca la etiqueta <img> con su URL y texto alternativo, agregándola al contenedor principal.
function cargarGaleria() {
    // Obtiene el elemento del HTML donde se mostrará la galería
    const galeriaContenedor = document.getElementById('galeria-contenedor');
    
    // "galeriaImagenes" es una variable global con los datos de las imágenes (url y alt)
    // que viene del archivo "db_estatica.js" cargado antes en el HTML
    galeriaImagenes.forEach(imagen => {
        // Crea un nuevo div para cada imagen
        const galeríaArtículo = document.createElement('div');
        galeríaArtículo.className = 'galeria-item'; // Le agrega una clase para aplicar estilos CSS
        
        // Inserta la imagen dentro del div con su ruta y texto alternativo
        galeríaArtículo.innerHTML = `
            <img src="${imagen.url}" alt="${imagen.alt}">
        `;
        
        // Agrega este nuevo div dentro del contenedor de la galería
        galeriaContenedor.appendChild(galeríaArtículo);
    });
}



function cargarEquipoTrabajo() {
    const equipoContenedor = document.getElementById('equipo-contenedor');
    // ( miembrosEquipo Es una CONST GLOBAL del ARCHIVO JavaScript " db_estatica.js " que se CARGA PRIMERO Segun el ORDEN en el HTML por eso TENEMOS Acceso sin Importar el Archivo)
    miembrosEquipo.forEach(miembro => {
        const equipoMiembro = document.createElement('div');
        equipoMiembro.className = 'equipo-miembro';
        
        equipoMiembro.innerHTML = `
            <div class="equipo-miembro-img">
                <img src="${miembro.imagenEquipo}" alt="${miembro.imagenEquipo}">
            </div>
            <h4>${miembro.nombre}</h4>
            <p>${miembro.cargo}</p>
        `;
        
        equipoContenedor.appendChild(equipoMiembro);
    });
}


function cargarServicioSeleccionado() {
    const servicioSeleccionado = document.getElementById('servicio');
    
    servicios.forEach(servicio => {
        const opcion = document.createElement('option');
        opcion.value = servicio.id;
        opcion.textContent = `${servicio.nombre} -  $ ${servicio.precio}`;
        servicioSeleccionado.appendChild(opcion);
    });
}


function manejarEnvioFormulario(e) {
    e.preventDefault();// PREVIENE EL ENVIO POR DEFECTO DEL NAVEGADOR AL PRESIONAR EL BOTON ENVIAR
    // EN ESTAS VARIABLES/CONSTANTES SE RECUPERAN LOS VALORES QUE ESCRIBE EL USUARIO POR CADA UNO DE LOS Input del Formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const servicio = document.getElementById('servicio').value;
    const fecha = document.getElementById('fecha').value;
    const mensage = document.getElementById('mensage').value;
    
    // Aquí normalmente haríamos una petición AJAX para enviar los datos al servidor
    // Por ahora solo mostraremos un mensaje de éxito
    
    alert(`Gracias ${nombre}, tu cita ha sido reservada. Te esperamos el ${fecha}.`);
    
    // Resetear el formulario
    e.target.reset();
}


// ESTA ES LA FUNCION QUE CONTROLA EL MENU " HAMBURGUESA " CUANDO EL ANCHO DE LA PANTALLA LLEGUE A @media (max-width: 768px) APARECE ( EN CSS --> display: block; )
function configuracionMovilMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu ul');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}


// Esta función hace que, cuando el usuario se desplace hacia abajo más de 50 píxeles,
// se agregue la clase "scrolled" al encabezado (<header>), y cuando vuelva arriba, se quite.
function configurarEncabezadoDesplazamiento() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}


// Selecciona todos los enlaces (<a>) cuyo atributo href comience con "#"
// Estos son los enlaces que llevan a una sección dentro de la misma página.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    // Agrega un evento "click" a cada enlace encontrado
    anchor.addEventListener('click', function(e) {
        
        // Evita el comportamiento predeterminado del enlace (saltar directo a la sección)
        e.preventDefault();

        // Obtiene el valor del atributo "href" (por ejemplo, "#contacto")
        const targetId = this.getAttribute('href');

        // Busca en el documento el elemento con ese id (por ejemplo, <section id="contacto">)
        const targetElement = document.querySelector(targetId);

        // Realiza un desplazamiento suave hasta la posición de ese elemento
        // "offsetTop" obtiene la distancia del elemento desde la parte superior de la página
        // Se resta 80 píxeles para dejar espacio (útil si hay un menú fijo arriba)
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Posición final del scroll
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});


/* ================================================================================================================
         FUNCIONALIDAD PARA MANEJAR EL INICIO DE SESION PARA EL ADMINISTRADOR ( MODAL + VALIDACION )
         ----------------------------------------------------------------------------------------------------------
         - Muestra el MODAL al Hacer clic en ( Admin ). 
         - Valida las Credenciales del Administrador.
         - Si son Correctas, Guarda el Estado en localStorage y Redirige a la Pagina " panel.html ".
=================================================================================================================== */
function abrirLoginModal() {

    //  VARIABLES GLOBALES DEL MODAL NECESARIAS 
    const adminLink = document.getElementById('admin-link')         // Enlace del Menu " Admin "
    const modalLogin = document.getElementById('login-modal')       // Contenedor del Modal
    const cerrarModal = document.getElementById('cerrar-login')     // Boton " X "  (  <span id="cerrar-login">&times;</span> )
    const loginForm = document.getElementById('login-form')         // Formulario

    // Escucha el evento 'click' en el enlace del administrado Para -->  MOSTRAR EL MODAL CUANDO SE PRESIONA EL ENLACE " admin "
    adminLink.addEventListener('click', function(e) {
        e.preventDefault();     // Evita que el enlace recargue o redirija la página

        modalLogin.classList.remove('oculto');  // Muestra el MODAL Al QUITAR la clase " oculto " del ( styles.css ) --> POR DEFECTO ESTA OCULTO .oculto { display: none; }
    });

    // Escucha el evento 'click' para CERRAR el MODAL al  Presionar la " X "  -->  SE AÑADE LA CLASE QUE ESCONDE EL MODAL
    cerrarModal.addEventListener('click', function() {
        modalLogin.classList.add('oculto');
    });

    // CERRAR MODAL SI SE  HACE CLIC FUERA DEL FORMULARIO --> DONDE  ( e.target ) es el elemento HTML exacto en el que el usuario hizo clic
    window.addEventListener('click', function (e) {
        if (e.target === modalLogin) {
            modalLogin.classList.add('oculto');
        }   
    });

    // VALIDAR EL FORMULARIO DE LOGIN
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();     // Evita El ENVIO por DEFECTO del FORMULARIO o Se recargue o redirija la página
         
        // CAPTURAR LOS VALORES QUE INGRESARON --> Se Almacenan en VARIABLES CONSTANTES
        const usuario = document.getElementById('usuario').value.trim(); // .value Accede al valor actual que el usuario ha escrito dentro del campo de texto o contraseña.
        const contraseña = document.getElementById('contraseña').value.trim(); // .trim() Elimina los espacios en blanco al principio y al final del texto, EJ: " 12345 " se convierte en "12345"

        // VALIDACION SIMPLIFICADA ES SOLO PARA PRUEBAS LOCALES
        if (usuario === 'admin' && contraseña === '123') {

            alert('BIENVENIDO ADMINISTRADOR');

            /* ====================================================================================================================================
                EXPLICACION DE localStorage.setItem('adminLogueado', 'true');
            ---------------------------------------------------------------------------------------------------------------------------------------
            - localStorage Es un almacenamiento local del navegador 
            - Permite guardar datos de forma persistente en el navegador del usuario
            - Los Datos en localStorage no se borran al cerrar el navegador (a menos que el usuario lo haga manualmente o el código los elimine
            - El método .setItem() guarda un par clave–valor (key–value) en el localStorage. Clave (key): 'adminLogueado' y Valor (value): 'true'
            - # EN RESUMEN # guarda una bandera (flag) en el almacenamiento local del navegador que indica que el administrador ha iniciado sesión.
            =======================================================================================================================================*/
            localStorage.setItem('adminLogueado', 'true'); // Guarda el Estado
            modalLogin.classList.add('oculto'); // Se Cierra el Modal

            // REDIRIGIR AL PANEL DEL ADMINISTRADOR -->  OTRO ARCHIVO HTML ( panel.html ) EN EL MISMO NIVEL DEL ( index.htm )
            window.location.href = 'panel.html'; // window.location es un objeto del navegador que representa la URL actual de la página.También puedes asignarle un nuevo valor (una dirección web o un archivo local) para redirigir al usuario.
        } else {
            alert('USUARIO O CONTRASEÑA INCORRECTAS');
        }
        
    });
    
};

