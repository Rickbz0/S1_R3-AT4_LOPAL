let nome = "";
let sobrenome = "";

while (!nome) {
  nome = prompt("Digite seu primeiro nome:");
  if (!nome) {
    alert("O primeiro nome nao pode ser vazio.");
  }
}

while (!sobrenome) {
  sobrenome = prompt("Digite seu sobrenome:");
  if (!sobrenome) {
    alert("O sobrenome nao pode ser vazio.");
  }
}

alert(`Nome completo: ${nome} ${sobrenome}`);