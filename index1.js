let numero;

do {
  numero = parseFloat(prompt("Digite um numero positivo:"));
} while (isNaN(numero) || numero <= 0);

alert(`Voce digitou o numero valido: ${numero}`);