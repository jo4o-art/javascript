function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var bom = document.getElementById('bom')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    hora = 
    
    msg.innerHTML = `Agora são ${hora}:${min}`
    
    if (hora >= 0 && hora < 12) {
        // Bom Dia
        header = document.querySelector('header')
        footer = document.querySelector('footer')
        
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#e2cd9f'
        header.style.color = 'black'
        footer.style.color = 'black'
        bom.innerHTML = 'Bom Dia'
    }
    
    else if (hora >= 12 && hora < 18) {
        // Boa Tarde
        img.src = 'imagens/foto-terde.png'
        document.body.style.background = '#b9846f'
        bom.innerHTML = 'Boa Tarde'
    }
    
    else {
        // Boa Noite
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#515154'
        bom.innerHTML = 'Boa Noite'
    }
}
