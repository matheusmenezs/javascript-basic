var agora = new Date()
var hora = agora.getHours()
if (hora >= 18){
    console.log(`Boa noite, agora são ${hora} horas.`)
}else if (hora > 6 && hora < 12){
    console.log(`Bom dia, agora são ${hora} horas.`)
}else{
    console.log(`Boa tarde, agora são ${hora} horas.`)
}

