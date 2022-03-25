// === ARRAY DE OBJETOS (PINTURAS EN VENTA) === //

let obras = [{
    nombre: "CHARLA DE SEIS",
    tecnica: "Oil on Canvas",
    precio: 15000,
    tamaño: "72x 46in",
    imagen: "../imagenes/charladeseis2021.jpg",
},
{
    nombre: "THE BATHTUB",
    tecnica: "Oil on Canvas",
    precio: 10000,
    tamaño: "92 x 42in",
    imagen: "../imagenes/thebathtub2021.jpg",
},
{
    nombre: "QUEEN OF THE MOON",
    tecnica: "Oil and Charcoal on Canvas",
    precio: 9000,
    tamaño: "38 x 56in",
    imagen: "../imagenes/queenofthemoon2021.jpg",
},
{
    nombre: "THE COMMUTE",
    tecnica: "Oil on Canvas",
    precio: 15000,
    tamaño: "90 X 70in",
    imagen: "../imagenes/thecommute2020.jpg",
},
{
    nombre: "BABY FEVER FEAR",
    tecnica: "Oil on Canvas",
    precio: 15000,
    tamaño: " 76 x 78in",
    imagen: "../imagenes/babyfeverfear2020.jpg",

},
{
    nombre: "EL SUEÑO DE LA RAZON ",
    tecnica: "Oil and Mixed Media on Canvas",
    precio: 14000,
    tamaño: "60 x 80in",
    imagen: "../imagenes/elsueñodelarazon2020.jpg",
},
{
    nombre: "DISTRAÍDA POR DEL DESEO",
    tecnica: "Oil and Pastel on Canvas",
    precio: 12000,
    tamaño: "74 x 50in",
    imagen: "../imagenes/distraidaporeldeseo2020.jpg",
},
{
    nombre: "MEET THE PARENTS",
    tecnica: "Oil on Canvas",
    precio: 10000,
    tamaño: "60 x 40in",
    imagen: "../imagenes/meettheparents2020.jpg",
},
];

// === ARRAY DE OBJETOS (TODAS LAS PINTURAS) === //

let paintings = [{
    nombre: "A RUGRATS DREAM",
    tecnica: "Oil on Canvas",
    tamaño: "90x 72in",
    año: 2021,
    imagen: "../imagenes/2021/arugratsdream.jpg", 
},
{
    nombre: "CHARLA DE SEIS",
    tecnica: "Oil on Canvas",
    tamaño: "72x 46in",
    año: 2021,
    imagen: "../imagenes/2021/charladeseis.jpg",
},
{
    nombre: "CPR",
    tecnica: "oil and mixed media on canvas",
    tamaño: "72x 90in",
    año: 2021,
    imagen: "../imagenes/2021/cpr.jpg", 
},
{
    nombre: "DESIRE AGAINST MORALITY",
    tecnica: "oil and mixed media on canvas",
    tamaño: "72x 80in",
    año: 2021,
    imagen: "../imagenes/2021/desireagainstmorality.jpg",  
},
{
    nombre: "QUEEN OF THE MOON",
    tecnica: " Oil and Charcoal on Canvas",
    tamaño: "38x 56in",
    año: 2021,
    imagen: "../imagenes/2021/queenofthemoon.jpg",  
},
{
    nombre: "THE BATHTUB",
    tecnica: "Oil on Canvas",
    tamaño: "96x 116in",
    año: 2021,
    imagen: "../imagenes/2021/thebathtub.jpg",   
},
{
    nombre: "THE GREEN BED",
    tecnica: "Oil on Canvas",
    tamaño: "72x 60in",
    año: 2021,
    imagen: "../imagenes/2021/thegreenbed.jpg",   
},
{
    nombre: "THE KING BABY POSSESSOR",
    tecnica: "oil and mixed media on canvas",
    tamaño: "72x 168in",
    año: 2021,
    imagen: "../imagenes/2021/thekingbabypossessor.jpg",   
},
{
    nombre: "THE SHAMAN",
    tecnica: "Oil and Acrylic on Canvas",
    tamaño: "84x 72in",
    año: 2021,
    imagen: "../imagenes/2021/theshaman.jpg",   
},
];






let objetosParaCarrito = []; // carrito vacio donde se pushea la card cuando se hace click en boton add to cart



// === FUNCIONES === //

 // Me trae los datosde las obras almacenados en el LocalStorage y lo retorna como una lista
// function capturarObrasStorage() {
//     let obrasStorage = JSON.parse(localStorage.getItem("OBRAS"))

   //Si no hay datos en el storage, que me retorne un array vacio
//     if (secuencia == null) {
//         return []
//     }

//     return obrasStorage
// }

// Me trae los datos del carrito almacenados en el LocalStorage y lo retorna como una lista

  function capturarCarritoStorage() {
     let carrito = JSON.parse(localStorage.getItem("carrito"))

    // Si no hay datos en el storage, que me retorne un array vacio
     if (carrito == null) {
         return []
     }
     return carrito
 }



// Recibe la nueva lista de obras y la almacena en el LocalStorage
// function persistirObrasStorage(listaObras) {
//     localStorage.setItem("OBRAS", JSON.stringify(listaObras))
// }

// Recibe la nueva lista carrito y la almacena en el LocalStorage
function persistirCarritoStorage(listaCarrito) {
    localStorage.setItem("carrito", JSON.stringify(listaCarrito))
}

// Recibe el nombre de una obra y me devuelve un valor boolean si lo encuentra o no en la lista carrito
function validarObraEnCarrito(nombreObra) {
    listaCarrito = capturarCarritoStorage()
    for (const ob of listaCarrito) {

         if (ob.nombre === nombreObra) {
             return true
         }
    }
    return false
}




  

