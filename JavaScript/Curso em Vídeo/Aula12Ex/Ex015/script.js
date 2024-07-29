function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var fsex = document.getElementsByName('radisex')
    var res = document.querySelector('div#texto')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.getElementById('imagem')

    if (fano.value > ano || fano.value == 0){
        alert('Erro')
    }

    else
    {
        res.innerHTML = (`Idade: ${idade} e 
        Sexo: ${genero}`) 
        res.style.textAlign = 'center'

        if (fsex[0].checked){
            genero = 'Homem'

            if(idade > 10 && idade < 18)
            {
                img.src='Imagens/JovemM.png'
            }
            else if (idade > 18 && idade < 50)
            {
                img.src='Imagens/MediaM.png'
            }
            else if (idade > 50 && idade < 150)
            {
                img.src='Imagens/Idoso.png'
            }
            else
            {
            alert('[Erro] Não temos imagem para idade informada.')
            }
        }
        
        else if (fsex[1].checked) 
        {
            genero = 'Mulher'

            if(idade > 10 && idade < 18)
            {
                img.src='Imagens/JovemF.png'
            }
            else if (idade > 18 && idade < 50)
            {
                img.src='Imagens/MediaF.png'
            }
            else if (idade > 50 && idade < 150)
            {
                img.src='Imagens/idosa.png'
            }
            else
            {
                alert('[Erro] Não temos imagem para idade informada.')
            }
        }

    }
}

console.log(verificar())