var idade = 22

console.log(`você tem ${idade} anos.`) 

if (idade < 16) {
    console.log(`Não Vota`)
} else if (idade < 18 || idade > 65) {
        console.log(`tem o voto opcional`)
} else {
    console.log('Voto Obrigatorio')
}
