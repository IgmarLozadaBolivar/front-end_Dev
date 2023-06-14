/* Bucles For */

// Incrementacion
for (let number = 1; number <= 10; number++) {
    console.log(number)
}

// Iteracion al reves
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log('¡Despegue 🚀!')
    } else {
        console.log('Faltan ' + i + ' segundos')
    }
}

// Continue & Break
for (let i = 0; i < 10; i++) {
    const esPar = i % 2 === 0
    if (esPar) {
        continue
    }

    // Solo mostramos este consola.log si es impar
    console.log(i)

    // Salimos del bucle al llegar al 7
    if (i === 7) {
        break
    }
}

// For anidados
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const resultado = i * j
        console.log(i + ' x ' + j + ' = ' + resultado)
    }
}

// Ejercicio
for (let i = 0; i < 10 && i !== 3; i++) {
    console.log('Hola');
}