//Existen varias notaciones para creación de objetos, además la invocación de variables puede ser antes de invocarla, 
//debido a que primero se cargan estas funciones.
const foo = {bar:3,hello:"world"};
foo2("bar",{hello:"world"});
function foo2(id){
    return {
        name:"dummy",
        id:id,                  
        bar:function(){         
            console.log("bar");
        }
    }   
}
//simplificando la función anterior
function foo3(id){
    return {
        name:"dummy",
        id,
        bar(){
            console.log("bar");
        }
    }
}