function tabuada(){
    var num = document.getElementById("num")
    var sel = document.getElementById("seltab")

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        var numero = Number(num.value)
        sel.innerHTML = ''
        for(var i = 0; i <= 10; i++){
            var item = document.createElement("option")
            item.text = `${numero} X ${i} = ${numero * i}`
            item.value = `tab${i}`
            sel.appendChild(item)
        }
    
    }
    
 
}