let saldo = 1000; // Saldo inicial
let saque;

while (saldo > 0) {
  saque = parseFloat(prompt(`seu saldo atual é R$ ${saldo.toFixed(2)} digite o valor do saque:`));
  if (isNaN(saque) || saque <= 0) {
    alert("valor invalido. digite um numero positivo");
  } else if (saque > saldo) {
    alert("saldo insuficiente. tente um valor menor");
  } else {
    saldo = (saldo - saque);
    alert(`saque de R$ ${saque.toFixed(2)} realizado com sucesso, saldo restante: R$ ${saldo.toFixed(2)}`);
  }
}

alert("saldo esgotado");