function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = '../modelo/img/manha.png'
        document.body.style.background = '#7f7162'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '../modelo/img/tarde.png'
        document.body.style.background = '#fd8e00'
    } else {
        img.src = '../modelo/img/noite.png'
        document.body.style.background = '#043c40'
    }
}
