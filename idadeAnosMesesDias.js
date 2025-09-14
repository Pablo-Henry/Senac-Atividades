// Solicitar a idade de uma pessoa em dias e informar na tela a idade em anos, meses e dias

const prompt = require('prompt-sync')();

const dias = prompt('Informe sua idade em dias: ')

let diasConta = parseInt(dias)
let anos = 0
let meses = 0

while(true) {
    if (diasConta >= 365 ){
        diasConta = diasConta - 365
        anos += 1
        meses += 12
    } else {
        break
    }
}


console.log(`Idade em Dias: ${dias} | Idade em Anos ${anos} | Idade em Meses: ${meses}`);
