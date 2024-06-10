/*Guardamos la url,key y categoria de nuestra API dentro de variables*/
let category = "happiness";
let apiKey = "FaL6Hvg3vBPP7wz9/VbTUA==eFKqPrYcEFStkLXe";
let url = "https://api.api-ninjas.com/v1/quotes?category=" + category;

/*Llamamos a nuestras etiquetas del html*/

let titulo = document.querySelector(".autor");
let texto = document.querySelector(".text");

/*creamos una funcion para obtener Los datos de la API*/

function obtenerDatos() {
  fetch(url, {
    method: "GET",
    headers: { "X-Api-Key": apiKey },
  })
    .then((response) => response.json())
    .then((data) => {
      mostrarDatos(data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function mostrarDatos(data) {
  if (data.length > 0) {
    let elementos = data[0];
    titulo.innerHTML = `<h3>${elementos.author || "unknown"}</h3>`;
    texto.innerHTML = `<p>${elementos.quote}</p>`;
  }
}

obtenerDatos();

console.log();
