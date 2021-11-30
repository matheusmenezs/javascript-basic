function idade(){

    var data = new Date()
    var atual = data.getFullYear()
    var ano = document.getElementById("ano")

    if (ano.value.length == 0 || Number((ano.value) > atual)){
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    }
    else{
        var msg = document.getElementById("msg")
        var selecao = document.getElementsByName("radsex")
        var idade = atual - Number(ano.value)
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')

        if(selecao[0].checked){
            var sexo = "Homem"
        }else if(selecao[1].checked){
            sexo = "Mulher"
        }
        
        if (sexo == "Homem"){
            if (idade <= 12 ){
                img.setAttribute('src', "foto-bebe-m.png")
            }else if (idade > 12 && idade <= 18 ){
                img.setAttribute('src', "foto-jovem-m.png")
            }else if (idade > 18 && idade < 60 ){
                img.setAttribute('src', "foto-adulto-m.png")
            }else{
                img.setAttribute('src', "foto-idoso-m.png")
            } 
        }else{
            if (idade <= 12 ){
                img.setAttribute('src', "foto-bebe-f.png")
            }else if (idade > 12 && idade <= 18 ){
                img.setAttribute('src', "foto-jovem-f.png")
            }else if (idade > 18 && idade < 60 ){
                img.setAttribute('src', "foto-adulto-f.png")
            }else{
                img.setAttribute('src', "foto-idoso-f.png")
            } 
        }
        msg.innerHTML = `${sexo} de ${idade} anos de idade`
        msg.appendChild(img)
    }
       

   
}