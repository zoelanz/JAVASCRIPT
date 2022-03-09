// sticky note

// tipos de datos: string (con comillas), number (sin comiilas), null, defined, symbol, boolean (para variables, o p saber si algo es v o f)

// -----------------------------------------------

// FORMAS DE IMPRIMIR DATOS:

// console.logo(nombre de variable);  ----> imprime en la consola

// alert(nombre de variable);  ----> ventanita en navegador

// prompt permite pedirle datos al usuario

// -----------------------------------------------

// VARIABLES:

// la palabra var se recomienda no usar, usaremos principalmente let y const

// let es una variable se usa para cuando algo va a variar osea puedo asignar mas de un valor- los valores siempre se asignan luego de definir la variable (let)

// const es una variable se usar para cuando algo no va a varias osea sera constante, solo permite un valor

// parseInt convierte texto a numero y suma como numero entero

// parseFloat convierte texto a numero y te suma decimal tambien





// const papelito1 = "Esta es mi primera nota";
// let papelito2 = "Esta es mi segunda nota";

// let papelito3 = papelito1 + papelito2;

// console.log(papelito1);
// console.log(papelito2);
// console.log(papelito3);


// EJERCICIO 1

// let papelito1 = prompt("ingresa tu nombre");
// let papelito2 = prompt("ingresa tu edad");

// let papelito3 = "Hola soy " + papelito1 +" tengo " + papelito2 + " años";

// alert(papelito3);


// ---------------------------------CLASE 2 -------------------------


// CONDICIONALES: una estructura que sirve para tomar una decision a partir de una condicion

//  NaN =not a number
// el operador !== significa que es diferente
// el operador && significa y
// el operador || significa o

// = == ===
// const nombre = "zoe" asignando un valor a una variable
// 1=="1" --> valido compara valores independientemente que sea number or string
// 1===1 --> valido si el valor y el tipo de dato es igual


// EJERCICIOS

// 1. Pedirle al usuario que ingrese un número
// 2. Si el número es mayor a 0:
//   2.1 Mostrar un mensaje que diga 'Número positivo'
// 3. Si el número es menor a 0:
//   3.1 Mostrar un mensaje que diga 'Número negativo'
// 4. Si el número es 0:
//   4.1 Mostrar un mensaje que diga 'Número 0'
// 5. Si ingresa letras:
//   5.1: Mostrar un mensaje que diga 'Número inválido'



// const numero = parseInt (prompt ("Por favor, ingresa un numero"));

//  if (numero>0 || numero ===0)
//  {
//     console.log ("numero positivo");
//  }

// else if (numero<0)
//  {
//     console.log ("numero negativo");
//  }

//  else if(parseInt===0)
//  {
//      console.log("el numero ingresado es 0");
//  }

// else (isNaN(numero))
//   {
//      console.log ("el numero es invalido");
//  }


// EJERCICIO CALCULADORA-----------------------------------------

// const numero1 = parseInt(prompt("ingrese un numero"))

// const operacion = prompt("ingrese una operacion: SUMA, RESTA, MUL, DIV");

// const numero2 = parseInt(prompt("ingrese otro numero"))

// if (!isNaN(numero1) && !isNaN(numero2)) {
//     if (operacion === "SUMA" ||
//         operacion === "RESTA" ||
//         operacion === "MUL" ||
//         operacion === "DIV") {
//         if (operacion === "SUMA") {
//             console.log(numero1 + numero2)
//         } else if (operacion === "RESTA") {
//             console.log(numero1 - numero2)
//         } else if (operacion === "MUL") {
//             console.log(numero1 * numero2)
//         } else if (operacion === "DIV") {
//             console.log(numero1 / numero2)
//         }
//     } else {
//         console.log("OPERACION INVALIDA")
//     }
// } else {
//     console.log("numeros invalidos")
// }


// ------------------------------------CLASE 3------------------------------------------------------------

// CICLOS: algo que se repite durante cierto tiempo
// for: (inicializacion; condicion; modificacion de la inicializacion)
// break: para el ciclo-- no se recomienda usar
// continue: brinca dentro del ciclo 


// console.log("agarrar cepillo");
// console.log("poner pasta");
// console.log("abrir la boca");

//  for(let i=0; i<21; i++)
//  {
//      if(i!==0)
//      {
//          console.log(`${i} cepillar dientes de adelante`);
//      }

// }

// otra forma de hacer lo mismo-- concatenando

// for(let i=0;i<20; i++)
// {
//     console.log(i+ cepillar dientes de adelante")
// 

// ---------------------------------------------------------

// 1. pedir un numero al usuario
// 2. validar que el dato ingresado sea un numero
// 3. definir un contador 
// 4. mientras que el contador sea menos o igual al numero ingresado: 
//         Imprimir el contador


// FOR

//  let numero = parseInt(prompt("ingresa un numero"));

//  if(!isNaN(numero))
//  {
//      if(numero>=0)
//      {
//          for (let contador= 0; contador<=numero;contador++)
//          {
//              console.log(contador);
//          }
//      }

//          else

//          for (let contador = numero; contador<=0; contador++)
//          {
//              console.log (contador);
//          }        

//      }

//  else
//      {
//          console.log("NUMERO INVALIDO")
//      }

// ---------------------------------------------------------

