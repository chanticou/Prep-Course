// No cambies los nombres de las funciones.

const { concurrency } = require("@11ty/eleventy-cache-assets");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  let firstElement = array.shift();
  return firstElement;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let lastElement = array.pop()
  return lastElement;
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  let arrayLength = array.length;
  return arrayLength;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let array2 = [];
  array.map(el => {
    let res = el + 1;
    array2.push(parseInt(res));
  })
  return array2;
}



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  numeros.map(el=>{
    if(isNaN(el)) throw new Error('Not a Number');
    if(!Number.isInteger(el)) throw new Error('Not integer');
  })
  let suma = numeros.reduce((acc,curr)=>acc+curr,0)
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  resultadosTest.map(el => {
    if (isNaN(el)) {
      throw new Error('Not A Number')
    }
    if (!Number.isInteger(el)) throw new Error('Not integer')
  })

  const arrayLength = resultadosTest.length;
  let suma = resultadosTest.reduce((acc, curr) => acc + curr, 0);
  let result = suma / arrayLength;
  return result;

}



function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
    let mayor = numeros.reduce((acc, curr)=>Math.max(acc,curr));
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length === 0 ) return 0;
  let acc = 1;
  
   for(let i = 0 ; i < arguments.length ; i++ ){
       acc = arguments[i]*acc
   }
   return acc;
}


function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let variable = 0;

  arreglo.map(el=>{
      if(el>18){
          variable++;
      }
  })
  return variable;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7 ) return( 'Es fin de semana');
  return 'Es dia Laboral';
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if( n.toString()[0] == 9) return true;
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let variable=true;

  arreglo.forEach(el => {
      if (arreglo[0] !== el) {
          variable=false;
      };
  })
  return variable;
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = []

  array.forEach(el => {
      if(el === 'Enero' || el === 'Marzo' || el === 'Noviembre') {
          meses.push(el)
      }
  });
  if(meses.length !== 3) return "No se encontraron los meses pedidos";
  return meses;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let newArray = []
  array.forEach(el=>{
      if(el > 100){
          newArray.push(el)
      }
  })    
  return newArray;
}



function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array =[]
  for(let i=1; i<=10; i++){
      array.push(numero+=2)
      if(numero === 10) return ( "Se interrumpió la ejecución") ;
  }
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array =[]
  for(let i=1; i<=10; i++){
      if(i === 5)   continue ;
      array.push(numero+=2);
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};