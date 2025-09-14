// ler um array de trás pra frente e exibir o indice e seu valor

const cores = ['vermelho', 'azul', 'laranja', 'preto', 'branco', 'cinza', 'verde', 'amarelo']

for (let i = cores.length - 1;  i >= 0 ; i --) {
    console.log(`Indice: ${i} | Cor: ${cores[i]}`);
}
