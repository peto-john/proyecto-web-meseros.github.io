 
 document.addEventListener('DOMContentLoaded', function() {

    // funcion para Validar que el Usuario Este Logueado
    validarLogin();

    // Menu lateral
    amburguesaPanel();

});



function amburguesaPanel() {

    const menuBtn = document.getElementById('toggle-menu');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', () => {
        sidebar.classList.add('show');
    })

    document.querySelectorAll('.menu a').forEach(link => {

        link.addEventListener('click', (e) => {
            e.preventDefault();

            sidebar.classList.remove('show');
        })
    });
}

 
 


/*==========================================================================================================
            VALIDACION DE SESION Y CRUD BASICO DE RESERVAS DEL ADMINISTRADOR SOLO PARA " DEMO DE GITHUB "
        ----------------------------------------------------------------------------------------------------
        - Este script se ejecuta al abrir " panel.html "
        - Verificar Si El Administrador esta Logueado.
        - Si NO lo Esta, lo Redirige al ( index.html ).
        - Carga las Reservas Guardadas en el localStorage
        - Permite Eliminar y Actualizar la Tabla.
============================================================================================================ */

// VALIDAR SESION DEL ADMINISTRADOR 
function validarLogin() {


    if(localStorage.getItem('adminLogueado') !== 'true') {
        alert('Debes Iniciar la Sesion para Acceder a este Panel');
        window.location.href = 'index.html';  // Redirige al usuario a la página principal (index.html
        return;
    }


    // OBTENER ELEMENTOS DEL ( DOM ) DE LA TABLA " <tbody> " DONDE SE VAN A CARGAR LOS ELEMENTOS HTML DINAMICAMENTE
    const tablaBody = document.querySelector('#tabla-reservas tbody');
    const btnCerrarSesion = document.getElementById('cerrar-sesion');

    
    //FUNCION PARA CARGAR LAS RESERVAS DINAMICAMENTE ( DOM )
    function cargarReservas() {
        const reservas = JSON.parse(localStorage.getItem('reservas')) || []; // Recupera la clave 'reservas' del localStorage y la convierte de texto JSON a objeto JavaScript Si es null Crea Arreglo Vacio
        
        //limpiar la Tabla
        tablaBody.innerHTML = '';

        /* Comprueba si el arreglo 'reservas' está vacío
        // En caso afirmativo, se actualiza el cuerpo de la tabla con una fila de mensaje
        // y se interrumpe la ejecución para no intentar renderizar filas inexistentes */
        if (reservas.length === 0) {
            tablaBody.innerHTML = `<tr><td colspan="7" style="text-align:center;">No Hay Reservas Registradas.</td></tr>`; // Actualiza el contenido del cuerpo de la tabla para mostrar un mensaje de “No Hay Reservas Registradas”
            return;
        }


        //GENERAR LAS FILAS DINAMICAMENTE ( DOM )
        reservas.forEach((reserva, index) => {                  // 'data-index' guarda la posición de la reserva en el arreglo para identificarla al hacer clic
            const fila = document.createElement('tr');

            fila.innerHTML = `
                <td>${reserva.nombre}</td>
                <td>${reserva.email}</td>
                <td>${reserva.telefono}</td>
                <td>${reserva.servicio}</td>
                <td>${reserva.fecha}</td>

                <td><button class="btn-eliminar" data-index="${index}">Eliminar</button></td>
            
                `;
                tablaBody.appendChild(fila);
            
        });

        // ASIGNAR EVENTO A LOS BOTONES DE ELIMINAR
        document.querySelectorAll('.btn-eliminar').forEach(boton => {
            boton.addEventListener('click', eliminarReserva);
        })

    }


    // FUNCION PARA ELIMINAR UNA RESERVA
    function eliminarReserva(e) {
        const index = e.target.getAttribute('data-index');
        let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

        if (confirm('¿Estas Seguro de Eliminar esta Reserva?')) {
            reservas.splice(index, 1); // Usa el método splice() para eliminar un elemento del arreglo 'reservas' 'index' indica la posición del elemento a borrar y '1' especifica que se elimina un solo elemento
            localStorage.setItem('reservas', JSON.stringify(reservas)); // Convierte el arreglo 'reservas' a una cadena JSON y lo guarda en el localStorage bajo la clave 'reservas'
                                                                                //  Esto permite conservar los datos incluso después de recargar o cerrar la página
            cargarReservas(); // Recarga la Tabla                                    
        }
    }


    // BOTON PARA CERRAR LA SESION DEL ADMIN
    btnCerrarSesion.addEventListener('click', () => {
        localStorage.removeItem('adminLogueado');
        alert('SESION CERRADA CORRECTAMENTE.');
        window.location.href = 'index.html';
    });


    // LLAMADO ALA FUNCION PRINCIPAL
    cargarReservas();

}
 
