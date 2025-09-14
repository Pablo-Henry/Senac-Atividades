// Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

// Fórmula área: A = π * r**2
// Fórmula perímetro: P = 2 * π * r

const prompt = require('prompt-sync')();

pi = 3.14159
const raio = prompt('Informe o Raio da circunferência: ')

const area = pi * ( raio ** 2 ) // CALCULA ÁREA, RAIO ELEVADO A 2 x PI
const perimetro = pi * (raio * 2) // CALCULA PERÍMETRO, RAIO x 2 x PI

console.log(` A área da circunferência é de ${area.toFixed(2)}cm² `);
console.log(` O perímetro da circunferência é de ${perimetro.toFixed(2)}cm² `);





