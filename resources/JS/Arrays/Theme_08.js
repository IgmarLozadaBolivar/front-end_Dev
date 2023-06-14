/* Algoritmos */

// Encontrar numero mayor
function findMaxAlgorithm(array) {
    let max = array[0] // recuperamos el primer elemento del array

    // recorremos el array desde el segundo elemento
    for (let i = 1; i < array.length; i++) {
        // ¿es el elemento actual mayor que el máximo?
        if (array[i] > max) {
            // si es así, lo guardamos como nuevo máximo
            max = array[i]
        }
    }

    // devolvemos el máximo número que hemos encontrado
    return max;
}

// Busqueda binaria
function findNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true
        }
    }

    return false
}

// Implementacion de la busqueda binaria
function busquedaBinaria(array, elemento) {
    let index = 0 // primer elemento del array
    let final = array.length - 1 // último elemento del array a buscar

    // mientras el índice sea menor o igual que el final
    // seguiremos buscando
    while (index <= final) {
        // calculamos la mitad del array
        // como puede ser impar, usamos Math.floor para redondear hacia abajo
        const mitad = Math.floor((index + final) / 2)

        // si el elemento de la mitad es igual al elemento que estamos buscando
        // entonces hemos encontrado el elemento
        if (array[mitad] === elemento) {
            return mitad
        } else if (array[mitad] < elemento) {
            // si el elemento de la mitad es menor que
            // el elemento que estamos buscando
            // entonces tenemos que buscar en la mitad derecha
            index = mitad + 1
        } else {
            // si el elemento de la mitad es mayor que
            // el elemento que estamos buscando
            // entonces tenemos que buscar en la mitad izquierda
            final = mitad - 1
        }
    }

    // si llegamos hasta aquí, es que no hemos encontrado el elemento
    // devolvemos -1, para indicar que no se ha encontrado
    return -1
}

/* En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. 
Por suerte, no hay dos libros con el mismo número de páginas.
Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de 
dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas. */
function encontrarMinMaxPaginas(paginas) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < paginas.length; i++) {
        if (paginas[i] < paginas[minIndex]) {
            minIndex = i;
        }
        if (paginas[i] > paginas[maxIndex]) {
            maxIndex = i;
        }
    }

    return [minIndex, maxIndex];
}
