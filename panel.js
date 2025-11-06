 
 document.addEventListener('DOMContentLoaded', function() {

    // funcion para Validar que el Usuario Este Logueado
    validarLogin();


});
 

/* ============================================================ 
            VALIDACION DE SESION SOLO PARA " DEMO DE GITHUB "
        ------------------------------------------------------------
        - Verificar Si El Administrador esta Logueado.
        - Si NO lo Esta, lo Redirige al ( index.html ).
    =============================================================== */
function validarLogin() {


    if(localStorage.getItem('adminLogueado') !== 'true') {
        alert('Debes Iniciar la Sesion para Acceder a este Panel');
        window.location.href = 'index.html';
    }

    // BOTON PARA CERRAR LA SESION
    document.getElementById('cerrar-sesion').addEventListener('click', () => {
        localStorage.removeItem('adminLogueado');
        alert('SESION CERRADA CORRECTAMENTE.');
        window.location.href = 'index.html';
    });




}
 