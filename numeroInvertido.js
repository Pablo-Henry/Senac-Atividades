// Escreva um programa para gerar o invertido de um número com três algarismos
// (exemplo: o invertido de 498 é 894).

const prompt = require('prompt-sync')();

let numero = prompt('Informe um número entre 100 e 999: ')

if (numero > 99) {
    //Divide o número por 10 e pega seu resto. resultado da divisão = 490 | resto = 8
    let ultimoNum = numero % 10
    console.log(`Ultimo número: ${ultimoNum}`);

    //remove o ultimo número do valor | ex: 498 - 8
    let removeUltimonum = numero - ultimoNum

    //remove a centena para pegarmos o número do meio | 490 / 10 -> Resultado: 49
    let removeCentena = removeUltimonum / 10

    //Divide o número por 10 e pega seu resto. Resultado: 40 | Resto: 9
    let numMeio = removeCentena % 10 //49 / 10
    console.log(`Número do meio: ${numMeio}`);

    //Realiza uma divisão inteira para pegar o primeiro número. Resultado: 4.94 | Resultado inteiro 4 (Math.floor - retorna a divisão inteira)
    let primeiroNum = Math.floor(numero / 100)
    console.log(`Primeiro número: ${primeiroNum}`);

    let numeroInvertido = (ultimoNum * 100) + (numMeio * 10) + primeiroNum

    let numeroInvertidoFormat = String(numeroInvertido).padStart(3, '0')

    console.log(`Número Original: ${numero} | Número Invertido ${numeroInvertidoFormat}`);

} else {
    throw new Error ('NÚMERO INVÁLIDO')
    
}

// .padStart(3, '0'): Este método de string verifica se a string tem o comprimento de 3 caracteres. Se não tiver, ele adiciona o caractere '0' (o segundo argumento) no início até atingir o comprimento de 3.

// Resultado: "1" se torna "001"

