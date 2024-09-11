const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumero()

function gerarNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

const ElementMenor = document.getElementById("menor-valor")
ElementMenor.innerHTML = menorValor
const ElementMaior = document.getElementById("maior-valor")
ElementMaior.innerHTML = maiorValor
