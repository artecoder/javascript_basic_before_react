//Ej 1. Extracción de propiedades en variables.
const seresvivos = { humanos: ["rodo","nata"], superheroes: ["batman","superman"]};
let {humanos,superheroes} = seresvivos;
console.log(`\n\rhumanos: ${humanos}`);
console.log(`superheroes: ${superheroes}`);

//Ej 2. También se puede declarar directamente de la variable
const humanos2=seresvivos.humanos;
console.log(`\n\rhumanos (otra vez): ${humanos2}`);

//Ej 3. Asignación de las variables después de declararlas
({humanos,superheroes} = seresvivos);
console.log(`\n\rhumanos (final): ${humanos}`);
console.log(`superheroes (final): ${superheroes}`);