// 1. pedir un numero al usuario
// 2. validar que el dato ingresado sea un numero
// 3. definir un contador 
// 4. mientras que el contador sea menos o igual al numero ingresado: 
//         Imprimir el contador

// WHILE : mientras pase esto haga esto

// let numero = parseInt(prompt("Ingrese un numero"))

// if (!isNaN(numero))
// {
//     let contador =0 
//     while(contador<=numero)
//     {
//         alert(contador)
//         contador++
//     }
// } 

// ---------------------------------------------------------

// 1. pedir un numero al usuario
// 2. validar que el dato ingresado sea un numero
// 3. definir un contador 
// 4. mientras que el contador sea menos o igual al numero ingresado: 
//         Imprimir el contador

//  DO WHILE: haga esto mientras pasa esto - no es muy comun casi no se encuentra

//  let numero = parseInt(prompt("Ingrese un numero"))

//  if (!isNaN(numero))
//  {
//      let contador =0 
//     do
//      {
//          alert(contador)
//          contador++
//      }
//      while(contador<=numero)
//  } 

//  else if  (numero<=0)
//      for(contador=numero; contador<=0;contador++){
//          alert (contador)
//      }

//      else{
//          alert("numero invalido")
//      }

// ---------------------------------------------------------

// 1. pedir un numero al usuario
// 2. validar que el dato ingresado sea un numero
// 3. definir un contador 
// 4. mientras que el contador sea menos o igual al numero ingresado: 
//         Imprimir el contador

// FOR y WHILE

// let numero= 0;

// do{
// numero = parseInt(prompt("ingresa un numero"));

//     if(!isNaN(numero))
//     {
//         if(numero>=0)
//         {
//             for (let contador= 0; contador<=numero;contador++)
//             {
//                 console.log(contador);
//             }
//         }

//         else
//         {
//             for (let contador = numero; contador<=0; contador++)
//             {
//                     console.log (contador);
//             }        


//         }
//     }

//     else
//         {
//             console.log("NUMERO INVALIDO")
//         }
// }
// while(isNaN(numero)) 

// vuelve a pedir numero si lo que ingresas no es un numero

// --------------------------------------------------------- 

// cuando la logica no es una logica de conteo conviene usar WHILE

// let cad =""

// while(cad !== "esc")
// {
//     cad= prompt ("ingresa algo")
//     console.log (cad)
// }

// ---------------------------------------------------------

// ejercicio de fibonacci:  la suma de los dos numeros anteriores

// codigo fibonacci: 1 1 2 3 5 8 13 21 ...

//  let num = prompt ("ingrese un numero")
//  let n0 = 1
//  let n1 = 1

//  if (num === 0){
//      console.log (1)
//  }
//  else if (num===1 ){
//      console.log (1)
//  }
//  else{
//      for (let i=2; i<=num; i++){
//          let ni =n0 + n1
//          n0 = n1
//          n1= ni
//      }
//      console.log (n1)
// }



// ------------------------------------- CLASE 4-------------------------------------------------------------------------

/* 
1. pedir al usuario un numero
2. pedir al usuario otro numero 
3. pedir al usuario una oepracion
4. imprimir el restulado */

//  const numero1 = parseInt(prompt("INGRESE UN NUMERO"))
//  const numero2= parseInt(prompt("INGRESE OTRO NUMERO"))
//  const operacion =prompt("INGRESE UNA OPERACION:\n SUMA \n RESTA \n MUL \n DIV ")

//  if (operacion=== "SUMA")
//  {
//         console.log(numero1+numero2)
//  }
//  else if (operacion=== "RESTA")
//  {
//         console.log(numero1-numero2)
//  }
//  else if (operacion=== "DIV")
//  {
//         console.log(numero1/numero2)
//  }
//  else if (operacion=== "MUL")
//  {
//         console.log(numero1*numero2)
//  }
//  else
//  {
//      console.log("OPERACION NO VALIDA")
//  }


//  switch(operacion)
//  {
//     case "SUMA":
//     {
//         console.log(numero1+numero2)
//         break;
//     }
//     case "RESTA":
//     {
//         console.log(numero1-numero2)
//         break;
//     }
//     case "DIV":
//     {
//          console.log(numero1/numero2)
//          break;
//     }
//     case "MUL":
//     {
//          console.log(numero1*numero2)
//          break;
//     }

//     default:{
//         console.log("OPERACION INVALIDA")
//     }

//  }

// FUNCIONES---------------------------------------

//   FUNCIONES: CONJUNTOS DE INSTRUCCIONES PARA REALIZAR UNA TAREA COMPLETA

// para que una funcion se ejecute debo llamarla- sirve para no estar repitiendo el codigo constantemente- se llama a la funcion y listo.

// PARAMETROS: HAY FUNCIONES CON PARAMETROS Y SIN . SI TIENEN VAN DENTRO DE LOS PARENTESIS DESPUES DE NOMBRAR LA FUNCION.UN PARAMETRO ES UNA REFERENCIA A UN VALOR QUE ME PERMITIRA USAR ESE VALOR DENTRO DE LA FUNCION


//  function saludar(nombre)
//  {
//      console.log ("HOLA "+ nombre)
//      console.log ("Este es un saludo")
//      alert ("BIENVENIDO "+ nombre)
//  }

