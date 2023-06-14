/* Ordenamiento de Arrays */

// Sort
let numeros = [5, 10, 2, 25, 7]
numeros.sort()
console.log(numeros)

// ToSorted
let numeros1 = [5, 10, 2, 25, 7]
let numerosOrdenados = numeros1.toSorted((a, b) => {
  return a - b
})
console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numeros1)

// ...
let numeros2 = [5, 10, 2, 25, 7]
const copiaNumeros = [...numero2s]
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b)
console.log(copiaNumeros) // [2, 5, 7, 10, 25]
console.log(numeros2)

/* Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto. 
Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.
Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].
Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número. */
function ordenarPorValorAbsoluto(listaNumeros) {
  listaNumeros.sort(function(a, b) {
    return Math.abs(a) - Math.abs(b);
  });

  return listaNumeros;
}
