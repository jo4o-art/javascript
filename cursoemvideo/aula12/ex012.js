var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora}:00 Horas`)

if (hora < 12 && hora >= 5) {
    console.log(`Bom Dia!`)
}

else if (hora >= 12 && hora <= 17) {
    console.log(`Boa Tarde!`)
}

else if (hora > 17 && hora < 24) {
    console.log(`Boa Noite!`)
}

else {
    console.log(`Boa Madrugada!`)
}