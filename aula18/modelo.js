let num = document.querySelector('input#fnumero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text += `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let qtdNumero = valores.length
        let soma = 0
        let media = 0
        let maiorValor = valores[0]
        let menorValor = valores[0]
        for(pos in valores ) {

            soma += valores[pos]

            if(valores[pos] > maiorValor) {
                maiorValor = valores[pos]
            }

            if(valores[pos] < menorValor) {
                menorValor = valores[pos]
            }
        } 
        media = soma / qtdNumero

        /*let media = */

        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${qtdNumero} números cadastrados <br>`
        res.innerHTML += `O maior valor foi ${maiorValor}<br>`
        res.innerHTML += `O menor valor foi ${menorValor}<br>`
        res.innerHTML += `A soma entre os valores foi ${soma}<br>`
        res.innerHTML += `A média entre os valores foi ${media}`
    }
}

function limpar() {
    res.innerHTML = ''
    let item = document.createElement('option')
    item.text = ''
}