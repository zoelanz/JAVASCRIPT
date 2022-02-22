// -------------------------DESAFIO 1----------------------------------//

// -------------------SIMULADOR INTERACTIVO---------------------------//

/* 
1. INFORMAR CUANTO SALE CADA CUADRO
2. PEDIRLE AL USUARIO QUE INGRESE CUANTOS CUADROS DESEA COMPRAR
    2.1 SI LA CANTIDAD ES MAYOR A 3 CADA OBRA LE SALDRA 1350 DOLARES
    2.2 SI LA CANTIDAD ES MAYOR A 5 CADA OBRA LE SALDRA 1250 DOLARES
3.CALCULAR TOTAL DE COMPRA
4.SI NO INGRESA UN NUMERO VOLVER A PEDIR CANTIDAD DE CUADROS
*/

alert("Usted esta por comprar obras de la artista Merdeces Llanos!");
alert("El valor por cuadro es de U$S1500, en caso elija 3 o mas sera de U$S1350 y en caso elija 5 o mas sera de U$S1250");

let cantidadCuadros = parseInt(prompt("Ingrese la cantidad de cuadros que desea comprar"))
let precioCuadros = 1500;
let precioCuadros2 = 1350;
let precioCuadros3 = 1250;

function operacion(a, b) {
    return a * b;
}

while (isNaN(cantidadCuadros) || cantidadCuadros <= 0) {
    cantidadCuadros = parseInt(prompt("Cantidad Erronea, Digite cantidad nuevamente"))
}

if (cantidadCuadros >= 0 && cantidadCuadros < 3) {
    alert("El total es: " + operacion(cantidadCuadros, precioCuadros) + " dolares");
} else if (cantidadCuadros >= 3 && cantidadCuadros < 5) {
    alert("El total es: " + operacion(cantidadCuadros, precioCuadros2) + " dolares");
} else if (cantidadCuadros >= 5) {
    alert("El total es: " + operacion(cantidadCuadros, precioCuadros3) + " dolares");
}

