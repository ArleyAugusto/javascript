/*
var idade = 15
if (idade < 16) {
    console.log ('Nao vota')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('Voto opcional')
    }
    else (idade >= 18) {
        console.log ('Voto obrigatorio')
    }
 OBS: Raciocinio log para simplificar e diminuir o codigo
*/

var idade = 66
console.log(`Voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
        console.log ('Voto opcional')
} else {
        console.log ('Voto obrigatório')
}
