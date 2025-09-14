// Peça um ano e diga se ele é bissexto ou não. (Dica: um ano é bissexto se for divisível por 4, mas
// não por 100, exceto se também for divisível por 400.) 

const prompt = require('prompt-sync')();

const ano = prompt('Infome um ano: ')

if ( ano % 4 == 0 && ano % 100 != 0 || ano %400 == 0 ) {
    console.log(`O ano: ${ ano } é Bissexto`);
} else {
    console.log(`O ano: ${ ano } não é Bissexto`);
}
