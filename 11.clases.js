//Ej 1 
class Comida { popular="pizza"}
class Fruta extends Comida{
    popular="kiwi";
    queEsPopular= () => {console.log(this.popular)};
}
const fruta = new Fruta();
fruta.queEsPopular();

//En React se usan React Hooks los cuales no necesitan usar el método bind()
