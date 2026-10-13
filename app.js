// 1. Pedir los 3 números por prompt y guardarlos en variables
let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));
let numero3 = Number(prompt("Ingresa el tercer número:"));

let mensaje = "";

// Validar que sean números
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
  mensaje = "Por favor ingresa solo números válidos.";
} else if (numero1 === numero2 && numero2 === numero3) {
  // 2. Si los tres son iguales
  mensaje = "Los números son iguales: " + numero1 + ", " + numero2 + ", " + numero3;
} else {
  // 3. Identificar mayor, centro y menor
  let mayor, centro, menor;

  if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
    if (numero2 >= numero3) {
      centro = numero2;
      menor = numero3;
    } else {
      centro = numero3;
      menor = numero2;
    }
  } else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
    if (numero1 >= numero3) {
      centro = numero1;
      menor = numero3;
    } else {
      centro = numero3;
      menor = numero1;
    }
  } else {
    mayor = numero3;
    if (numero1 >= numero2) {
      centro = numero1;
      menor = numero2;
    } else {
      centro = numero2;
      menor = numero1;
    }
  }

  // 4. Armar la salida
  mensaje =
    "Mayor a menor: " + mayor + ", " + centro + ", " + menor + "\n" +
    "Menor a mayor: " + menor + ", " + centro + ", " + mayor;
}

// Mostrar por consola
console.log(mensaje);

// Mostrar por el DOM
document.getElementById("resultado").innerText = mensaje;
