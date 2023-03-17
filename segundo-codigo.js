// Para ser identico, deve haver o mesmo valor e o mesmo tipo primitivo

/*var a = 8
var b = 6

console.log(a < b)*/ // false

/*var a = 8
var b = `8`

console.log(a == b) // true */

/*var readline = require(`readline-sync`)

var numero =  readline.question(`Numero:`)

if(Numero % 2 == 0){

    console.log(`O numero ${numero} e Par`)
}else{

    console.log(`O numero ${numero} e Impar`)

}*/

/*var readline = require(`readline-sync`)

var numero1 =  readline.questionFloat(`Numero 1:`)
var numero2 =  readline.questionFloat(`Numero 2:`)

if(numero1 > numero2){

    console.log(`O numero ${numero1} e maior que ${numero2}`)
}else if (numero2 > numero1){

    console.log(`O numero ${numero2} e maior que ${numero1}`)
}else{

    console.log(`Os numeros são iguais`)

}*/

/*var readline = require(`readline-sync`);

var nome = readline.question(`Nome: `);
var nota1 = readline.questionFloat(`Nota 1: `);
var nota2 = readline.questionFloat(`Nota 2: `);
var nota3 = readline.questionFloat(`Nota 3: `);

var nota = (nota1 + nota2 + nota3) / 2;

if (nota >= 7) {
  console.log(`O aluno média ${nota} esta aprovado`);
} else if (nota <= 5) {
  console.log(`O aluno média ${nota} esta reprovado`);
} else {
  nota >= 5.1 || nota <= 6.9;
  console.log(`O aluno média ${nota} esta recuperação`);
}*/



/*var readline = require(`readline-sync`);

var anoNasc = readline.question(`Ano de Nascimento: `);
var date = new Date();
var anoAtual = date.getFullYear();

console.log(anoAtual);

var idade = anoAtual - anoNasc;

console.log(`Idade: ${idade}`);

if (idade < 16) {
  console.log(`Não pode votar! Menor de 16 anos`);
} else if (idade >= 16 && idade < 18) {
  console.log(`O voto e opcional`);
} else if (idade >= 18 && idade <= 70) {
  console.log(`O voto e obrigatório`);
}else if(idade > 70){
  console.log(`A votação e opcional `)
}*/





