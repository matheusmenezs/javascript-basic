function analisar(){
    var txt = window.document.querySelector("input#txt1")
    var res = window.document.querySelector("div#res")
    var idade = txt.value
    res.innerHTML = `Você tem ${idade} anos.<br>`
    if(idade < 16){
        res.innerHTML += "Não vota"
    }else if(idade < 18 || idade > 65){
        res.innerHTML += "Voto não obrigatório"
    }else{
        res.innerHTML += "Voto obrigatório"
    }
}
