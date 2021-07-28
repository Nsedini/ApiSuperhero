const formularioElement = $("#formulario");   /* captura lo que ingresa el usuario, formulario completo */

const inputElement = $("#superhero-input");       /* capturar el valor del input en una variable*/

const requestSection = document.getElementById("request-section");

function renderSuperHero(superhero) {
    const imagen = document.getElementById("imagen")   /* js pelao   para ir a buscar al DOM */
    const nombre = document.querySelector("#nombre")   /* js pelao  para ir a buscar al DOM*/

    const publicadopor = $("#publicadopor");          /* jquery para ir a buscar al DOM*/
    const ocupacion = $("#ocupacion")
    const aparicion = $("#aparicion")
    const altura = $("#altura")
    const peso = $("#peso")
    const alianzas = $("#alianzas")

    imagen.setAttribute("src", superhero.image.url)            /* Para cambiar el source */
}

formularioElement.submit(function (event) {
    event.preventDefault();                     /* para q la pagina no se refresque */

const idDelSuperHeroe = inputElement.val();

$.ajax({
    type: "GET",
    dataType: "json",
    url: `https://www.superheroapi.com/api.php/1103444760144013/${idDelSuperHeroe}`,
}).done(function(data) {
    console.log(data);
    });
});



