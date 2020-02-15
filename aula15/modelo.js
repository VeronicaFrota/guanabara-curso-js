function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        alert('Erro: Faltam dados')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)   

        if(i < f) {
            for(let c = i ; c <= f ; c+= p) {       // contagem crescente
                res.innerHTML += `${c} \u{1F596}`
            }
        } else {
            for(let cm = i ; cm >= f ; cm-= p ) {   // contagem regrassiva
                res.innerHTML += `${cm} \u{1F596}`
            }
        }

        res.innerHTML += `\u{1F3C1}`

    }

}
