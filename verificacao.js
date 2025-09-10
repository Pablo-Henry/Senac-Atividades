// 1. Verificação de número positivo ou negativo
// Peça ao usuário que digite um número e informe se ele é positivo, negativo ou zero.

const prompt = require('prompt-sync')();

const numero = prompt('Digite um número: ')

if (numero > 0) {
    console.log( `O número ${numero} é positivio` );
    
} else if (numero < 0) {
    console.log( `O número ${numero} é negativo` );
    
} else {
    console.log( `O número ${numero} é igual a zero` );
}