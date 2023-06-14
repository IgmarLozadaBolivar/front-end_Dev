/* Condicionales */

// Condicional If
const edad = 18

if (edad >= 18) {
    console.log('Eres mayor de edad');
}

// Condicional If & Else
const edad1 = 17

if (edad1 >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// Condicional If, Else if & Else
const edad2 = 17

if (edad2 >= 18) {
    console.log('Eres mayor de edad');
} else if (edad2 >= 16) {
    console.log('Eres casi mayor de edad');
} else {
    console.log('Eres menor de edad');
}

//Condicionales Anidadas (if (if & else) else)
const edad3 = 17
const tieneCarnet = true

if (edad3 >= 18) {
    if (tieneCarnet) {
        console.log('Puedes conducir')
    } else {
        console.log('No puedes conducir')
    }
} else {
    console.log('No puedes conducir')
}