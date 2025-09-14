// Ler um número inteiro e exibir o seu sucessor.

const prompt = require('prompt-sync')();

while(true) {
    console.log('Deseja saber o número sucessor de outro? \n');
    let escolha = prompt('S - para continuar | N - para sair: ').toLowerCase()

    if (escolha == 's') {
        let numero = prompt('Digite o número que deseja saber qual é o seu sucessor: ')
        let sucessor = parseInt(numero) + 1
        
        console.log(`\nO número sucessor do número ${numero} é o número ${sucessor} \n`);

    } else if (escolha == 'n') {
        console.log('Operação Encerrada...');
        break

    } else {
        console.error('Opção Inválida!') 
        break
    }
}