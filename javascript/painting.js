let porAño = document.querySelectorAll(".porAño");

porAño.forEach((portada) => {
    portada.addEventListener("click", (e) => {
        porAño = e.target
        let contenedorPorAño = porAño.closest(".porAño")
        let añosPaintings = contenedorPorAño.querySelector(".añosPaintings");
        let año = añosPaintings.querySelector(".año").textContent;
        setAño(año); // modifico el año en el storage
        window.location.href = "../paginas/porAño.html"

    })
})








