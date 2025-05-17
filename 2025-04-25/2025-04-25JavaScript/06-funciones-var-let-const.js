//Funcion declarando con var, lo peculiar es que no se puede utilizar "i" fuera de la función.
function rango(a, b) {
  for (var i = a; i <= b; i++) {
    console.log("dentro del for", i);
  }
  console.log("Dentro de la funcion. Final:", i); //Si funciona
}
rango(1, 10); // 1 2 3 4 5 6 7 8 9 10
//console.log("fuera de la función", i); // No funciona. Con este console.log no se puede acceder a "i" porque es una variable local de la función rango

//Funcion declarada con let, lo peculiar es que no se puede utilizar "i" fuera de la función.
function rango2(a, b) {
  for (let i = a; i <= b; i++) {
    console.log("dentro del bucle", i);
  }
  console.log("fuera el bucle, no anda", i);
}
rango2(7, 23); // 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23

/* A la hora de crear una variable arrancamos con "const",
 si necesitamos cambiar el valor de la variable, la creamos con "let".*/
