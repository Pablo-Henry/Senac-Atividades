// Dado os três lados de um triângulo determinar o perímetro do mesmo. 

const prompt = require('prompt-sync')();

let lados = []

while ( lados.length < 3 ) {
    let dados = prompt('Informe os lados do triângulo: ')
    lados.push(parseFloat(dados))
}

console.log( `\nLados do triangulo: ${ lados } \n` );


let perimetro = 0

for ( let lado of lados ) {
    perimetro += lado
}

console.log(`O perímetro do triângulo é de: ${ perimetro.toFixed(2) }cm²`);


