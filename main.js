// -------------------------DESAFIO COMPLEMENTARIO : INCORPORAR ARRAYS----------------------------------//


/* 
1. INFORMAR CUANTO SALE CADA CUADRO
2. PEDIRLE AL USUARIO QUE INGRESE CUANTOS CUADROS DESEA COMPRAR
    2.1 SI LA CANTIDAD ES MAYOR A 3 CADA OBRA LE SALDRA 1350 DOLARES
    2.2 SI LA CANTIDAD ES MAYOR A 5 CADA OBRA LE SALDRA 1250 DOLARES
3.CALCULAR TOTAL DE COMPRA
4.SI NO INGRESA UN NUMERO VOLVER A PEDIR CANTIDAD DE CUADROS
*/

// informo al usuario sobre las obras
alert("Usted esta por comprar obras de la artista Merdeces Llanos!");
alert("El valor por cuadro es de U$S1500, en caso elija 3 o mas sera de U$S1350 y en caso elija 5 o mas sera de U$S1250");

// pido que ingrese la cantidad de cuadros que le gustaria al usuario comprar
let cantidadCuadros = parseInt(prompt("Ingrese la cantidad de cuadros que desea comprar"))
const precio = [];

// agrego los precios al array
precio.push(1500);
precio.push(1350);
precio.push(1250);

// imprimo cantidad de precios y valores

console.log(`Hay ${precio.length} precios, los cuales son: ${precio}`);

// creo la funcion que le pasa el precio total 

function operacion(a, b) {
    return a * b;
}

// inicio ciclo

while (isNaN(cantidadCuadros) || cantidadCuadros <= 0) {
    cantidadCuadros = parseInt(prompt("Cantidad Erronea, Digite cantidad nuevamente"))
}

// condiciones del ciclo

if (cantidadCuadros >= 0 && cantidadCuadros < 3) {
    alert("El total es: " + operacion(cantidadCuadros, precio[0]) + " dolares");
} else if (cantidadCuadros >= 3 && cantidadCuadros < 5) {
    alert("El total es: " + operacion(cantidadCuadros, precio[1]) + " dolares");
} else if (cantidadCuadros >= 5) {
    alert("El total es: " + operacion(cantidadCuadros, precio[2]) + " dolares");
}

