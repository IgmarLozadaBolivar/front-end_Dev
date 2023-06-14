/* Condiciones o bucles con Switch */

// Switch
switch (expresión) {
    case valor1:
        // código a ejecutar si la expresión coincide con valor1
        break

    case valor2:
        // código a ejecutar si la expresión coincide con valor2
        break
    default:
        // código a ejecutar si la expresión no coincide con ningún valor
        break
}

// New Date() & GetDay
const dia = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
    case 0:
        console.log("¡Hoy es domingo! 😴")
        break
    case 1:
        console.log("¡Nooo, es lunes! 😢")
        break
    case 2:
        console.log("¡Hoy es martes! 🥵")
        break
    case 3:
        console.log("¡Hoy es miércoles! 🤓")
        break
    default:
        console.log("Se acerca el fin de! 🚀")
        break
}

// Variable
let edad = 25;

switch (true) {
    case (edad >= 18 && edad < 25):
        console.log("Eres mayor de edad y eres joven");
        break;
    case (edad >= 25 && edad < 40):
        console.log("Eres mayor de edad y estás en plena madurez");
        break;
    case (edad >= 40):
        console.log("Eres mayor de edad y estás en la mejor edad");
        break;
    default:
        console.log("Eres menor de edad");
}

// Ejercicio
switch (day) {
    case 0:
        console.log('Hoy es Domingo')
    case 1:
        console.log('Hoy es Lunes')
    case 2:
        console.log('Hoy es Martes')
    default:
        console.log('Es otro día')
}