//  const nombreUsuario = prompt("INGRESE SU NOMBRE ")
//  const nombreUsuario2 = prompt("INGRESE OTRO NOMBRE ")
//  const nombrePerro =prompt("ingrese nombre de su perro")

//  saludar(nombreUsuario)
//  saludar(nombreUsuario2)
//  saludar (nombrePerro)

//  SE PUEDE TENER FUNCIONES SIN RETORNO COMO LA DE ARRIBA O CON RETORNO COMO EL SIGUIENTE EJEMPLO.

// function saludar(nombre)
// {
//     console.log ("HOLA "+ nombre)
//     console.log ("Este es un saludo")
//     alert ("BIENVENIDO "+ nombre)
// }

// function sumar (n1,n2)
// {
//    const resultado = n1+n2
//    return resultado
// }

//   const nombreUsuario = prompt("INGRESE SU NOMBRE ") 

//   const numero1 = parseInt(prompt("INGRESE UN NUMERO"))
//   const numero2= parseInt(prompt("INGRESE OTRO NUMERO"))
//   const suma = sumar (numero1,numero2)


// saludar(nombreUsuario)
// alert (suma)

// CONCEPTO DE HOSTING: JAVASCRIPT BUSCA LAS VARIABLES EN EL SCOPE MAS CERCANO----------maneja dos tipos de alcance : un scope local y un scope global.. por fuera de la funcion es global, por dentro local.

// let ensalada = "OTRA ENSALADA"

// function prepararEnsalada(ing1,ing2,ing3)
// {
//     let ensalada= ing1+" "+ing2+" "+ing3
//     console.log("su ensalada es de: " + ensalada)

//     function ponerleVinagreta ()
//     {
//         let ensalada= ing1+" "+ing2+" "+ing3 + " vinagreta"
//        console.log("su ensalada es de: " + ensalada)
//     }
//     ponerleVinagreta()


// }

// prepararEnsalada("rucula", "champignon", "tomate")
// console.log("su ensalada es de: " + ensalada)



// let ensalada = "OTRA ENSALADA"

// function prepararEnsalada(ing1,ing2,ing3)
// {
//     let ensaladaInterna= ing1+" "+ing2+" "+ing3
//     return ensaladaInterna



// }

// const miEnsalada= prepararEnsalada("rucula", "champignon", "tomate")
// console.log("su ensalada es de: " + miEnsalada)


// ejercicio que dio en clase para hacer en grupo---------

// function sumarNumeros(n1, n2, n3, n4) {
//     let resultado = n1 + n2 + n3 + n4;
//     return resultado
// }
// let num1 = parseInt(prompt("Ingrese un primer numero"))
// let num2 = parseInt(prompt("Ingrese un segundo numero"))
// let num3 = parseInt(prompt("Ingrese un tercero numero"))
// let num4 = parseInt(prompt("Ingrese un cuarto numero"))

// console.log(sumarNumeros(num1, num2, num3, num4))

// ---------------------------------------------------------

// let num1 = parseInt(prompt("Ingrese un primer numero"));
// let num2 = parseInt(prompt("Ingrese un segundo numero"));
// let num3 = parseInt(prompt("Ingrese un tercero numero"));
// let num4 = parseInt(prompt("Ingrese un cuarto numero"));

// function sumarNumeros(n1, n2, n3, n4) {
//     return n1 + n2 + n3 + n4;
// }
// alert(sumarNumeros(num1, num2, num3, num4));

// ---------------------------------------------------------


// function sumar (n1, n2, n3 ,n4)
// {

//     return n1+n2+n3+n4

// }

// let numero1= parseInt(prompt("INGRESE UN NUMERO"))
// let numero2= parseInt(prompt("INGRESE OTRO NUMERO"))
// let numero3= parseInt(prompt("INGRESE OTRO NUMERO"))
// let numero4= parseInt(prompt("INGRESE OTRO NUMERO"))

// let suma = numero1+numero2+numero3+numero4


// alert ("el resultado es : " +suma)


// ------------------------------------------------AFTER CLASE 4-------------------------------------------------------------------------------------

/* 1.PERDIRLE AL USUARIO QUE INGRESE CUANTOS NUMEROS QUIERE OPERAR 
2.ALMACENAR ESE NUMERO EN UNA VARIABLE (CANTIDAD)
3. DEFINIR OTRA VARIABLE PARA EL RESULTADO (RESULTADO)
4.DEFINIR UNA VARIABLE PARA CONTAR
5. MIENTRAS QUE EL USUARIO NO HAYA INGRESADO (CANTIDAD) VECES UN NUMERO
    5.1 PEDIRLE AL USUARIO QUE INGRESE UN NUMERO
    5.2 MODIFICAR RESULTADO, OPERANDO EL NUMERO INGREASADO, CON LA OPERACION DEFINIDA
6. IMPRIMIR EL RESULTADO */

//  const cantidad = parseInt(prompt("ingresa los numeros que quieras operar"))
//  let resultado=0 
//  let contador=0

//  while(contador<=cantidad)
//  {
//     let num = parseInt(prompt("ingresa otro numero"))
//  }







// --------------------------------------CLASE 5-----------------------------------------------------------------------
// un objeto me permite definir entidades que tendran cierto comportamiento. a una variable le agrego propiedades con sus valores.
// producto:


