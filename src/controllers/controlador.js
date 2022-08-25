// mercando con el profe
let producto1 = "arroz"
let producto2 = "leche"
let producto3 = "huevo"
let producto4 = "carne de cerdo"
let producto5 = "pollo"
let producto6 = "galletas"
let producto7 = "panela"
let producto8 = "cafe"
let producto9 = "tapa roja"
let producto10 = "cerveza"
let producto11 = "tomate"
let producto12 = "papas"
let producto13 = "lechuga"
let producto14 = "frijoles"
let producto15 = "aceite"

//Arreglo de datos 
//un arreglo es una variable especial

// 1.arreglo tradicional
let numeros=[1,2,8,9,45]
let nombres=["Juan","Catalina","Mario","Carlos"]
let contagios=[true,false,false,false,true]
//1.1 accediendo a todos los datos (elementos) de una arreglo 
console.log(numeros) 
//1.2 accediendo a un solo elemento del arreglo 
console.log(numeros[3])


// 2. arreglos orientado a objetos arreglos poo
let notas=Array(3.5,2.8,3.9,5)
//1.1 accediendo a todos los datos (elementos) de una arreglo 
console.log(notas)
//1.2 accediendo a un solo elemento del arreglo
console.log(notas[1])


// 3. variables especiales para guardar varios datos de tipos diferentes
//  de tipos diferentes 
// objetos/Variable-atributos
let persona={
    nombre:"Joanna",
    apellidos:["Puerta","Correa"],
    edad:30,
    mama:true
}
// 3.1 accediendo s todos lo sdatos de un objeto 
console.log(persona)
// 3.2 accediendo a un solo atributo del objeto 
console.log(persona.nombre)
//accediendo a un solo atributo de un objeto
console.log(persona.apellidos[0])