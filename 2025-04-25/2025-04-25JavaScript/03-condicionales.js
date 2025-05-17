let a = 6;
//let a = "6"

//Condiconal if
if (a == 6) {
  console.log("a es igual a 6");
} else {
  console.log("a no es igual a 6");
}

//Condicional switch
switch (a) {
  case 6:
    console.log("a es igual a 6");
    break;
  default:
    console.log("a no es igual a 6");
}

switch (a) {
  case 6:
    console.log("es el número 6");
    break;
  case 6:
    console.log("es texto '6'");
    break;
  default:
    console.log("no es 6");
}

//Comparaciones
console.log("Comparacion null y undefined == ", null == undefined); // true
console.log("Comparacion null y undefined === ", null === undefined); // false  // == compara el valor y === compara el valor y el tipo de dato

//Comparaciones de igualdad raras
console.log("Comparacion '' y 0", "" == 0); // true  // "" es un string vacío y se convierte a 0
console.log("comparacion '' y '0'", "" == "0"); // false  // "" es un string vacío y se convierte a 0, pero "0" es un string con un valor de 0
console.log("comparacion 0 y '0'", 0 == "0"); // true  // 0 es un número y se convierte a string

//Ternarios
console.log(a == 6 ? "a es igual a 6" : "a no es igual a 6");
console.log(a == 6 && "a es igual a 6"); // && es un operador lógico que devuelve el primer operando si es falso, o el segundo operando si ambos son verdaderos
console.log(a == 6 || "a es igual a 6"); // || es un operador lógico que devuelve el primer operando si es verdadero, o el segundo operando si ambos son falsos
