/* para mostrar usando estrutura de repeticao
var num = [4, 0, 2, 5, 7, 9]

console.log(num)

for (var pos=0; pos < num.length; pos++) {
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}

// outra forma usando for in

// for(let pos in num) {  (para cada posicao em num)
//console.log(num[pos])}          (vou mostar o num pos)     

*/
var valores = [4, 0, 2, 5, 7, 9]
valores.sort()

for (let pos in valores) {
console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

var pos = valores.indexOf(8)
if (pos == -1) {
    console.log(`O valor nao foi encontrado!!`)
} else {
    console.log(`O valor esta na posição ${pos}`)
}

// para buscar dentro de um vetor usar num.indexOf(7) exemplo de valor 7 nque esta na posicao 4