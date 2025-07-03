function executarCalculo() {
    let n1 = prompt("Digite o primeiro número:");
    let operacao = prompt("Digite a operação (soma ou subtração):");
    let n2 = prompt("Digite o segundo número:");

    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);

    let resultado = calculo(numero1, numero2, operacao);

    alert("O resultado é: " + resultado);
}

function calculo(a, b, op) {
    if (op === "soma") {
        return a + b;
    } else if (op === "subtração") {
        return a - b;
    } else {
        return "Operação inválida";
    }
}
