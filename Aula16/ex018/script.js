var vet = []

function adicionar(){
    var entry = document.getElementById("entry")
    var select = document.getElementById("sel")
    var num = Number(entry.value)
    var res = document.getElementById("resp")

    res.innerHTML = ("")
    
    if(num > 0 && num <= 100){
        var p = vet.indexOf(num)
        if (p == -1){
            var item = document.createElement("option")
            item.text = `Valor ${num} adicionado.`
            vet.push(num)
            select.appendChild(item)
        }else{
            window.alert(`O valor ${num} já foi inserido`)
        }
    }else{
        window.alert(`[ERRO] Digite um valor entre [1] e [100]`)
    }
}   

function finalizar(){
    var res = document.getElementById("resp")
    var cont = vet.length
    var maior = 0
    var menor = 100
    var soma = 0
   
    res.innerHTML = ("")
    
    for(item in vet){
        soma += vet[item]
        if(vet[item] > maior){
           maior = vet[item]
        }
        if(vet[item] < menor){
            menor = vet[item]
        }
    }
   
    res.innerHTML += (`Ao todo temos ${cont} elementos cadastrados <br>`)
    res.innerHTML += (`O maior valor é ${maior} <br>`)
    res.innerHTML += (`O menor valor é ${menor} <br>`)
    res.innerHTML += (`Somando todos os valores temos: ${soma} <br>`)
    res.innerHTML += (`A media dos valores é: ${soma/cont} <br>`)
}