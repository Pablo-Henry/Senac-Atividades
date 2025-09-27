// Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário para
// Km/h. Para tal, multiplique o valor em m/s por 3,6

const prompt = require('prompt-sync')();


console.log('Digite: KM para ver a velocidade em Km/H | Digite: MS para ver a velocidade em m/s');
let condicao = prompt('Informe a unidade que deseja verificar:  ').toUpperCase()

if (condicao == 'KM') {
    let velocidadeEmMs = prompt('Informe a velocidade em Metros por Segundo: ')
    const velocityEmKm = velocidadeEmMs * 3.6
    console.log(`Velocidade em Km/H: ${velocityEmKm} Km/H`);
    
} else if (condicao == 'MS') {
    let velocidadeEmKmh = prompt('Informe a velocidade em Quilômetros por Hora: ')
    const velocityEmMs = velocidadeEmKmh / 3.6
    console.log(`Velocidade em m/s: ${velocityEmMs.toFixed(2)} M/S`);

} else {
    console.error('Unidade inválida');
    
}















