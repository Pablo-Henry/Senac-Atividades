// 3. Par ou ímpar
// Peça um número inteiro e diga se ele é par ou ímpar (para saber se um número é par, basta saber
// se ele é divisível por 2)

const prompt = require('prompt-sync')();

const numero = prompt('Digite um número: ')

if ( numero % 2 == 0 ) {
    console.log( `O número ${ numero } é par` );
} else {
    console.log( `O número ${ numero } é impar` );
    
}