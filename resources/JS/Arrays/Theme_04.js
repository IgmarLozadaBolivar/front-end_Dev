/* Búsqueda en Arrays con sus métodos */

// IndexOf
const emojis = ['✨', '🥑', '😍']
const posicionCorazon = emojis.indexOf('😍')
console.log(posicionCorazon)

// Includes
const emojis1 = ['✨', '🥑', '😍']
const posicionCorazon1 = emojis1.indexOf('😍')
console.log(posicionCorazon1)

// Some
const emojis2 = ['✨', '🥑', '😍']
const posicionCorazon2 = emojis2.indexOf('😍')
console.log(posicionCorazon2)

// Every
// ¿Todos los emojis son felices?
const emojis3 = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis3.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false
// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false
// ¿Todos los strings son mayores a 3 caracteres?
const names = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true

// Find
const numbers1 = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers1.find(number => number < 0)
console.log(firstNegativeNumber)

// FindIndex
const numbers2 = [13, 27, 44, -10, 81]
// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers2.findIndex(number => number < 0)
console.log(firstNegativeNumberIndex) // -> 3
// ahora puedes usar el índice para acceder al elemento
console.log(numbers2[firstNegativeNumberIndex]) // -> -10


//Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".
function todasTerminanConA(arrayPalabras) {
    for (let i = 0; i < arrayPalabras.length; i++) {
        if (arrayPalabras[i][arrayPalabras[i].length - 1].toLowerCase() !== 'a') {
            return false;
        }
    }
    return true;
}
