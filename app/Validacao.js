function verificaChuteValido(){
    const numero =+chute
    if(chuteInvalido(numero)){
        console.log("Valor Invalido")
    }
    if(numeroMaiorOuMenorQueOValor(numero)){
        console.log("Valor Invalido: O numero secreto precisa estar entre ${menorValor} e ${maiorValor")
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValor(numero){
    return numero > maiorValor || numero < menorValor
}