// sku
// nombre
// precio
// descripcion 
// stock
// color 
// peso 


// const producto = {

//  sku:"2008900",
//  nombre:"Alfajor",
//  precio: 100,
//  descripcion:"Los mejores alfajores del mundo" ,
//  stock: 200,
//  color: "Blanco",
//  peso:"50gr",
//  disponible: "True",

// }

// console.log(producto)

// console.log("PRECIO",producto.precio)

// console.log("PRECIO",producto["precio"])

// console.log("algunas cosas del producto:",producto.precio, producto.color)

// producto.stock= producto.stock -1
// producto.stock -= 9

// console.log("Stock: ", producto.stock)

// ----------------------------------

// function producto (sku, nombre, precio){

// caracteristicas
// this.sku=sku
// this.nombre=nombre
// this.precio=precio
// this.stock=200

// comportamiento: cosas que sabe hacer
// this.incrementarStock= function(incremento)
// {
//     this.stock += incremento
// }

// this.decrementarStock= function(decremento)
// {
//     this.stock -= decremento
// }

// }

// const alfajor = new producto("89099", "alfajor", 200)
// const cafe = new producto ("87878", "cafe",300)

// console.log (alfajor)
// console.log (cafe)

// console.log("alfajores antes de incremento: "+ alfajor.stock)

// alfajor.incrementarStock(100)

// console.log("alfajores despues de incremento: "+ alfajor.stock)

// ----------------------------------------------

// class Producto{

//     constructor(sku, nombre, precio)
//     {
//Características
//         this.identificador = sku;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = 200;
//     }

//Comportamiento
//     incrementarStock(incremento)
//     {
//         this.stock += incremento;
//     }

//     decrementarStock(decremento)
//     {
//         this.stock-= decremento;
//     }


// }

// const alfajor = new Producto("89789","Alfajor", "");
// const cafe = new Producto("87878", "Café", 300);


// console.log("ALFAJOR ANTES DE INCREMENTO", alfajor.stock)

//     alfajor.incrementarStock(100);

// console.log("ALFAJOR DESPUES DE INCREMENTO",alfajor.stock)


// console.log("CAFE ANTES DE DECREMENTO", cafe.stock)

//     cafe.decrementarStock(2);

// console.log("CAFE DESPUES DE DECREMENTO",cafe.stock);




// console.log(cafe);

// -------------------------------------------------------------------

//  class Calculadora{

//     constructor(nombre){
//         this.nombre = nombre;
//     }

//     sumar(num1, num2){
//         return num1 + num2
//     }
//     restar(num1, num2){
//         return num1 - num2
//     }
//     dividir(num1, num2){
//         return num1/num2
//     }
//     multiplicar(num1, num2){
//         return num1*num2
//     }
// }

// const calculadora = new Calculadora("Calc1");
// console.log(calculadora.sumar(2,6));
// console.log(calculadora.restar(2,6));
// console.log(calculadora.dividir(2,6));
// console.log(calculadora.multiplicar(2,6));

// -------------------------------------------------------------------

// class Calculadora{
//     constructor(valor1, valor2){
//         this.valor1= valor1
//         this.valor2= valor2
//         this.resultado
//     }
//     sumar(){
//         this.resultado = this.valor1 + this.valor2
//     }
//     restar(){
//         this.resultado = this.valor1 - this.valor2
//     }
//     multiplicar(){
//         this.resultado = this.valor1 * this.valor2
//     }
//     dividir(){
//         this.resultado = this.valor1 / this.valor2
//     }
// }

// let op = new Calculadora(5, 5)
// op.sumar()
// console.log(op)














// ---------------------------------------------------------------------------CLASE 6-------------------------------------------------------------------------------------

//  ARRAYs o arreglo: conjunto de datos

// let numero1=0;
// let numero2=1;
// let numero3=2;
// let numero4=3;
// let numero5=4;

// Cuando hay muchos datos se vuelve tedioso entonces se puede hacer asi: con arrays: y se recomienda que los datos sean del mismo tipo

// let numeros = [0,1,2,3,4,5,6,7,8,9,10];

// console.log (numeros)

// esto de aca abajo se puede pero no se recomienda

// let numeros = ["HOLA",1,2,3,4,5,true,7,8,9,false, ["adentro",1,2]]

// esto es un objeto con un array dentro:

// class calculadora{

//    constructor(){
//        this.numeros=[0,1,2,3,4,5,6,7,8,9,10];
//    }
// }

// const myCalc= new calculadora();
// console.log (mycalc.numeros);

// los arrays tienen algo que se llama INDICE, lo cual me permite tener acceso a un dato en particular del arrar.el INDICE empieza en 0 de esa forma se van a llamar cuando los necesite

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// // aca los indices son: 0,1,2,3,4,5,6,7,8,9

// console.log("ARRAY COMPLETO", numeros);

// console.log("INDICE 0:", numeros[0]);

// // COMO IMPRIMO EL ARRAY DE UNA FORMA MAS SENCIILLA? CON UN CICLO.

// // length: viene en el array. es la cantidad de elementos que hay en un array

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// for(let i=0; i<numeros.length ; i++){
//     console.log("INDICES", numeros [i]);
// }

// // como  meto del 1 al 100 o hasta el que quiera sin necesidad de escribir uno x uno. osea como agrego elementos a un array:

