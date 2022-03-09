

// -------------------------DESAFIO DOM----------------------------------//


//  informo al usuario sobre las obras
  alert("Bienvenidos a la pagina de la artista Merdeces Llanos!");


//  creo objetos dentro de un array
const obras = [{
        nombre: "A RUGRATS DREAM",
        tecnica: "Oil on Canvas",
        precio: 8000,
        tamaño: "90 x 72in",
    },
    {
        nombre: "THE SHAMAN",
        tecnica: "Oil and Acrylic on Canvas",
        precio: 7000,
        tamaño: "84 x 72in",
    },
    {
        nombre: "CHARLA DE SEIS",
        tecnica: "Oil on Canvas",
        precio: 7500,
        tamaño: "84 x 72in",
    },
    {
        nombre: "QUEEN OF THE MOON",
        tecnica: "Oil and Charcoal on Canvas",
        precio: 5000,
        tamaño: "38 x 56in",
    },
    {
        nombre: "THE BATHTUB",
        tecnica: "Oil on Canvas",
        precio: 10000,
        tamaño: " 96 x 116in",
    }
];


let coincidencias;

function filtro() {

    let presupuesto = Number(prompt("ingrese su presupuesto (solo numero: minimo 5000)"));

    while (presupuesto < 5000) {
        presupuesto = Number(prompt("ingrese su presupuesto (solo numero: minimo 5000)"));
    }

    coincidencias = obras.filter(obra => obra.precio <= presupuesto);
}

filtro();

//   TRAIGO EL CONTENEDOR

// llamo al main y lo pego al body
const main = document.getElementById("main");
// llamo contenedor principal y lo pego al main
const contenedorGeneral = document.getElementById("containerShop");
main.appendChild(contenedorGeneral);
// creo un div con las clases correspondientes y lo pego al otro div
let div;
coincidencias.forEach(element => {
    div = document.createElement("div");
    div.setAttribute("class", "card");
    div.setAttribute("style", "width: 18rem")
    // agregando html(div,h5,p,a) al div
    div.innerHTML = `
<img class="card-img-top" src="../imagenes/therugratsdream.jpg" alt="Card image cap">
<div class="card-body">
    <h5 class="card-title">${element.nombre}</h5>
    <p class="card-text">${element.tecnica}</p>
    <p class="card-text">${element.tamaño}</p>
    <p class="card-text">u$d${element.precio}</p>
    <a href="#" class="btn ">Añadir al carrito</a>
</div>`
    contenedorGeneral.appendChild(div)
});



































