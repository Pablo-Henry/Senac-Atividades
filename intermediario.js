const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 , 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

for (numero of nums) {
    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log('Vermelho_Alaranjado');
        
    } else if (numero % 5 == 0) {
        console.log('Laranja');
        
    } else if (numero % 3 == 0) {
        console.log('Vermelho');

    } else {
        console.log(numero);
        
    }
}