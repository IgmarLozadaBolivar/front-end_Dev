/* Transformación de Arrays */

// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7]
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0
})
console.log(evenNumbers)

// Map
const numbers1 = [1, 2, 3]
const doubleNumbers = numbers1.map((number) => {
    return number * 2
})
console.log(doubleNumbers)

// Filter & Map
const numbers2 = [1, 2, 3, 4, 5, 6, 7]
const numsGreaterThanFive = numbers2
    .map(number => number * 2) // [2, 4, 6, 8, 10, 12, 14]
    .filter(number => number > 5) // [6, 8, 10, 12, 14]
console.log(numsGreaterThanFive)

// Reduce
const numbers3 = [1, 2, 3]
const sum = numbers3.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber
}, 0) // <- el 0 es el valor inicial
console.log(sum)

/* Recibes dos parámetros: 
una lista de palabras words y una palabra word. Primero, 
busca el índice de la palabra en la lista. Después, usa ese índice 
(que será un número) y devuelve todas las palabras de words que 
sean más largas (length) que el número del índice.
Ten en cuenta que la palabra word siempre existirá en el array, 
por lo que no es necesario comprobar si existe o no. */
function palabrasMasLargas(words, word) {
    const indice = words.indexOf(word);
    const longitudIndice = word.length;
    const palabrasMasLargas = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longitudIndice) {
            palabrasMasLargas.push(words[i]);
        }
    }

    return palabrasMasLargas;
}
