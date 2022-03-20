//=== OBJETO VACIO DONDE SE PUSHEA EL ARRAY CARRITO === //

let pestañaCart = {};


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
                    <th scope="col"> <button class="btn button boton">EMPTY CART</button></th>
                </tr>
            </thead>          
`;
main.appendChild(tablaCarrito);

// === TABLA DINAMICA CUANDO SE VAN AGREGANDO LAS OBRAS === //

let tbody = document.createElement("tbody");
tablaCarrito.appendChild(tbody);
pestañaCart.forEach((element) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <th scope="row"> <img src="${element.imagen}" class="card-img-top tamañoImgCart" alt="..."></th>
        <th scope="row">${element.nombre}</th>
        <td class="precioUnitario">${element.precio}</td>
        <th scope="col"> <button class="btn button"><i class="fa-solid fa-delete-left"></i></button></th> 
    `;

    tbody.appendChild(tr);

})

// === CREANDO TOTAL Y BOTON SHOP === //           

let divTotalCarrito = document.createElement("div")
divTotalCarrito.classList.add('row','mx-4');
divTotalCarrito.innerHTML = `
<div class="col">
<h3 class="itemCartTotal">TOTAL:0 </h3>
</div>
<div class="col d-flex justify-content-end">
    <button class="btn boton">BUY!</button>
</div>
`;

main.appendChild(divTotalCarrito)



// === SUMA TOTAL CARRITO === //