// const numeros = [];

// for(let i=0; i<100 ; i++)
// {
//     numeros.push (i+1);
// }

// console.log (numeros);

// // como hago para que sea un numero ingresado por el usuario?: PUSH:

// const numeros = [];
// const numeroUsuario= parseInt(prompt("ingrese un numero"))

// for(let i=1; i<=numeroUsuario ; i++)
// {
//     numeros.push (i);
// }

// console.log (numeros);

// //UNSHIFT: para hacerlo de forma inversa:

// const numeros = [];
// const numeroUsuario= parseInt(prompt("ingrese un numero"))

// for(let i=1; i<=numeroUsuario ; i++)
// {
//     numeros.unshift (i);
// }

// console.log (numeros);

// // como hago para quitar elementos del array:

// const numeros = [];

// for(let i=1; i<=10 ; i++)
// {
//     numeros.push (i);
// }

// console.log ("todo el array", numeros);

// numeros.pop();

// console.log("array sin el ultimo", numeros);

// // como hago para quitar el primer elemento del array: SHIFT

// const numeros = [];

// for(let i=1; i<=10 ; i++)
// {
//     numeros.push (i);
// }

// console.log ("todo el array", numeros);

// numeros.shift();
// numeros.shift();


// console.log("array sin el primero", numeros);


// // como hago para quitar un elemento en particular: SPLICE

// const numeros = [];

// for(let i=1; i<=10 ; i++)
// {
//     numeros.push (i);
// }

// console.log ("todo el array", numeros);

// numeros.splice(1,4);

// // desde el indice 1 quiero quitar 4 elementos


// console.log("array sin un elemento en particular", numeros);


// // si quiero quitar ejemplo numeros del INDICE PARES OSEA 0 2 4..:

// const numeros= [];


// for(let i=1; i<=10; i++)
// {
//     numeros.push(i);
// }

// console.log("TODO EL ARRAY", numeros);

// for(let i=0; i<numeros.length; i++)
// {
//    if(numeros[i]%2===0)
//        {
//            numeros.splice(i,1);
//        }
// }

// console.log("ARRAY SIN INDICES PARES",numeros);








// CLASE 5 : OBJETOS: representacion de algo fisico en el mundo virtual, o en mi programa.

// LOS OBJETOS TIENEN ATRIBUTOS, CARACTERISTICAS

// existen  varios tipos de datos como vimos: string, number, booleanos, null, undifined pero tambien estan los objetos, que es un tipo de dato que se le puede asignar a una variable.

// const producto = {
//     sku: "5151",
//     nombre: "Alfajor",
//     precio:100,
//     descripcion: "los mejores del mundo",
//     stock: 200,
//     color: "blanco",
//     peso:"50gr",
//     disponible: true,
// }

// en un objeto a una variable le asigno todas esas propiedades.

// console.log(producto);

// si por ejemplo quiero saber solo una propiedad del producto hago esto:  

// console.log("PRECIO", producto.precio);

// otra forma seria asi:

// console.log("PRECIO", producto["precio"])

//  para mostrar mas de una propiedad:

// console.log("algunas cosas del producto:",producto.precio, producto.nombre, producto.color);


 
// supongamos quiero cambiar el stock: osea modificar un propiedad

// producto.stock= producto.stock-1;

// console.log(producto)

// una forma de escribir esto mas corto:

// producto.stock -= 1;

// console.log(producto);

// objeto con funcion: se llama funcion constructora. el this es para que js construya el objeto.

// function producto (sku, nombre, precio) {
    // caracteristicas
    // this.sku= sku;
    // this.nombre=nombre;
    // this.precio=precio;
    // this.stock= 200;

    // comportamiento: esta funcion no tiene nombre y se llama FUNCION ANONIMA: asi defino el comportamiento del objeto.

//     this.incrementarStock= function (incremento){
//         this.stock += incremento;
//     } 
//     this.decrementarStock= function (decremento){
//         this.stock -= decremento;
//     } 
    
// }

// de esta forma construyo un objeto: con la palabra new:

// const alfajor = new producto("89099", "alfajor", 200);
// const cafe = new producto ("87878", "cafe",100)

// console.log(alfajor);
// console.log(cafe);

// console.log("ALFAJOR antes de incremento:", alfajor.stock); 

// alfajor.incrementarStock(100);
// console.log(" ALFAJOR despues de incremento:",alfajor.stock);

// OBJETOS CON CLASES: class acompañado del nombre del objeto con la primer letra mayuscula.

// class Producto{

//     constructor(sku, nombre, precio)
//     {
       // caracteristicas
//         this.id= sku;
//         this.nombre=nombre;
//         this.precio=precio;
//         this.stock= 200;
//     }

// comportamiento del objeto: son funciones
//    incrementarStock(incremento)
//     {
//         this.stock+=incremento;  
//     }
//   decrementarStock(decremento)
//     {
//      this.stock-=decremento;     
//     }
// }

// const alfajor = new Producto("89099", "alfajor", 200);
// const cafe = new Producto ("87878", "cafe",100)

// console.log(alfajor);
// console.log(cafe);

// console.log("ALFAJOR antes de incremento:", alfajor.stock); 

