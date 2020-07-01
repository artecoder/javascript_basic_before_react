//Ejemplo 1.
const numbers =[11,5,3,1,26];
console.log(Math.max(numbers));     //Máximo: NaN
console.log(Math.max(...numbers));  //Máximo: 26

//Ejemplo 2.
//También es posible agregar la extracción de variables en otra variable
const comida = {
    desayuno: ["huevos","cafe"],
    almuerzo: ["pizza","alitas"]
};
const comidaYPostre = {
    ...comida,
    postre: ["Milhoja","Merengon"]
};
console.log("Desayuno, almuerzo y postre: ");
console.log(comidaYPostre);

