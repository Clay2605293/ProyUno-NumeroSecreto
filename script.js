document.addEventListener('DOMContentLoaded', function() {
    // Se ejecuta cuando el DOM está completamente cargado
    var botonCambiarTexto = document.getElementById('cambiarTexto');

    botonCambiarTexto.addEventListener('click', function() {
        cambiarTextoBienvenida();
    });

    function cambiarTextoBienvenida() {
        var parrafoBienvenida = document.querySelector('main p');
        parrafoBienvenida.innerHTML = '¡Hola! Este texto ha sido cambiado con JavaScript.';
    }
});
