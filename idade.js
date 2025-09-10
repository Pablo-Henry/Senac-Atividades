// 2. Verificação de maioridade
// Solicite a idade do usuário e informe se ele é maior de idade (18 anos ou mais) ou menor de idade.

const prompt = require('prompt-sync')();

const idade = prompt('Informe sua idade: ')

if ( idade >= 18 ) {
    console.log('Maior de idade!');
    
} else {
    console.log('Menor de idade!');
    
}