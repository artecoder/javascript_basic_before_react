//ej 1 función map
const fruts = ["pera","mora"];
const dobleFruts = fruts.map( f => `${f}${f}`);
console.log(dobleFruts);

//ej 2 función filter
const arve = [{name: "rodo", sex:"m"},
              {name: "nata", sex:"f"}];
const mujer = arve.filter(p => p.sex==="f");
console.log(mujer);

//ej 3 función findIndex
const frutsIndex = ["melon","fresa","kiwi"];
console.log(frutsIndex.findIndex(f => f == "fresa"));

//ej 4 función find
const arve2 = [{id:1, name: "rodo", sex:"m"},
               {id:2, name: "nata", sex:"f"}];
const logUserInfo = (id) => {
    console.log(arve2.filter(f => f.id=== id));
}
logUserInfo(1);