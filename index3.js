let total = 0;
let valor;

do {
  valor = parseFloat(prompt("digite o valor da compra ou 0 para finalizar:"));

  if (isNaN(valor)) {
    alert("dados invalidos. digite um numero");
  } else if (valor > 0) {
    total = (total + valor);
  } else if (valor < 0) {
    alert("valor invalido. digite um numero positivo ou 0 para finalizar");
  }
} while (valor !== 0);

alert(`O total da compra é: R$ ${total.toFixed(2)}`);