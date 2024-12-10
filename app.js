// Importação da biblioteca para entrada de dados
const prompt = require("prompt-sync")();

// Função para calcular o preço final
function calculaPrecoFinal(preco, aliquota) {
    return preco + (preco * (aliquota / 100));
}

// Entrada de dados pelo usuário
let produto = prompt("Digite o produto: ");
let preco = Number(prompt("Digite o preço: "));
let imposto = Number(prompt("Digite o imposto (%): "));

// Cálculo do preço final
let precofinal = calculaPrecoFinal(preco, imposto);

// Saída formatada
console.log(`O preço final do produto "${produto}" já com imposto é de R$${precofinal.toFixed(2)}.`);
