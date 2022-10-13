// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:
    return str;
  }
  
  function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
     var adicion = x + y;
     return adicion
  }
     var sumar = suma( 5, 7);

  function resta(x, y) {
    // Resta "y" de "x" y devuelve el valor
    // Tu código:
     var restando = x - y;
     return restando;
  }
    var resultado = resta(9, 6);
  
  function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    var multiplicando = x * y;
    return multiplicando;
  }
   var resultadoMultiplica = multiplica( 4, 6);
  
  function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    var dividir = x / y;
    return dividir; 
  }
    var resultadoDivision = divide( 15, 3);
  
  function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    if (x === y ) {
      return true;
    } else {
      return false;
    }
  } sonIguales(5, 7 );
  
  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if (str1.length === str2.length){
      return true;
    } else {
      return false;
    }
  }
  
  function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num < 90){
      return true;
    } else {
      return false;
    }
  }
  
  function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num > 50){
      return true;
    } else {
      return false;
    }
  }
  
  function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    var restoDiv = x % y;
    return restoDiv;
  } 
   restoDivision = obtenerResto(23, 4);
  
  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
     var resto = num % 2
     if( resto === 0){
      return true;
     } else {
      return false;
     }
     
  }
  
  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    var resto = num % 2;
    if( resto !== 0){
      return true;
    } else {
      return false;
    }
  }
     

  function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    var potencia = num ** 2;
    return potencia;
  }
  resultadoPotencia = elevarAlCuadrado(4)
  
  function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    var potencia = num ** 3;
    return potencia;
  }
  resultadoPotencia = elevarAlCubo(3);
  
  function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    var potencia = num ** exponent;
    return potencia;
  }
   resultadoPotencia = elevar(3, 2);
  
  function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
     var redondeo = Math.round(num);
     return redondeo;
  }
  
  function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    var redondeo = Math.ceil(num);
    return redondeo;
  }
  
  function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    // Tu código:
    var random = Math.random();
    return random;
  }
  
  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:
    if( numero > 0){
      return "Es positivo";
    } else if( numero < 0){
      return "Es negativo";
    } else {
      return false;
    }
    
  }
  
  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    var saludo = str + "!";
    return saludo;
  }
  
  function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
    var saludo = nombre + " " + apellido;
    return saludo; 
  }
  
  function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    var saludo = "Hola " + nombre + "!";
    return saludo;
  }
  
  function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
     var areaRectangulo = alto * ancho;
     return areaRectangulo;
  }
  
  function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    var perimetro = lado * 4;
    return perimetro;
  }
  
  function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    var areaTriangulo = base * altura / 2;
    return areaTriangulo;
  }
  
  function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    var cambioMoneda = euro * 1.20;
    return cambioMoneda;
  }
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevarAlCuadrado,
    elevarAlCubo,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    areaDelTriangulo,
    deEuroAdolar,
  };