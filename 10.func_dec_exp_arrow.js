//Ej. 1 de declaración de funciones.
function getComida(index){
    const comida=["pizza","alitas"];
    return comida;
}
//Ej 2 expresión de funciones
const getComida2=function (index){
    const comida=["pizza","alitas"];
    return comida;
}
//Ej 3. arrow function
const getFood3 = (index) => {
    const comida=["pizza","alitas"];
    return comida;   
}
//Ej 4. arrow function, si solo se necesita un parámetro se pueden quitar los paréntesis
const getFood4 = index => {
    const comida=["pizza","alitas"];
    return comida;   
}
//Ej 5. arrow function, si no tiene parámetros debe incluir paréntesis
const getFood5 = () => {
    const comida=["pizza","alitas"];
    return comida;   
}
//Ej 6. arrow function, puede realizar retorno sin corchetes. (retorno implícito).
const getFood6 = (index) => ["pizza"][index];