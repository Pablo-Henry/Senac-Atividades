# FÁCIL
# Crie uma lista de cores, e percorra cada elemento de trás pra frente da lista exibindo o índice e o valor


cores = ['vermelho', 'azul', 'laranja', 'preto', 'branco', 'cinza', 'verde', 'amarelo']

for cor in cores[7::-1]: #inicia no fim da lista e percorre de trás pra frente
    print(f'A cor é {cor} e o índice é {cores.index(cor)}') # cores.index(cor) - pega o indice da cor atual