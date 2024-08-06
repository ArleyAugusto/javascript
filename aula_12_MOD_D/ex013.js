var agora = new Date()
var diaSem = agora.getDay()
/*
    Dias da semana para o JS

    0 DOM
    1 SEG
    2 TERC
    3 QUAR
    4 QUI
    5 SEX
    6 SAB
*/ 

//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabádo')
        break    
    default:
        console.log('[ERRO] dia inválido!')    
        break

}