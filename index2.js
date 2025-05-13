let soma = 0;
let contador = 0;
let nota;

do {
  nota = parseFloat(prompt("Digite uma nota entre 0 e 10 ou um numero negativo para finalizar:"));
  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    soma += nota;
    contador++;
  } else if (nota >= 0) {
    alert("Nota invalida Digite um valor entre 0 e 10.");
  }
} while (nota >= 0);

if (contador > 0) {
  let media = soma / contador;
  alert(`A media das notas é: ${media.toFixed(2)}`);
} else {
  alert("Nenhuma nota valida foi inserida.");
}