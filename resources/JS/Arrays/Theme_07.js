/* Creacion de Matrices */

// Matriz
const matriz = [
    [1, 2, 3],
    [4, 5, 6]
]

// Acceso
let numero = matriz[1][2]
console.log(numero)

// Iteracion
for (let i = 0; i < matriz.length; i++) { // {1}
    for (let j = 0; j < matriz[i].length; j++) { // {2}
        console.log(matriz[i][j])
    }
}
matriz.forEach((fila, filaIndex) => {
    fila.forEach((elemento, columnaIndex) => {
        console.log('Fila ' + filaIndex)
        console.log('Columna ' + columnaIndex)
        console.log('Elemento ', elemento)
        console.log('')
    })
})