const array = [1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8]

// PRIMEIRO BLOCO

let frequencia = {}

const adicionaNaLista = (lista) => {
    for (numero of lista){
    if (numero in frequencia){
        frequencia[numero] += 1

    } else {
        frequencia[numero] = 1
    }
}
    console.log(frequencia);
}

adicionaNaLista(array)

// SEGUNDO BLOCO

let quantidadeRepeticoes = 0
let numeroMaisFrequente = ''


const filtraValorMaisFrequente = (dicionario) => {
    for (chave in dicionario) { 
        if (dicionario[chave] > quantidadeRepeticoes ){
            quantidadeRepeticoes = dicionario[chave]
            numeroMaisFrequente = chave
        } 
}

    console.log(`Número com mais repetições: ${numeroMaisFrequente} | Quantidade de Repetições: ${quantidadeRepeticoes}`);
}


filtraValorMaisFrequente(frequencia)
