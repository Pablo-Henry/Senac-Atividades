# DIFICIL
# Dada um Lista de números com alguns valores repetidos, percorra a lista contando os números que mais se repetem adicionando os mesmo em um dicionário (Ex: 1: 5 - o número 2 teve 5 repetições) e exiba o número que mais se repete no dicionário
# Array: nums = [1, 1, 1, 1, 1, 2, 2, 4, 4, 5, 6, 7, 8, 6, 4, 4, 3]

# Adiciona os números em um dicionario e conta quantas vezes eles aparecem
nums = [1, 1, 1, 1, 1, 2, 2, 4, 4, 5, 6, 7, 8, 6, 4, 4, 3]

conjuntoNumeros = {}

for numero in nums:
    if numero in conjuntoNumeros:
        conjuntoNumeros[numero] += 1
    else:
        conjuntoNumeros[numero] = 1

# Pega o dicionário percorre cada elemento verificando qual tem o valor mais alto de repetições
numero_mais_frequente = ''
maior_contagem = 0

# Percorremos os itens do dicionário (chave, valor)
for numero, contagem in conjuntoNumeros.items():
    if contagem > maior_contagem:
        maior_contagem = contagem
        numero_mais_frequente = numero

print(f"O número que mais se repete é: {numero_mais_frequente}")
print(f"Ele se repete {maior_contagem} vezes.")