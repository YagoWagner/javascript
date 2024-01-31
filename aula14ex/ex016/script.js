function contar(){
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       // window.alert('[ERRO] Faltam dados!')
       res.innerHTML = 'Impossível Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido. Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            // Contagem crescente
           for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
    