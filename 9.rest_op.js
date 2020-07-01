//Ejemplo 1.
const esSaludable = (...comida) => (comida.findIndex(f => f==="verdura") !== -1);

console.log(esSaludable("comida rapida","sopas","jugos","verdura","pizza"));
console.log(esSaludable("comida rapida","sopas","jugos","pizza"));

//Es muy común el operador de rest con el de propagación, 
//Comina múltiples argumentos dentro de un arreglo.

//Ejemplo 2.
//function renderProduct({id,name},...containerProps){...