function contar() {
    var ini = document.getElementById('txti') 
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //alert('[ERRO] Porfavor verifique os dados e tente novamente')
    } else {
        res.innerHTML = '<p>Contando: </p>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f) { // Contagem crescente
            for( var c = i; c <= f; c += p) {
                res.innerHTML += `<strong>${c} ➡️ </strong>`
            }
        } else { // Contagem regressiva
            for( var c = i; c >= f ; c -= p) {
                res.innerHTML += `<strong>${c} ➡️ </strong>`
            }
            
        }
        res.innerHTML += '🏁'
    }
}