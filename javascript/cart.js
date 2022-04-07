//=== OBJETO VACIO DONDE SE PUSHEA EL ARRAY CARRITO === //

let pestañaCart = [];

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
divEmptyCart();



// === CREANDO ETIQUETA TOTAL Y BOTON BUY === //  
let divTotalCarrito = document.createElement("div");
divTotalCarrito.textContent = ""
divTotalCarrito.classList.add('row', 'mx-4', 'totalCarrito');
divTotalCarrito.innerHTML = `
<div class="col">
<h3>Total: € <span class="itemCartTotal" >${sumarTotal()}</span></h3>
</div>
`;
main.appendChild(divTotalCarrito);
let botonBuy = document.createElement("div");
botonBuy.innerHTML = `
<div class="col d-flex justify-content-end buy">
<button class="btn boton">BUY!</button>
</div>
`

main.appendChild(botonBuy);
botonBuy.addEventListener("click", () => {
    Swal.fire({
        title: 'THANKS FOR BUYING! Hope to see you soon! ',
        width: 500,
        padding: '3em',
        color: '#000',
        showConfirmButton: false,
        background: '#fff url(../imagenes/2021/arugratsdream.jpg)',
        showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
        }
    })
    setTimeout(() => {
        vaciarCarrito()
    }, 3000);
})

totalBuy();


// === BORRAR UN ELEMENTO DEL CARRITO === // 

let botonEliminar = document.querySelectorAll(".botonEliminar"); 
botonEliminar.forEach((boton) => { //por cada boton de que cada card se ejecuta la funcion
    boton.addEventListener("click", (e) => {
        botonEliminar = e.target
        let buttonTrContainer = botonEliminar.closest(".contenedorTr");
        let nombrePintura2 = buttonTrContainer.querySelector(".titulo").textContent
        let arrayNuevoCarrito = [];
        let traerCarritoParaEliminar = capturarCarritoStorage();
        buttonTrContainer.textContent = ""
        for (const item of traerCarritoParaEliminar) {
            item.nombre != nombrePintura2 && arrayNuevoCarrito.push(item) 
        }
        persistirCarritoStorage(arrayNuevoCarrito);
        totalBuy();
        eliminarObjetoArray(arrayNuevoCarrito);
        comprobarCarritoVacio(arrayNuevoCarrito);
    })
})


let botonVaciar = document.querySelector(".botonVaciarCarrito"); // traigo boton vaciar carrito
botonVaciar.addEventListener("click", vaciarCarrito);

sumarTotal()

