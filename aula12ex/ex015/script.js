function carregar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')

    txtano.setAttribute('value', ano)
    txtano.setAttribute('max', ano)
}

function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] verifique os dados e tente novamente!')
    }

    else {
        var fsex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/bebe-homem.png')
            }

            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/foto-homem-jovem.png')
            }

            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/homem-adulto.png')
            }

            else {
                // Idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }

        }

        else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-mulher.png')
            }

            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-mulher-jovem.png')
            }

            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            }

            else {
                // Idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}