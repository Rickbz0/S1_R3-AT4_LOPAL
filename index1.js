let numero;

do {
  numero = parseFloat(prompt("digite um numero positivo:"));
} while (isNaN(numero) || numero <= 0);

alert(`voce digitou um numero valido: ${numero}`);