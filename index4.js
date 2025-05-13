let nome = "";
let sobrenome = "";

while (nome === "") {
  nome = prompt("digite seu primeiro nome:");
  if (nome === "") {
    alert("o primeiro nome não pode ser vazio");
  }
}

while (sobrenome === "") {
  sobrenome = prompt("digite seu sobrenome:");
  if (sobrenome === "") {
    alert("o sobrenome não pode ser vazio");
  }
}

alert(`nome completo: ${nome} ${sobrenome}`);