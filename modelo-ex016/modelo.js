function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('anoNascimento').value
    var res = document.querySelector('div#res')

    if(formAno.lenght == 0 || formAno > ano) {
        alert('Informação inválida, digite novamente')
    } else {
        var formSex = document.getElementsByName('redsex')
        var idade = ano - Number(formAno.value)
        res.innerHTML = `Idade ${idade}`
    }
    
}
