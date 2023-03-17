// Existem três tipos de declaração de variaveis em JS: var, let e const
// var - pode ser declarada e pode-se atribuir um valor a ela.
// let - Eu posso reatribuir um valor mais não posso redeclarar.
// const - Eu não posso redeclarar e nem retribuir um valor


/*console.log("Álo Mundo")*/

/*var numero = 5

console.log(`O numero da variavel e:${numero}`)*/

/*var numero1 = 8
var numero2 = 10

var soma = numero1 + numero2

console.log(`A soma entre ${numero1} e ${numero2} é: ${soma}`)*/

/*const readline = require(`readline-sync`)
var nome = readline.question(`Qual e o seu nome`)

console.log(`O nome informado foi: ${nome}`)*/

const readline = require(`readline-sync`)

var nome = readline.question(`Qual e o seu nome`)
var numero1 = Number(readline.question(`Numero 1:`)) 
var numero2 = Number(readline.question(`Numero 2:`)) 


var soma = numero1 + numero2

console.log(`O nome informado foi: ${nome}`)
console.log(`A soma dos valores informados é: ${soma}`)