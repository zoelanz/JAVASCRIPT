//=== OBJETO VACIO DONDE SE PUSHEA EL ARRAY CARRITO === //

let pestañaCart = [];

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
divEmptyCart();


// === CREANDO ETIQUETA TOTAL Y BOTON BUY === //   

let divTotalCarrito = document.createElement("div");

// === CREANDO ETIQUETA TOTAL Y BOTON BUY === //   

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
            }, 300000);
        
        })





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
                    // item.nombre != nombrePintura2 && arrayNuevoCarrito.push(item) /* operador AND reemplaza lo de abajo */

                    if (item.nombre === nombrePintura2) {
                        continue
                    }
                    arrayNuevoCarrito.push(item)
                }
                persistirCarritoStorage(arrayNuevoCarrito);
                totalBuy();
                eliminarObjetoArray(arrayNuevoCarrito);
                comprobarCarritoVacio(arrayNuevoCarrito);
            })
        })

        // === VACIAR CARRITO === //

        function vaciarCarrito() {
            tbody.textContent = "";
            persistirCarritoStorage([]);
            sumarTotal();
            location.reload();
        }

        let botonVaciar = document.querySelector(".botonVaciarCarrito"); // traigo boton vaciar carrito"
        botonVaciar.addEventListener("click", vaciarCarrito);

        // === PARA HACER LA SUMA TOTAL DEL CARRITO === //    

        function sumarTotal() {
            let traerCarritoParaSuma = capturarCarritoStorage();
            let totalSuma = 0;
            for (item of traerCarritoParaSuma) {
                totalSuma += item.precio
            }
            return totalSuma;
        }