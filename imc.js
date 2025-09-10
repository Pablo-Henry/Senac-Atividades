// 6. Calculadora de IMC
// Solicite o peso (kg) e a altura (m) do usuário, calcule o IMC e classifique:
//  Abaixo de 18.5: Abaixo do peso
//  18.5 a 24.9: Peso normal
//  25 a 29.9: Sobrepeso
//  30 ou mais: Obesidade 

const prompt = require('prompt-sync')();

const altura = prompt('Informe sua Altura: ')
const peso = prompt('Informe seu peso: ')

const imc = peso / ( altura * altura )

if (imc >= 30) {
    console.log(`Obesidade! Seu IMC é de: ${imc.toFixed(1)}`);

} else if (imc < 29.9 && imc > 25) {
    console.log(`Sobrepeso Seu IMC é de: ${imc.toFixed(1)}`);

} else if (imc < 24.9 && imc > 18.5) {
    console.log(`Peso Normal! Seu IMC é de: ${imc.toFixed(1)}`);

} else {
    console.log( `Abaixo do Peso! Seu IMC é de: ${imc.toFixed(1)}` );
}