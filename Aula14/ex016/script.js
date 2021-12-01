function contar(){
    var ini = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var pas = document.getElementById("pas")
    var res = document.getElementById("res")

    var inicio = Number(ini.value)
    var final = Number(fim.value)
    var passo = Number(pas.value)
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ){
        res.innerHTML = "Impossível contar"
        window.alert("Impossível contar, digite o Início")
    }else if(passo == 0){
        window.alert("Passo inválido, verifique os dados")
    }
    else{  
        res.innerHTML = 'Contando'
        if(inicio < final){        
            for(var i = inicio; i <= final; i += passo){
                res.innerHTML += `\u{1F449} ${i}`
            }
            
        }else{
            for(var i = inicio; i >= final; i -= passo){
                res.innerHTML +=  ` \u{1F449} ${i}`
            }
        }    
        res.innerHTML += `\u{1F3C1}`
    }
}  