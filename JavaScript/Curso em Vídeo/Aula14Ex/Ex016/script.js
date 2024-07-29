function contagem(){
    var come = document.querySelector('input#ini')
    var end = document.querySelector('input#fim')
    var pulo = document.querySelector('input#pas')
    var local = document.getElementById('res')
    
    local.innerHTML = ('Contando: <br>')
    var c = Number(come.value)
    var e = Number(end.value)
    var p = Number(pulo.value)

    if (c <= 0 || e <= 0 || p <=0) {
        alert('[Erro] Valor digitado é inválido!')
    } else { 
        local.innerHTML = ''
        if (c < e) { 
            for(var cont = c; cont <= e; cont = cont + p){
                local.innerHTML += (` ${cont}\u{1F595} `)
            }
        } else {
            for(var cont = c; cont >= e; cont = cont - p){
                local.innerHTML += (` ${cont}\u{1F595}`)
            }
        }
    }
}