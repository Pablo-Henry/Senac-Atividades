// Escreva um programa para gerar o invertido de um número com três algarismos
// (exemplo: o invertido de 498 é 894).

let numero = 267

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

console.log(`Número Original: ${numero} | Número Invertido ${numeroInvertido}`);

