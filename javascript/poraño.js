
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
















