/* Iteracion en Arrays */

// While
let frutas = ['🍎', '🍌', '🍓']
let i = 0 // lo usaremos como índice

while (i < frutas.length) {
    console.log(frutas[i]) // imprime el elemento en la posición i
    i++ // incrementamos el índice en 1 para la siguiente iteración
}

// For
let frutas1 = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutas1.length; i++) {
    console.log(frutas1[i]) // imprime el elemento en la posición i
}

// For of
let frutas3 = ['🍎', '🍌', '🍓']

for (let fruta of frutas3) {
    console.log(fruta) // imprime el elemento en la posición i
}

// Metodo array forEach()
let frutas4 = ['🍎', '🍌', '🍓']

frutas4.forEach(function (fruta, index, originalArray) {
    console.log(fruta) // imprime el elemento en la posición i
})

// Function Arrow o Flecha
let frutas5 = ['🍎', '🍌', '🍓']

frutas5.forEach((fruta) => {
    console.log(fruta) // imprime el elemento en la posición i
})

// Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que quieras para solucionarlo.

function sumaNumerosPares(lista) {
    let suma = 0;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            suma += lista[i];
        }
    }

    return suma;
}
