// 4. Classificação de nota
// Solicite uma nota de 0 a 10 e classifique:
//  Aprovado (nota ≥ 7)
//  Recuperação (5 ≤ nota < 7)
//  Reprovado (nota < 5)

 const notas = [6, 9.5, 8, 5.5, 8] //7.4

const soma = 0

for (let nota of notas) {
    soma += nota
}

const media = soma /notas.length

if ( media >= 7 ) {
    console.log( `Aprovado! Sua média é de: ${media}` );
} else if ( media >= 5 && media < 7) {
    console.log( `Recuperação! Sua média é de: ${media}` );
} else {
    console.log( `Reprovado! Sua média é de: ${media}` );
}
