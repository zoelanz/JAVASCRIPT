
// === === === === === === === === === === === SHOP === === === === === === === === === === === //

// Recibe la nueva lista carrito y la almacena en el LocalStorage
function persistirCarritoStorage(listaCarrito) {
    localStorage.setItem("carrito", JSON.stringify(listaCarrito))
}

// Trae el carrito de LocalStorage
function capturarCarritoStorage() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))

    // Si no hay datos en el storage, que me retorne un array vacio
    if (carrito == null) {
        return []
    }
    return carrito
}

// Para que no se repita la misma obra en el carrito
function validarObraEnCarrito(nombreObra) {
    listaCarrito = capturarCarritoStorage()
    for (const ob of listaCarrito) {

        if (ob.nombre === nombreObra) {
            return true
        }
    }
    return false
}

// === === === === === === === === === === === POR AÑO === === === === === === === === === === === //

// me captura el año que esta almacenado en el storage
function getAño() {
    return localStorage.getItem("Año");
}

// me modifica el año que esta almacenado en el storage
function setAño(data) {
    localStorage.setItem("Año", data);
}

// === === === === === === === === === === === MAIN === === === === === === === === === === === //

function getUrl() {
    return localStorage.getItem("url");
}

// === === === === === === === === === === === CART === === === === === === === === === === === //

// Para cargar los datos del local storage
function precargaDatos() {
    if (localStorage.getItem("carrito") !== null) {
        pestañaCart = JSON.parse(localStorage.getItem("carrito"));
    }
}

// Para eliminar objeto del carrito 
function eliminarObjetoArray(carrito) {
    for (let i = 0; i > carrito.length; i++) {
        if (carrito[i].nombre == nombrePintura2) {
            carrito.splice(i, 1)
        }
    }
}

function divEmptyCart() {
    if (pestañaCart.length == 0) {
        let emptyCart = document.querySelector(".cart");
        emptyCart.classList.remove("hide")
        let tablaCarrito = document.querySelector(".table");
        tablaCarrito.classList.add("hide");
        let divTotalCarrito = document.querySelector(".totalCarrito");
        divTotalCarrito.classList.add("hide");
        console.log(emptyCart)
    }
}

// === VACIAR CARRITO === //
function vaciarCarrito() {
    tbody.textContent = "";
    persistirCarritoStorage([]);
    sumarTotal();
    location.reload();
}


// Crea el  total
function totalBuy() {
    divTotalCarrito = document.querySelector(".row")
    divTotalCarrito.textContent = ""
    divTotalCarrito.classList.add('row', 'mx-4');
    divTotalCarrito.innerHTML = `
<div class="col">
<h3>Total: € <span class="itemCartTotal" >${sumarTotal()}</span></h3>
</div>
`;
    main.appendChild(divTotalCarrito)
}

// === PARA HACER LA SUMA TOTAL DEL CARRITO === //    
function sumarTotal() {
    let traerCarritoParaSuma = capturarCarritoStorage();
    let totalSuma = 0;
    for (item of traerCarritoParaSuma) {
        totalSuma += item.precio
    }
    return totalSuma;
}

// Para esconder la tablar dinamica 
function comprobarCarritoVacio(carrito) {
    if (carrito.length == 0) {
        let cartVacio = document.querySelector("#cart")
        cartVacio.classList.toggle("hide")
        let carritoParaEliminar= document.querySelector(".table")
        carritoParaEliminar.classList.toggle("hide")
        let totalCarritoParaEliminar= document.querySelector(".totalCarrito")
        totalCarritoParaEliminar.classList.toggle("hide")
        let buyCarritoParaEliminar= document.querySelector(".boton")
        buyCarritoParaEliminar.classList.toggle("hide")
    }
}
