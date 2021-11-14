function verificar(){
    var txt = window.document.getElementById('vel')
    var res = window.document.getElementById('res')
    var vel = Number(txt.value)
    
    if (vel > 60){
        res.innerText = `Você ultrapassou a velocidade de 60 Km/h, portanto foi multado (Velocidade: ${vel}Km/h)`
    }
    else{
        res.innerText = `Você não foi multado (Velocidade: ${vel}Km/h)`
    }

}