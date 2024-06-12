/*Guardamos la url,key y categoria de nuestra API dentro de variables*/
let category = "happiness";
let apiKey = "FaL6Hvg3vBPP7wz9/VbTUA==eFKqPrYcEFStkLXe";
let url = "https://api.api-ninjas.com/v1/quotes?category=" + category;

/*Llamamos a nuestras etiquetas del html*/

let titulo = document.querySelector(".autor");
let texto = document.querySelector(".text");
let cambiar = document.querySelector(".cambiar");
let copiar = document.querySelector(".copiar");
let boton2 = document.querySelector(".btn2");

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
  let elementos = data[0];
  console.log(elementos);
  titulo.innerHTML = `<h3 class="title">${elementos.author}</h3>`;
  texto.innerHTML = `<p class="cita">"${elementos.quote}"</p>`;
  boton2.innerText = `${elementos.category}`;

  copiar.onclick = () => copiarCita(elementos);
}

async function copiarCita(cita) {
  try {
    await navigator.clipboard.writeText(`"${cita.quote}" - ${cita.author}`);
    alert("Texto copiado: " + `"${cita.quote}" - ${cita.author}`);
  } catch (err) {
    console.error("Error al copiar el texto: ", err);
  }
}
cambiar.addEventListener("click", obtenerDatos);

obtenerDatos();
