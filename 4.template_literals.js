//ej. 1 ejemplo simple
const name = "artecoder";
// Tener en cuenta que se debe usar la tilde diacrítica,
// que es diferente a la comilla simple
//
// Comilla simple: '
// Comilla tilde diacrítica: `
console.log(`Hola, soy ${name}`);

//ej. 2. funciones dentro de literales
//1. Definimos la función
//

const getRandomIndex = max => Math.floor(Math.random()*Math.floor(max))
const comida = ["pizza","lasagna","lentejas"];
const getFood = index => comida[index];
console.log(`Hola, soy ${name} y tengo hambre de ${getFood(getRandomIndex(comida.length))}`);
