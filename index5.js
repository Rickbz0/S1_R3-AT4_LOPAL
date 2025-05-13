let saldo = 1000; // Saldo inicial
let saque;

while (saldo > 0) {
  saque = parseFloat(prompt(`Seu saldo atual é R$ ${saldo.toFixed(2)}. Digite o valor do saque:`));
  if (isNaN(saque) || saque <= 0) {
    alert("Valor invalido. Digite um numero positivo.");
  } else if (saque > saldo) {
    alert("Saldo insuficiente. Tente um valor menor.");
  } else {
    saldo -= saque;
    alert(`Saque de R$ ${saque.toFixed(2)} realizado com sucesso. Saldo restante: R$ ${saldo.toFixed(2)}`);
  }
}

alert("Saldo esgotado. Operaçoes encerradas.");