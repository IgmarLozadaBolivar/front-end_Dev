/* Metodos y propiedades del Array */

// 1. Uso de length
const str1 = "Hello, World!";
console.log(str1.length);

// 2. Uso de includes()
const str2 = "Hello, World!";
console.log(str2.includes("World"));

// 3. Uso de back ticks o template strings
const name = "John";
const age = 30;
const str3 = `My name is ${name} and I am ${age} years old.`;
console.log(str3);

// 4. Uso de trimStart()
const str4 = "   Hello, World!   ";
console.log(str4.trimStart());

// 5. Uso de trimEnd()
const str5 = "   Hello, World!   ";
console.log(str5.trimEnd()); //

// 6. Uso de replace()
const str6 = "Hello, World!";
console.log(str6.replace("World", "Universe"));

// 7. Uso de slice()
const str7 = "Hello, World!";
console.log(str7.slice(7));

// 8. Uso de split()
const str8 = "Hello, World!";
console.log(str8.split(","));

// 9. Uso de toUpperCase()
const str9 = "Hello, World!";
console.log(str9.toUpperCase());

// 10. Uso de toLowerCase()
const str10 = "Hello, World!";
console.log(str10.toLowerCase());

// 11. Uso de push()
const frutas = ["plátano", "fresa"]
frutas.push("naranja")
console.log(frutas)

// 12. Uso de pop()
const frutas1 = ["plátano", "fresa"]
frutas1.push("naranja")
console.log(frutas1)

// 13. Uso de unshift()
const frutas3 = ["plátano", "fresa", "naranja"]
frutas3.unshift("manzana")
console.log(frutas3)

// 14. Uso de shift()
const frutas2 = ["plátano", "fresa"]
frutas2.push("naranja")
console.log(frutas2)

// 15. Uso de concat()
const numbers = [1, 2, 3]
const numbers2 = [4, 5]
const allNumbers = numbers.concat(numbers2)
console.log(allNumbers)

/* En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado: */

function procesarPedido(pedido) {
    const cliente = pedido.shift(); // Sacamos el nombre del cliente del array
    pedido.unshift("bebida"); // Añadimos "bebida" al principio del array
    pedido.push(cliente); // Añadimos el nombre del cliente al final del array
    return pedido; // Devolvemos el array modificado
}