//Crear el array
var min= 1;
var max= 6; 
   const listaPinguinos=[
    {
        name: "Gunter",
        origin: "Adventure Time",
        canFly: false ,
        favoriteFoods1: " ", 
        numberOfFeet:Math.floor(Math.random()* (max-min))+ min,
        sayHello: function () {
            console.log("QUACK!!!");
            } 
    },
    {
        name: "Ramón",
        origin: "Happy Feet",
        canFly: true,
        favoriteFoods2: " ", 
        numberOfFeet:Math.floor(Math.random()* (max-min))+ min,
        sayHello: function () {
            console.log("Estoy encantado de conocerle.");
            } 
           

    },
    {
        name: "Fred",
        origin: "Sitting Ducks",
        canFly: false,
        favoriteFoods3: " ", 
        numberOfFeet:Math.floor(Math.random()* (max-min))+ min,
        sayHello: function () {
            console.log("Hi there!");
            } 
           

    }
    
]

const muestra= listaPinguinos.map((pinguino,index)=>{
    const name = `${pinguino.name} ${pinguino.origin}`; 
    return{
        id: index,
        namePinguno:name
    }

}
)

console.log(muestra)
//Nombre de los pinguinos
for (i=0; i< listaPinguinos.length;i++){
        console.log(`El nombre del pinguino es: ${listaPinguinos[i].name}`)
    }



//Longitud del array
console.log("La longitud del array es " +listaPinguinos.length)



//Filtrar el pinguino que puede volar

for (i=0; i< listaPinguinos.length;i++){
    veri = listaPinguinos[i].canFly
    if(veri!==false){
        console.log(`${listaPinguinos[i].name}, si puede volar`)
    }

}

//Los que tienen más de 2 pies
for (i=0; i< listaPinguinos.length;i++){
    verificar = listaPinguinos[i].numberOfFeet
    if(verificar >2){
        console.log(`${listaPinguinos[i].name}, tiene más de dos pies`)
    }
}

//una nueva propiedad a su pingüino
for (i=0; i< listaPinguinos.length;i++){
    favoriteFoods1=["Mora","Sandia","Mango"];
    favoriteFoods2=["Kiwi","Banano","Mango"];
    favoriteFoods3=["Uvas","Arandano","Mango"];
}
console.log(favoriteFoods1[1])
console.log(favoriteFoods2[1])
console.log(favoriteFoods3[1])

//Cambiar ultimo dato de la lista
favoriteFoods1[2]="Piña"
favoriteFoods2[2]="Piña"
favoriteFoods3[2]="Piña"


//Mostrar comida favorita
for (i=0; i< listaPinguinos.length;i++){
    listaPinguinos[i].favoriteFoods1
    listaPinguinos[i].favoriteFoods2
    listaPinguinos[i].favoriteFoods3
}
console.log(favoriteFoods1)
console.log(favoriteFoods2)
console.log(favoriteFoods3)