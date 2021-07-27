const formularioElement = $("#formulario");   /* captura lo que ingresa el usuario, formulario completo */

const inputElement = $("superhero-input");       /* capturar el valor del input en una variable*/

const requestSection = document.getElementById("request-section");

formularioElement.submit(function (event) {
    event.preventDefault();                     /* para q la pagina no se refresque */

const idDelSuperHeroe = inputElement.val();

$.ajax({
    type: "GET",
    dataType: "json",
    url: `https://superheroapi.com/api/1103444760144013/${idDelSuperHeroe}`,
}).done(function(data) {
    requestSection.innerHTML = JSON.strigyfy(data);
});

});

