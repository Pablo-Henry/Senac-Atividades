// Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
// seu raio e sua altura.
// V = π * r² * h
// raio = 4 | altura = 10


let raio = 4
let altura = 10
let pi = 3.14159

let calculaVolume = pi * (raio ** 2) * altura

console.log(`O volume da lata de óleo é de aproximadamente: ${calculaVolume.toFixed(2)}cm³ (centímetros cúbicos)`);