// alfajor.incrementarStock(100);
// console.log(" ALFAJOR despues de incremento:",alfajor.stock);


// EJERCICIO  DE CLASE :

// class Calculadora{
//     constructor(nombre)
//     {
//         this.nombre=nombre;
//     }

//     sumar(a,b)
//     {
//         return a+b;
//     }

//   restar(a,b)
//     {
//         return a-b;   
//     }

//     multiplicar(a,b)
//     {
//         return a*b;   
//     }

//     dividir(a,b)
//     {
//         return a/b;     
//     }
// }

// const calculadora = new Calculadora("calcu");

// console.log(calculadora.sumar(2,8));

// console.log(calculadora.restar(10,8));

// console.log(calculadora.multiplicar(2,8));

// console.log(calculadora.dividir(10,5));

// PRACTICANDO OBJETOS

// let datos= alert("pinturas disponibles: a, b y c");
// let pinturas= (prompt("elija a, b o c")).toUpperCase();

// class Cuadros{
//     constructor(tamaño,nombre,codigo,precio){
//         this.tamaño= tamaño;
//         this.nombre= nombre;
//         this.codigo= codigo;
//         this.precio=precio;
//     }
//     datos(){
//         alert(`la pintura tiene un tamaño de ${this.tamaño}, se llama ${this.nombre} y su precio es de $ ${this.precio}`)
//     }
// }

// const pintura1 = new Cuadros("10x10", "a", 1701,1500);
// const pintura2 = new Cuadros("10x10", "b", 1705,1800);
// const pintura3 = new Cuadros("10x10", "c", 1709,1900);

// while( pinturas!="A" && pinturas!="B" && pinturas!="C"){
// pinturas= (prompt("elija a, b o c")).toUpperCase();
// }


// if(pinturas=="A"){
//    pintura1.datos();
// }
// else if(pinturas=="B"){
//    pintura2.datos() ;
//  }
//  else if(pinturas=="C"){
//     pintura3.datos()
//  }

// CLASE 6: ARRAYS(ARREGLOS)-------------

// UN  ARRAY ES UN TIPO DE DATO QUE SIRVE PARA ALMACENAR VALORES EN FORMA DE LISTA. PUEDE SER UNA COLECCION DE NUMEROS, DE STRINGS, BOOLEANOS,OBJETOS O HASTA UNA LISTA DE LISTAS.LOS VALORES DEL ARRAY PUEDEN SER DISTINTOS Y ES POSIBLE AGREGAR O QUITAR ELEMENTOS EN TODO MOMENTO. 
// LOS ELEMENTOS DEL ARRAY TIENEN UN INDICE QUE VA DESDE EL 0 (PRIMER ELEMENTO DEL ARRAY) HASTA EL ULTIMO ELEMENTO.

// let numero1=0;
// let numero2=1;
// let numero3=2;
// let numero4=3;
// let numero5=4;

// CUANDO TENGO MUCHOS DATOS ES TEDIOSO GENERAR TANTAS VARIABLES COMO ARRIBA. ENTONCES SE SIMPLIFICA CON ARRAYS: OSEA UN CONJUNTO DE DATOS(se recomienda sea siempre el mismo tipo de datos)

// const numeros=[0,1,2,3,4,5,6,7,8,9,10];
// console.log(numeros);

// EJEMPLO ARRAY DENTRO DE OBJETO:

// class calculadora
// {
//     constructor(){
//         this.numeros= [0,1,2,3,4,5,6,7,8,9,10];
//     }
// }

// const myCalc= new calculadora ();
// console.log(myCalc.numeros);


// EL ARRAY  TIENE UN INDICE (EMPIEZA EN 0), LO CUAL ME PERMITE ACCEDER A UN ELEMENTO DENTRO DEL ARRAY: 

// const numeros=[1,2,3,4,5,6,7,8,9,10];

// En este ejemplo de arriba cuando accedo a la posicion 0 del array accedo al 1, cuando acceso a la posicion 1 accedo al 2 y etc.

// IMPRIMIENDO ARRAY COMPLETO 

// console.log(numeros);

// IMPRIMIENDO UN ELEMENTO DEL ARRAY 

// console.log(numeros[0]);

// IMPRIMIENDO ARRAY COMPLETO DE FORMA MAS SENCILLA: USANDO UN CICLO------------

// numeros.lenght : el largo del array, la cantidad de elementos que hay dentro del array.

// for(let i=0;i<numeros.length;i++)
// {
//     console.log("INDICE",numeros[i]);
// }

// COMO AGREGO ELEMENTOS A UN ARRAY: 
// CON PUSH el cual me agrega un elemento al final del array----

// const numeros=[];

// for(let i=1; i<=100; i++)
// {
//     numeros.push(i);
// }

// console.log(numeros);


// COMO HAGO PARA QUE SEA UN NUMERO INGRESADO POR EL USUARIO----

// const numeros=[];

// const numeroUsuario=parseInt(prompt("ingrese un numero"))

// for(let i=1; i<=numeroUsuario; i++)
// {
//     numeros.push(i);
// }

// console.log(numeros);

// UNSHIFT: AGREGA ELEMENTOS AL PRINCIPIO DEL ARRAY

// const numeros=[];

// const numeroUsuario=parseInt(prompt("ingrese un numero"))

