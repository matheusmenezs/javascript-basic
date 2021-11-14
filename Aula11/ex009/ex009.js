function analisar(){
    var txt = window.document.querySelector('input#entry')
    var res = window.document.querySelector('div#res')
    if (txt.value == 'Brasil'){
        res.innerHTML  = "Você é brasileiro"
    }else{
        res.innerHTML = "Você é estrangeiro"
    }

}