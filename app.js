
const formularioElement = $("#formulario");     /* captura lo que ingresa el usuario, formulario completo */
const inputElement = $("#superhero-input");     /* capturar el valor del input en una variable*/
const requestSection = document.getElementById("request-section");

console.log(formularioElement);

function renderSuperheroCard(superhero) {
  const imagen = document.getElementById("imagen");    /* js pelao   para ir a buscar al DOM */
  const nombre = document.querySelector("#nombre");    /* js pelao  para ir a buscar al DOM*/

  const publicadopor = $("#publicadopor");  /* jquery para ir a buscar al DOM*/
  const ocupacion = $("#ocupacion");    /* jquery para ir a buscar al DOM*/
  const aparicion = $("#aparicion");    /* jquery para ir a buscar al DOM*/
  const altura = $("#altura");          /* jquery para ir a buscar al DOM*/ 
  const peso = $("#peso");              /* jquery para ir a buscar al DOM*/
  const alianzas = $("#alianzas");      /* jquery para ir a buscar al DOM*/

  imagen.setAttribute("src", superhero.image.url);      /* Para cambiar el source */
  nombre.innerHTML = `Nombre: ${superhero.name}`;

  publicadopor.html(superhero.biography.publisher);
  ocupacion.html(superhero.work.occupation);
  aparicion.html(superhero.biography["first-appearance"]);
  altura.html(
    `${superhero.appearance.height[0]} - ${superhero.appearance.height[1]}`
  );
  peso.html(
    `${superhero.appearance.weight[0]} - ${superhero.appearance.weight[1]}`
  );
  alianzas.html(superhero.biography.aliases.join(" - "));
}

function renderSuperheroChart(superhero) {
  const options = {
    title: {
      text: "Grafico del Superheroe",
    },
    data: [
      {
        type: "pie",
        dataPoints: [
          {
            label: "Inteligencia",
            y: Number.parseInt(superhero.powerstats.intelligence),
          },
          {
            label: "Fuerza",
            y: Number.parseInt(superhero.powerstats.strength),
          },
          {
            label: "Velocidad",
            y: Number.parseInt(superhero.powerstats.speed),
          },
          {
            label: "Durabilidad",
            y: Number.parseInt(superhero.powerstats.durability),
          },
          {
            label: "Poder",
            y: Number.parseInt(superhero.powerstats.power),
          },
          {
            label: "Combate",
            y: Number.parseInt(superhero.powerstats.combat),
          },
        ],
      },
    ],
  };
  $("#chartContainer").CanvasJSChart(options);
}

formularioElement.submit(function (event) {         /* para q la pagina no se refresque */
  event.preventDefault();

  const idDelSuperHeroe = inputElement.val();

  $.ajax({
    type: "GET",
    dataType: "json",
    url: `https://www.superheroapi.com/api.php/10226095432389769/${idDelSuperHeroe}`,
  }).done(function (data) {
    renderSuperheroCard(data);
    renderSuperheroChart(data);
  });
});