// 5. Login simples
// Peça um nome de usuário e uma senha. Se forem "admin" e "1234", exiba "Acesso concedido".
// Caso contrário, exiba "Acesso negado". 

const prompt = require('prompt-sync')()

const userAdmin = 'admin'

const passwordAdmin = 1234

const user = prompt('Digite seu Usuário: ').toLowerCase()

const senha = parseInt(prompt('Digite sua Senha: '))


if (senha == passwordAdmin && user == userAdmin) {
    console.log('Acesso concedido!');
} else {
    console.log('Acesso Negado!');
}