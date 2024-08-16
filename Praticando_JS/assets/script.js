/*
TIPOS DE VARIAVEIS
let idade = 18 // Number
let nome = 'joao' // String
 OBS: Usar '' ou "" em operacao ex? let nome = "90"
Logo em op console.log(10 + nome) será 1090 pois ira concatenar (será considerado como texto)
let logado =  true Boolean - conjunção, disjunção, disjunção exclusiva, equivalência lógica e negação

___________________________________________________


Array e Objetos

let ingredientes = ['farinha', 'agua', 'corante', 'sal'] -- array

array - listas /Caso queria adicionar varios itens dentro do array basta adicionar []. Quando quiser exibir determinado item basta colocar o numero sequancial na qual foi inserido. Ex sal, farinha, ovo = 0, 1, 2
 Exibir sal console.log(ingredientes[0])

___________________________________________________

let personagem = { // Objetos 
    nome: 'Arley',
    nivel: 10,
    forca: 800,
    magia: 1000,
    mana: 200 
}  

adicionar propriedades (caracteristicas de um objeto)
exemplos <<<
console.log(personagem.nome) <<<<
console.log(personagem.magia) <<<

___________________________________________________
FUNCOES <<<<<

INPUT -- Dados que vou mandar pra funcao 
PROCESSA -- Processamento
OUTPUT -- Retorno da funcao

function somar(a, b) {
    let resultado = a + b;
    return resultado
}

let x = somar(15, 5)
let y = somar (2, 8)

console.log(x)
console.log(y) 


 ----------------------------

FUNCAO ARROW 

function somar(a, b) {
    let resultado = a + b
    return resultado
}

let somar2 = (a, b) => {  <<<<<<<<<<< arrow function
    let resultado = a + b
    return resultado
}

let x = somar(15, 5)
let y = somar2(2, 8) <<<<<<<

console.log(x)
console.log(y)  <<<<<<<<<<<<<  

  serve para mandar uma funcao para algum lugar sem necessariamente dar um nome a ela



  CONDICIONAL

 

if (nome == 'arley') { // SE
    console.log("Mensagem especial!!")
} 

else {    // SE NÃO
    console.log ('Mensagem normal')
}


____________________________


== igual
!= diferente
> Maior
< Menor
>= <= maior igual, menor igual

______________________________


 let lista = ['farinha', 'agua', 'sal']

 for (let item of lista) {
    console.log('-  Ingredientes: ' + item)
 }

*/