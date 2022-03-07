// -------------------------1° pre- entrega----------------------------------//

/* 
1.menu de opciones para el usuario
2.en caso elija opcion 1 puede ver las obras disponibles
3. en caso elija opcion 2 puede ver las caracteristicas de estas
4. en caso elija opcion 3 puede buscar obras de acuerdo a su presupuesto
5. en caso elija opcion 4 sale del menu principal
*/

// informo al usuario sobre las obras
alert("Usted esta por comprar obras de la artista Merdeces Llanos!");

// declaro variable para iniciar el loop
let opciones = 0;

// creo objetos dentro de un array
const obras = [{
        nombre: "A RUGRATS DREAM",
        tecnica: "Oil on Canvas",
        precio: 8000,
        tamaño: "90 x 72in",
    },
    {
        nombre: "THE SHAMAN",
        tecnica: "Oil and Acrylic on Canvas",
        precio: 7000,
        tamaño: "84 x 72in",
    },
    {
        nombre: "CHARLA DE SEIS",
        tecnica: "Oil on Canvas",
        precio: 7500,
        tamaño: "84 x 72in",
    },
    {
        nombre: "QUEEN OF THE MOON",
        tecnica: "Oil and Charcoal on Canvas",
        precio: 5000,
        tamaño: "38 x 56in",
    },
    {
        nombre: "THE BATHTUB",
        tecnica: "Oil on Canvas",
        precio: 10000,
        tamaño: " 96 x 116in",
    }
];

// ciclo con los diferentes opciones
while (opciones !== 4) {

opciones = Number(prompt(`que desea hacer? seleccione una opcion: 
1.VER OBRAS DISPONIBLES
2.CARACTERISTICAS DE UNA OBRA
3.BUSQUEDA POR PRECIO
4. SALIR`));

    switch (opciones) {
        case 1: {
            obrasDisponibles()
            break;
        }
        case 2: {
            caracteristicas()
            break;
        }
        case 3: {
            filtro()
            break;
        }
        case 4:{
            alert("GRACIAS POR VISITAR MI PAGINA!")
            break;
        }
        default: {
            alert("ERROR")
            break;
        }
    }
}

// creo las funciones para cada case (aca el forEach, el find y el filter)

function obrasDisponibles() {
    obras.forEach((pintura) => alert(pintura.nombre));
}

function caracteristicas() 
{
    let nombresPintura = prompt("INGRESE EL NOMBRE DE LA PINTURA QUE LE INTERESA: A Rugrats Dream, The shaman, Charla de Seis, Queen of the Moon, The Bathtub").toUpperCase();

    const obraBuscada = obras.find(pintura => nombresPintura === pintura.nombre);

        alert(`nombre: ${obraBuscada.nombre}
tecnica: ${obraBuscada.tecnica}
precio: ${obraBuscada.precio}
tamaño: ${obraBuscada.tamaño} `);
}
    
function filtro() {

   
    let presupuesto=Number(prompt("ingrese su presupuesto (solo numero: minimo 5000)"));

    while(presupuesto<5000)
    {
        presupuesto=Number(prompt("ingrese su presupuesto (solo numero: minimo 5000)"));
    }

    const coincidencias = obras.filter(obra => obra.precio <= presupuesto);

    coincidencias.forEach((pintura) => alert(pintura.nombre));

   
}

