var variable = 5;
variable = 10;
console.log(variable); // var permite darle valor a una variable y después modificarla

let variableLet = 8;
variableLet = "Cambio la variable a un string";
variableLet = 42;
console.log(variableLet); // let permite dar valor a una variable y después modificarla

const variableConst = 3; //const define un valor fijo y no se puede cambiar
variableConst = 54; // TypeError: Assignment to constant variable.
console.log(variableConst); // 3
