/* Operadores Logicos */

// Numeros de ejemplo: 67 & 42

a = true;
b = false;

// Operador & (AND)
let resultado1 = a & b;
console.log(resultado1);

let resultado2 = a & a;
console.log(resultado2);

let resultado3 = b & b;
console.log(resultado3);

// Operador || (OR)
let resultado4 = a || b;
console.log(resultado4);

let resultado5 = a || a;
console.log(resultado5);

let resultado6 = b || b;
console.log(resultado6);

// Operador ! (NOT)
let resultado7 = !a;
console.log(resultado7);

let resultado8 = !b;
console.log(resultado8);

// Comprueba si 7 es mayor que 8 y menor que 10
let resultado = 7 > 8 && 7 < 10;
console.log(resultado);

// Tenemos un producto en una tienda. Cuesta 1500 y tenemos un descuento del 25%. Tengo 1150€ en mi cartera. Escribe un código que me diga si puedo comprarlo. No uses paréntesis.
let resultado01 = 1500 * 0.75 <= 1150;
console.log(resultado01);