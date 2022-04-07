let url = "../datos/paintings.json";
fetch(url)
    .then(response => response.json())
    .then(obras => {
        const main = document.querySelector("main");
        // llamo contenedor principal y lo pego al main
        const containerPrincipal = document.querySelector(".containerPrincipal");

        main.appendChild(containerPrincipal);
        let card;
        obras.forEach((element) => {
            card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("style", "width:18rem;");
            card.innerHTML = `
                    <div class="d-flex justify-content-center  ">
                        <img src="${element.imagen}" class="card-img-top tamaño" alt="...">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${element.nombre}</h5>
                        <p class="card-text">${element.tecnica}</p>
                        <p class="card-text">${element.tamaño}</p>
                        <p class="card-price">EUR ${element.precio}</p>
                        <div class="d-grid gap-2">
                            <button id="agregar${obras.nombre}" class="btn button"> ADD TO CART</button>
                        </div>
                    </div>`;
            containerPrincipal.appendChild(card)

        });

        // === APLICANDO EVENTO CARRITO === //

        let botonesCarrito = document.querySelectorAll(".button"); // traigo los botones "add to cart"

        botonesCarrito.forEach((boton) => { //por cada boton de que cada card se ejecuta la funcion

            boton.addEventListener("click", (e) => {

                botonesCarrito = e.target // le pregunto donde se hizo el evento
                let buttonCardContainer = botonesCarrito.closest(".card"); //buscame la card mas cerca de donde se hizo el evento
                let imagenPintura = buttonCardContainer.querySelector(".card-img-top").src // busco los datos en base a la card que agarre antes
                let nombrePintura = buttonCardContainer.querySelector(".card-title").textContent // busco los datos en base a la card que agarre antes
                let precioPintura = Number(buttonCardContainer.querySelector(".card-price").textContent.replace("EUR", "")) // busco los datos en base a la card que agarre antes

                let contenidoCarrito = capturarCarritoStorage();

                if (validarObraEnCarrito(nombrePintura) === true) {
                    Toastify({

                        text: "YOU HAVE ALREADY ADDED THIS PAINTING",
                        close: true,
                        duration: 2000,
                        gravity: "bottom",
                        className: "styleToastify",
                        style: {
                            background: "black",
                        }

                    }).showToast()

                } else {
                    contenidoCarrito.push({
                        imagen: imagenPintura,
                        nombre: nombrePintura,
                        precio: precioPintura
                    })
                    persistirCarritoStorage(contenidoCarrito)
                    Toastify({

                        text: "SUCCESFULLY ADDED TO CART",
                        close: true,
                        duration: 2000,
                        className: "styleToastify",
                        gravity: "bottom",
                        style: {
                            background: "black",
                        }
                    }).showToast()
                }
            })

        })
    })
    .catch(err => console.log(err));