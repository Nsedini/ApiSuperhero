const formularioElement = $("#formulario");   /* captura lo que ingresa el usuario, formulario completo */

const inputElement = $("superhero-input");       /* capturar el valor del input */

formularioElement.submit(function (event) {
    event.preventDefault();                     /* para q la pagina no se refresque */

const idDelSuperHeroe = inputElement.val();


});

