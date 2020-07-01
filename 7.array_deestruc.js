//Ejemplo 1. 
const [fruta,verdura] = ["fresa","pepino","pizza","alitas"];
console.log(`Fruta: ${fruta}`);

//En la declaración de const y array puede tambien saltarse valores
//Ejemplo 2.
const[fruta2,,comida2]=["fresa","pepino","pizza","alitas"];
console.log(`Comida: ${comida2}`);

//Usando ... el cual lo veremos en los siguientes ejercicios
//Ejemplo 3.
const[fruta3,verdura2,...comidas] =["fresa","pepino","pizza","alitas"];
console.log(`Comidas: ${comidas}`);