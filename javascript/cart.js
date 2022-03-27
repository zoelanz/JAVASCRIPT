//=== OBJETO VACIO DONDE SE PUSHEA EL ARRAY CARRITO === //

let pestañaCart = [];


// === LOCAL STORAGE === //
function precargaDatos() {
    if (localStorage.getItem("carrito") !== null) {
        pestañaCart = JSON.parse(localStorage.getItem("carrito"));
    }
}
precargaDatos()

// === TABLA PARTE ESTATICA === //
const main = document.querySelector("main");
let tablaCarrito = document.createElement("table");
tablaCarrito.setAttribute("class", "table");

tablaCarrito.innerHTML = `
            <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col"> <button class="btn button botonVaciarCarrito">EMPTY CART</button></th>
                </tr>
            </thead>          
`;
main.appendChild(tablaCarrito);


// === TABLA DINAMICA CUANDO SE VAN AGREGANDO LAS OBRAS === //

let tbody = document.createElement("tbody");
tablaCarrito.appendChild(tbody);
pestañaCart.forEach((element) => {
    let tr = document.createElement("tr");
    tr.setAttribute("class", "contenedorTr")
    tr.innerHTML = `
        <th scope="row"> <img src="${element.imagen}" class="card-img-top tamañoImgCart" alt="..."></th>
        <th scope="row" class="titulo">${element.nombre}</th>
        <td class="precioUnitario">${element.precio}</td>
        <th scope="col"> <button class="btn button botonEliminar"><i class="fa-solid fa-delete-left"></i></button></th> 
    `;
    tbody.appendChild(tr);
})




// === CREANDO TOTAL Y BOTON SHOP === //     
let divTotalCarrito = document.createElement("div")
divTotalCarrito.classList.add('row', 'mx-4');
divTotalCarrito.innerHTML = `
<div class="col">
<h3 >Total: € <span class="itemCartTotal" >${sumarTotal()}</span> </h3>
</div>
<div class="col d-flex justify-content-end">
    <button class="btn boton">BUY!</button>
</div>
`;
main.appendChild(divTotalCarrito)




// === BORRAR UN ELEMENTO DEL CARRITO === // 

let botonEliminar = document.querySelectorAll(".botonEliminar"); // traigo los botones "botoneliminar"

botonEliminar.forEach((boton) => { //por cada boton de que cada card se ejecuta la funcion

    boton.addEventListener("click", (e) => {
        botonEliminar = e.target
        let buttonTrContainer = botonEliminar.closest(".contenedorTr");
        let nombrePintura2 = buttonTrContainer.querySelector(".titulo").textContent
        let arrayNuevoCarrito = [];
        let traerCarritoParaEliminar = capturarCarritoStorage();
        buttonTrContainer.textContent = ""
        for (const item of traerCarritoParaEliminar) {
            item.nombre != nombrePintura2 && arrayNuevoCarrito.push(item) /* operador AND reemplaza lo de abajo */

            // if (item.nombre === nombrePintura2) {
            //    continue
            // }
            // arrayNuevoCarrito.push(item)
        }
        persistirCarritoStorage(arrayNuevoCarrito);
        sumarTotal()

    })
})


// === VACIAR CARRITO === //

let botonVaciar = document.querySelector(".botonVaciarCarrito"); // traigo boton vaciar carrito"
botonVaciar.addEventListener("click", () => {
    tbody.textContent = ""
    persistirCarritoStorage([]);
    sumarTotal()
    mostrarTotal()
})

// === PARA HACER LA SUMA TOTAL DEL CARRITO === //    

function sumarTotal() {

    let sumaTotal= pestañaCart.reduce((acc, el) => acc + el.precio, 0);
    console.log(pestañaCart);
    return sumaTotal;
}

// function mostrarTotal(){

    
//     let mostrarTotal= document.querySelector(".itemCartTotal");
//     mostrarTotal.textContent= "";
//     mostrarTotal.textContent= sumarTotal();
//     console.log(mostrarTotal.textContent);
//     return mostrarTotal;
    


// }
// mostrarTotal();

