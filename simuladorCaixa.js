// Solicite um valor a ser sacado e informe quantas notas de 100, 50, 20, 10, 5 e 2 serão entregues.
// (Use divisões e restos.) 

const prompt = require('prompt-sync')()

let notas100 = 0
let notas50 = 0
let notas20 = 0
let notas10 = 0
let notas5 = 0
let notas2 = 0

let saque = prompt('Informe o valor que deseja Sacar: ')

parseInt(saque)

//Omitindo os valores do for pois não são essenciais para este exercício; valores let i == 0 ; i++
for ( ; saque >= 2;  ) {
    if (saque >= 100) {
        saque = saque - 100
        notas100 += 1

    } else if (saque >= 50) {
        saque = saque - 50
        notas50 += 1

    } else if (saque >= 20) {
        saque = saque - 20
        notas20 += 1

    } else if (saque >= 10) {
        saque = saque - 10
        notas10 += 1

    } else if (saque >= 5) {
        saque = saque - 5
        notas5 += 1

    } else if (saque >= 2) {
        saque = saque - 2
        notas2 += 1
        
    }
}

if (saque >= 1) {
    console.log(`Valor Restante: ${saque}`);
    
}

console.log('Notas 100:', notas100);
console.log('Notas 50:', notas50);
console.log('Notas 20:', notas20);
console.log('Notas 10:', notas10);
console.log('Notas 5:', notas5);
console.log('Notas 2:', notas2);


