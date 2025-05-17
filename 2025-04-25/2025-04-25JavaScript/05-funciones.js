//Funciones
//Declarando la funcion común
function function0(a, b) {
  return a + b;
}
//Llamando a la funcion con un consoles.log
console.log("funcion sums", function0(5, 10)); //15

//Llamando a la funcion sin declararla antes, no hay problema si se declara antes o despues
console.log("funcion resta", resta(5, 10));
function resta(a, b) {
  return a - b;
}

//Funciones flechas
const funcion1 = (a, b) => {
  return a + b;
};
console.log("funcion flecha =>", funcion1(5, 9)); //14
//No pueden ser utilizadas antes de ser declaradas

//Funciones anonimas
const funcion2 = function (a, b) {
  return a + b;
};
console.log("funcion anónima", funcion2(5, 9)); //14

//Funciones declarada como varaible
const function3 = function nuevaFunction(g, h) {
  return g + h;
};
console.log("funcion declarada como variable", function3(15, 9));

//Funcion flecha sin return
const funcion4 = (a, b) => a + b; //No es necesario el return
console.log("funcion flecha sin return", funcion4(5, 9)); //14
