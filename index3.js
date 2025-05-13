let total = 0;
let valor;

do {
  valor = parseFloat(prompt("Digite o valor da compra (ou 0 para finalizar):"));
  if (!isNaN(valor) && valor > 0) {
    total += valor;
  } else if (valor < 0) {
    alert("Valor invalido. Digite um numero positivo ou 0 para finalizar.");
  }
} while (valor !== 0);

alert(`O total da compra é: R$ ${total.toFixed(2)}`);