// for(let i=1; i<=numeroUsuario; i++)
// {
//     numeros.unshift(i);
// }

// console.log(numeros);

// POP: QUITA EL ULTIMO ELEMENTO DEL ARRAY. NO RECIBE PARAMETROS PORQUE TE QUITA SIEMPRE EL ULTIMO

// const numeros=[];

// for(let i=1; i<=10; i++)
// {
//     numeros.push(i);
// }

// console.log("TODO EL ARRAY",numeros);

// numeros.pop();

// console.log("ARRAY QUITANDO EL ULTIMO ELEMENTO",numeros);

// SHIFT: QUITA EL PRIMER ELEMENTO---------

// const numeros=[];

// for(let i=1; i<=10; i++)
// {
//     numeros.push(i);
// }

// console.log("TODO EL ARRAY",numeros);

// numeros.shift();

// console.log("ARRAY QUITANDO EL PRIMER ELEMENTO",numeros);


// SPLICE:PARA QUITAR UN ELEMENTO EN PARTICULAR DEL ARRAY, RECIBE DOS PARAMETROS: DESDE QUE NUMERO DE INDICE Y CUANTOS ELEMENTOS A QUITAR(1,2)---------

//  const numeros=[];

//  for(let i=1; i<=10; i++)
//  {
//      numeros.push(i);
//  }

//  console.log("TODO EL ARRAY",numeros);

//  numeros.splice(1,4);

//  console.log("ARRAY QUITANDO UN ELEMENTO EN PARTICULAR",numeros);

//  QUITANDO NUMEROS PARES DEL ARRAY

// const numeros=[];

//  for(let i=1; i<=10; i++)
//  {
//      numeros.push(i);
//  }

//  console.log("TODO EL ARRAY",numeros);

//  for(let i=0; i<numeros.length; i++)
//  {
//     if(numeros[i]%2===0){
//         numeros.splice(i,1)
//     }
//  }

//  console.log("ARRAY QUITANDO NUMEROS PARES",numeros);

//  QUITANDO INDICES PARES DEL ARRAY

// const numeros=[];

//  for(let i=1; i<=10; i++)
//  {
//      numeros.push(i);
//  }

//  console.log("TODO EL ARRAY",numeros);

//  for(let i=0; i<numeros.length; i++)
//  {
//     if(i%2===0){
//         numeros.splice(i,1)
//     }
//  }

//  console.log("ARRAY QUITANDO INDICES PARES",numeros);


//  JOIN: UNE TODO. recibe un parametro (" ") que es con lo que va a unir el array--------

// const textos=["hola", "esto", "es", "un", "array"];

//  console.log("TODO EL ARRAY",textos);

// const nuevoTexto= textos.join(" ")

//  console.log("UNIENDO EL ARRAY",nuevoTexto);
 

// CONCAT: COMO UNIR DOS ARRAYS, recibe un paramentro . Al array tal concatenele el otro ----------

// const gatos=["michi", "fermin", "gala", "manteca", "felix"];

// const perros=["bartola", "ituca", "poroto", "tutuca", "cora"];


// const mascotas= gatos.concat(perros);

//  console.log("UNIENDO DOS ARRAY",mascotas);

// INTERCALANDO DATOS DE DOS DIFERENTES ARRAYS

// const gatos=["michi", "fermin", "gala", "manteca", "felix"];

// const perros=["bartola", "ituca", "poroto", "tutuca", "cora"];

// const mascotas=[];

// for(let i=0; i<gatos.length;i++)
// {
//     mascotas.push (gatos[i]);
//     mascotas.push (perros[i]);
// }

//  console.log(mascotas);


// SLICE: A PARTIR DE UN ARRAY GENERO OTRO ARRAY

// const perros=["bartola", "pituca", "poroto", "tutuca", "cora"];

// const perrosNuevos= perros.slice(1,3);


// console.log("PERROS NUEVOS",perrosNuevos);

// INDEXOF: PIDO EL INDICE DEL DATO DEL ARRAY-----

// const perros=["bartola", "pituca", "poroto", "tutuca", "cora"];

// console.log("PITUCA",perros.indexOf("pituca"));



// INCLUDES: el método includes me permite saber si un elemento que paso por parámetro existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo:

// const perros=["bartola", "pituca", "poroto", "tutuca", "cora"];

// const perroBuscado= prompt("ingrese el nombre de su perro")

// if (perros.includes(perroBuscado)){
//     alert("su perro esta con nosotros")
// }
// else{
//     alert("su perro no esta con nosotros")
// }

// REVERSE: INVIERTE EL ORDEN DE LOS ELEMENTOS DENTRO DE UN ARRAY--------

// const perros=["bartola", "pituca", "poroto", "tutuca", "cora"];

// perros.reverse()

// console.log(perros);



//  OBJETOS DENTRO DE UN ARRAY:

// const perros=[{nombre:"bartola", dueño: "ines"},{nombre:"pituca", dueño: "mariano"},{nombre:"poroto", dueño: "matias"},{nombre:"tutuca", dueño: "x"},
// {nombre:"cora", dueño: "diana"}];

// console.log(perros);

// FOR OF : Lo imprime objeto por objeto

// for (const perro of perros){
//     console.log(perro)
// }
// imprimo los dueños:
// for (const perro of perros){
//     console.log(perro.dueño)
// }

