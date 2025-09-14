// Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

//dividendo - numero que vai ser dividido | divisor - núemero que vai dividir

const prompt = require('prompt-sync')();

const dividendo = prompt('Informe o dividendo: ')

const divisor = prompt('Informe o divisor: ')

if (dividendo > 0) {
    let quociente = dividendo / divisor
    let resto = dividendo % divisor

    console.log(`Quociente: ${quociente} | Resto: ${resto}`);
    
} else {
    throw new Error('NÃO É POSSÍVEL DIVIDIR UM NÚMERO POR ZERO!')
}