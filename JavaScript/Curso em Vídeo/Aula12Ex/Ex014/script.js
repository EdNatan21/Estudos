function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML =`Agora são ${hora} horas`

    if(hora >= 0 && hora < 12 ){
        img.src = 'Imagens/Manha.png'
        document.body.style.background = '#e2cd9f'
    } 
    else if (hora >= 12 && hora < 18){
        img.src = 'Imagens/Tarde.png'
        document.body.style.background = '#ff672bc5'
    }
    else{
        img.src = 'Imagens/Noite.png'
        document.body.style.background = '#515154'
    }
}


