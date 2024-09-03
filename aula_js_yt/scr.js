/* 

VARIÁVEIS  <<<<<<<<<<<<<<<<<<<<<<<

let           - Posso alterar o valor quantas vezes eu quiser
const         - Não posso atribuir novo valor
var                   (Descontinuado)

__________________________________________

CONDIÇÕES  <<<<<<<<<<<<<<<<<<<<<<<

if            - (se) 
else          - (senão)

if(condicao, se for verdadeira) {
    faz isso.
} else {
    se o if for falso, faz isso.
}


EXEMPLO ***

let numero = 8
if(numero > 12){
    console.log("O numero é maior que 12")
} else {
    console.log("O numero não é maior que 12")
}


___________________________________________

FUNÇÕES  <<<<<<<<<<<<<<<<<<<<<<<

- Trecho de codigo que so é executado quando chamado


EXEMPLO ***

console.log("oi")
console.log("Opa")
console.log("E ai")
console.log("xD")



let numero = 15

function like(){
    console.log("Opa")          <<<<<< nao executara pois nao foi chamado
    console.log("E ai")          
}

console.log(numero)


___________________________________________

LAÇOS <<<<<<<<<<<<<<<<<<<<<<<

[] - array ou matriz

Server para guardar quantos itens eu quiser


EXEMPLO ***


let produtos = ['blusa', 'tenis', 'short']
console.log(produtos)

[ 'blusa', 'tenis', 'short' ]  << aparece assim


forEach               - Mostrar itens por itens

let produtos = ['blusa', 'tenis', 'short']
produtos.forEach ( nomequequiser => {

    console.log(produto)

    })

    Blusa
    tenis         << aparece assim                              
    short


Mais um exemplo abaixo

*/

let produtos = ['blusa', 'tenis', 'short']
produtos.forEach( produto => {

    if(produto === 'blusa') {
        console.log(produto)
    }else {
        console.log('Nao é a blusa')
    }

})    






