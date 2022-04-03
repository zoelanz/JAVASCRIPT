// let año=getAño() //ahi estoy trayendo la info del año del storage

// let filtro = paintings.filter(item => item.año == año);
// let contenido;

//  filtro.forEach((filtro) => {
//      let contenedorPrincipal = document.querySelector(".contenedorPrincipal")
//      contenido= document.createElement("div");
//      contenido.classList.add("col-4","contenedorImagen","bg-danger");
//      contenido.innerHTML = `
//      <img class="tamañoImgPorAño" src="${filtro.imagen}" alt="obras">
//      `;
//      contenedorPrincipal.appendChild(contenido);
//  })

  let año=getAño() //ahi estoy trayendo la info del año del storage

  let filtro = paintings.filter(item => item.año == año);
  let contenido;

   filtro.forEach((filtro) => {

       let contenedorPrincipal = document.querySelector(".contenedorGaleria")
       contenido= document.createElement("div");
       contenido.innerHTML = `
       <img class="imagenGaleria" src="${filtro.imagen}" alt="obras">
       `;
       contenedorPrincipal.appendChild(contenido);
   })



// let año=getAño() //ahi estoy trayendo la info del año del storage

// let filtro = paintings.filter(item => item.año == año);
// let contenido;

//  filtro.forEach((filtro) => {

//      let contenedorPrincipal = document.querySelector(".nanogallery2")
//      contenido= document.createElement("div");
//      contenido.innerHTML = `
//      <img class="imagenGaleria" src="${filtro.imagen}" alt="obras">
//      `;
//      contenedorPrincipal.appendChild(contenido);
//  })












