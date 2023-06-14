/* Bucles While y metodos*/

// Bucle While
let cuentaAtras = 10;

while (cuentaAtras > 0) {
    console.log(cuentaAtras);
    cuentaAtras = cuentaAtras - 1;
}
console.log('¡Despegue! 🚀');

// Uso del Break
let cuentaAtras1 = 10

while (cuentaAtras1 > 0) {
  console.log(cuentaAtras1)
  cuentaAtras1 = cuentaAtras1 - 1

  if (cuentaAtras1 === 5) {
    break
  }
}
console.log('¡Ha Despegado! 🚀');

// Ejercicio 
let drinkCoffee = 0

while (drinkCoffee < 10) {
  drinkCoffee = drinkCoffee + 1
  
  if (drinkCoffee === 8) { break }
  if (drinkCoffee === 5) { continue }

  console.log('Café')
}