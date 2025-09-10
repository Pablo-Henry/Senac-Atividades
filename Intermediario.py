# INTERMEDIÁRIO
# Crie uma lista de números de 1 até 30, percorra essa lista e exiba todos os números, mas substituindo múltiplos de 3 por "Vermelho", múltiplos de 5 por "Laranja" e múltiplos de ambos (3 e 5) por "Vermelho Alaranjado".

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 26, 27, 28,29, 30]

for numero in numeros:
    if numero % 3 == 0 and numero % 5 == 0:
        print('Vermelho-Alaranjado')

    elif numero % 5 == 0:
        print('Laranja')

    elif numero % 3 == 0:
        print('Vermelho')
        
    else:
        print(numero)