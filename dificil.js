const array = [1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8]

// PRIMEIRO BLOCO DE CÓDIGO

let frequencia = {}

for (numero of array){
    if (numero in frequencia){
        //ADICIONA O NÚMERO E O SEU VALOR (SUA QUANTIDADE DE REPETIÇÕES) AO DICIONÁRIO 
        frequencia[numero] += 1 //VERIFICA SE O NÚMERO ESTA PRESENTE NO DICIONÁRIO, CASO ESTEJA E O NÚMERO APERAÇA MAIS VEZES ADICIONA MAIS 1 A SUA CONTAGEM

    } else {
        frequencia[numero] = 1 //VERIFICA SE O NÚMERO ESTA PRESENTE NO DICIONÁRIO, CASO ESTEJA E O NÚMERO NÃO SE REPETE MANTÉM SEU VALOR 
    }
}
console.log(frequencia);

// SEGUNDO BLOCO DE CÓDIGO

let quantidadeRepeticoes = 0 //INICIALIZANDO A QUANTIDADE DE REPETIÇÕES EM ZERO PARA RECEBER O VALOR POSTERIORMENTE
let numeroMaisFrequente = '' // INICIALIZANDO O NUMERO MAIS FREQUENTE COMO VAZIO/NULO PARA RECEBER O VALOR POSTERIORMENTE


//PERCORRENCO O DICIONÁRIO
for (chave in frequencia) { 
    if (frequencia[chave] > quantidadeRepeticoes ){ // VERIFICANDO SE O VALOR DA CHAVE É MAIOR DO QUE A QUANTIDADE DE REPETIÇÕES
        quantidadeRepeticoes = frequencia[chave] //CASO O VALOR SEJA MAIOR ELE SERÁ ATRIBUIDO A VARIÁVEL (quatidadeDeRepeticoes)
        numeroMaisFrequente = chave // ATRIBUI A CHAVE QUE POSSUI MAIS REPETIÇÕES NA VARIÁVEL numeroMaisFrequente
    } 
}


console.log(`Número com mais repetições: ${numeroMaisFrequente} | Quantidade de Repetições: ${quantidadeRepeticoes}`);




