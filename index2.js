let soma = 0;
let quantidade = 0;
let nota;

do {
  nota = parseFloat(prompt("digite uma nota entre 0 e 10 ou um numero negativo para finalizar:"));
  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    soma = (soma + nota);
    quantidade++;
  } else if (nota >= 0) {
    alert("nota invalida digite um valor entre 0 e 10");
  }
} while (nota >= 0);

if (quantidade > 0) {
  let media = soma / quantidade;
  alert(`a media das notas é: ${media.toFixed(2)}`);
} else {
  alert("nenhuma nota valida foi inserida");
}