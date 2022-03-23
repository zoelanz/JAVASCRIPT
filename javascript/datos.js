// === ARRAY DE OBJETOS (TODAS LAS PINTURAS) === //

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




  

