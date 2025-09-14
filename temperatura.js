// Peça ao usuário uma temperatura e a unidade (Celsius ou Fahrenheit). Converta para a outra
// unidade e exiba o resultado. 
// celsius p/ fahrenheit: F = (c × 1,8) + 32
// fahrenheit p/ celsius: C = (F - 32) / 1,8

const prompt = require('prompt-sync')();

temperatura = prompt('Informe a temperatura: ');
parseInt(temperatura)

unidade = prompt('Informe a unidade que deseja: CELSIUS | FAHRENHEIT: ').toLowerCase();

if (unidade == 'celsius') {
    f = (temperatura * 1.8) + 32
    console.log(`Temperatura em Celsius (${temperatura}) convertida para Fahrenheit: ${f}`);
    
} else if (unidade == 'fahrenheit') {
    c = (temperatura - 32) / 1.8
    console.log(`Temperatura em Fahrenheit (${temperatura}) convertida para Celsius: ${c}`);
    
} else{
    throw new Error('Entrada inválida.')  //Exibe uma mensagem de erro.
    
}