// ----------------------------------

//--------------- CLASE 7- FUNCIONES DE ORDEN SUPERIOR-------------------------------------------------------------

// function suma (a,b){
//     return a+b;
// }

// let c= suma(3,4);

// console.log(c);

// FUNCIONES ANONIMAS: NO TIENEN NOMBRE COMO TAL.SE LE ASIGNA LA FUNCION DIRECTAMENTE A UNA VARIABLE, ENTONCES EL NOMBRE DE LA VARIABLE PASA A SER EL NOMBRE DE LA FUNCION. EN ESTE CASO C ES IGUAL A UNA FUNCION. OSEA LA VARIABLE ES DE TIPO FUNCION.

// let c= function (a,b)
// {
//     return a+b;
// }

// let resultado= c(10,11);

// console.log(resultado);

// ARROW FUNCTION O FUNCION FLECHA: UNA FORMA MAS SIMPLE QUE INTRODUJO JS DE ESCRIBIR LO DE ARRIBA.

// let c= (a,b) =>
// {
//     return a+b;
// }

// let resultado= c(10,11);

// console.log(resultado);

// FUNCION FLECHA AUN MAS SIMPLE: SIRVE PARA FUNCIONES SIMPLES. SI HAY VARIAS INSTRUCCIONES DEBO HACERLO COMO ARRIBA.

// let c= (a,b) => a+b;


// let resultado= c(10,11);

// console.log(resultado);}

// EJERCICIO DE SISTEMA DE ADMINISTRACION DE USUARIOS:

// const usuarios=[
//     {
//         nombre: "Santiago",
//         apellido:"Avila",
//         id:1,
//         profesion: "ing en sistemas",
//         activo:true
//     },
//     {
//         nombre: "Juan",
//         apellido:"Perez",
//         id:2,
//         profesion: "contador",
//         activo:false
//     },
//     {
//         nombre: "Ana",
//         apellido:"Rojas",
//         id:3,
//         profesion: "abogada",
//         activo:true
//     },
//     {
//         nombre: "Petra",
//         apellido:"Ruiz",
//         id:4,
//         profesion: "",
//         activo:false
//     }
// ];

// const opciones=[
// "1. LISTAR \n",
// "2. MODIFICAR \n",
// "3. AGREGAR \n",
// "4. BUSCAR \n",
// "5. BORRAR \n",
// "6. OBTENER NOMBRES COMPLETOS \n",
// "7. CALCULAR INACTIVOS \n",
// "8. ORDENAR \n",
// "9. TERMINAR \n"
// ];

// 0.DECLARAR UNA VARIABLE PARA ALMACENAR LA OPCION
// 1.MIENTRAS QUE LA OP SELECCIONADA SEA DIF DE 9
// 2. MOSTRAR LAS OPCIONES

// let opcionSeleccionada= 0;

// let listado= "";

// for(let i=0; i<opciones.length;i++)
// {
//     listado+=opciones[i];
// }

// while(opcionSeleccionada!==9)
// {
//     opcionSeleccionada=parseInt(prompt("seleccione una opcion: \n"+ listado));
// }

// ---------------------------------------

// FUNCIONES DE ORDEN SUPERIOR: ME PERMITEN HACER OPERACIONES SOBRE ARRAYS SIN USAR TANTO CICLO. RECORREN EL ARRAY




// let opcionSeleccionada= 0;

// let listado= "";
// opciones.forEach((opcion)=>{listado+=opcion;});

//explicando lo de arriba:  array opciones. para cada elemento del array identifique el elemento con la variable opcion y ejecute lo siguiente: a listado asignele lo que tenga en listado mas la siguiente opcion.

// while(opcionSeleccionada!==9)
// {
//     opcionSeleccionada=parseInt(prompt("seleccione una opcion: \n"+ listado));

//     switch(opcionSeleccionada){
//         case 1: {
//             listarUsuarios();
//             break
//         }
//         case 2:{
//             modificarUsuarios();
//             break;
//         }
//         case 3:{
//             agregarUsuarios();
//             break;
//         }
//         case 4:{
//             buscarUsuarios();
//             break;
//         }


//         default:
//         {
//                 alert("opcion invalida")
//                 break;
//         }
//     }
// }

// function listarUsuarios()
// {
//     usuarios.forEach((usuario)=>console.log(usuario));
// }

// function modificarUsuarios()
// {
//    const id=parseInt(prompt("ingrese un id"));

//    const usuarioBuscado= usuarios.find((usuario)=>id===usuario.id);

//    if(typeof usuarioBuscado!=="undefined")
//    {
//         usuarioBuscado.nombre=prompt("ingrese nuevo nombre");
//    }
//    else{
//        alert("USUARIO NO EXISTE")
//    }
  
// }
// function modificarUsuarios(){
//     // hacerlo
// }



// function buscarUsuarios()
// {
//     const filtro=prompt("ingrese el criterio de busqueda");

//     const coincidencias= usuarios.filter((usuario)=> {return usuario.apellido === filtro;})

//     if (coincidencias){
//         console.log(coincidencias)
//     }
//     else{
//         alert("NO HAY COINCIDENCIAS")
//     }
// }


// forEach (): 

 
const numeros =[1,2,3,4,5,6];

numeros.forEach((num)=>{
    console.log(num)
})





