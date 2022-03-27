const mainPaintings = document.querySelector(".mainPaintings");

let ul =document.createElement("ul")
ul.setAttribute("class", "submenu");
ul.innerHTML=`
<li><a id="obras2021" href="">2021</a></li>
<li><a id="obras2020" href="">2020</a></li>
<li><a id="obras2019" href="">2019</a></li>
<li><a id="obras2018" href="">2018</a></li>
`;

mainPaintings.appendChild(ul);


// const main = document.querySelector("main");
// let tablaCarrito = document.createElement("table");
// tablaCarrito.setAttribute("class", "table");

// tablaCarrito.innerHTML = `
//             <thead>
//                 <tr>
//                     <th scope="col">Product</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Price</th>
//                     <th scope="col"> <button class="btn button botonVaciarCarrito">EMPTY CART</button></th>
//                 </tr>
//             </thead>          
// `;
// main.appendChild(tablaCarrito);





    // let filtro2021 = paintings.filter(item => item.año == 2021);




