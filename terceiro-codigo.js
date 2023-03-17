// Estrutura Swicht case

/*var numero = 8

if(numero % 2 == 0){

    console.log(`O numero e ${numero} par`)
}else{
    console.log(`O numero e ${numero} impar`)
}*/

/*var readline = require(`readline-sync`);
var doacao = 0;

console.log(`-------------CRIANÇA ESPERANÇA------------`);
console.log(`1 - Para doar R$ 10,00 reais`);
console.log(`2 - Para doar R$ 30,00 reais`);
console.log(`3 - Para doar R$ 50,00 reais`);
console.log(`4 - Para doar qualquer valor`);
console.log(`5 - Para sair`);

var resposta = readline.questionInt(`Escolha uma opcao: `);

switch (resposta) {
  case 1:
    doacao = 10;
    break;

  case 2:
    doacao = 30;
    break;

  case 3:
    doacao = 50;
    break;

  case 4:
    doacao = readline.questionFloat(`Deseja doar qual valor R$ `);
    break;

  case 5:
    doacao = 0;
    break;

    default:
    console.log(`Opção invalida`)
}

if (doacao != 0) {
    console.log(`Muito obrigado por sua colaboração R$ ${doacao} reais `);
  
} else if(resposta > 5 || resposta < 0){
  
console.log(`Obrigado por sua participação`)
   
}*/

/*var date = new Date();
var diaSemana = date.getDay();
var dia = ``;

switch (diaSemana) {
  case 0:
    dia = `Domingo`;
    break;
  case 1:
    dia = `Segunda-Feira`;
    break;
  case 2:
    dia = `Terça-Feira`;
    break;
  case 3:
    dia = `Quarta-Feira`;
    break;
  case 4:
    dia = `Quinta-Feira`;
    break;
  case 5:
    dia = `Sexta-Feira`;
    break;
  case 6:
    dia = `Sábado`;
    break;
}

console.log(`Bom dia! Tenha um(a) otimo(a) ${dia}`);*/

/*let permissao; // comum, gerente,diretor

permissao = `diretor`

switch(permissao){
  case `comum`:
    console.log(`Usuario comum`)
    break

     case `gerente`:
    console.log(`Usuario gerente`)
    break

     case `diretor`:
    console.log(`Usuario diretor`)
    break

    default:
      console.log(`Usuário não reconhecido`)
}*/

//                     Temos 5 loops
// 1. For
// 2. While
// 3. Do..While
// 4. For..In
// 5. For..of

/*for( var i = 0; i < 10; i++){ // crescente
  if( i % 2 !== 0){
    console.log(i)
  }
}*/

/*for( var i = 10; i >= 1; i--){  // decrescente
  if( i % 2 !== 0){
    console.log(i)
  }
}*/

// while loop decrescente
/* var i = 10;

  while ( i >= 1){           
    if( i % 2 !== 0){
      console.log(i)
  }
  i--;

  }*/

// Do..While

/* var i = 0;
  do{
    console.log(`Bom dia`, i);
    i++
  }while(i < 10)*/

// For..In

/*const cores = [`Vermelho`, `Azul`,`Verde`]
  for (var indice in cores){
    console.log(indice,cores[indice])
  }*/

/*var valorMaior = max(5,9);

  console.log (valorMaior);

  function max(numero1, numero2){
  if(numero1 > numero2)
  return numero1;
  else return numero2;
}*/

/*const numbers = [1, 4, 5, 9, 14, 23];

const DoubledNumbers = numbers.map(function(elem){
  return elem * 2
});

console.log(DoubledNumbers);*/

// Outro exemplo de array/map

/*const numbers = [1, 4, 5, 9, 14, 23];

 function DoubleNumber(num){
  return num * 2
 }
 const DoubledNumbers = numbers.map(DoubleNumber)

 console.log( DoubledNumbers)*/

/*const fahrenheit = [0, 32, 45, 50, 75, 80, 120]

 const celsius = fahrenheit.map(function(elem){

  return Math.round((elem - 32) * 5/9)
 })

 console.log(celsius);*/

/*var readline = require(`readline-sync`);

do {
  var soma = 0;
  var situacao;

  var nome = readline.question(`Nome: `);
  var qtdNotas = readline.questionInt(`Quantas notas serão inseridas? `);

  for (var c = 1; c <= qtdNotas; c++) {
    var nota = readline.questionFloat(`Nota ${c}: `);

    while (nota < 0 || nota > 10) {
      nota = readline.questionFloat(
        `Nota invalida! Insira a nota ${c} novamente : `
      );
    }
    soma += nota;
  }

  var media = soma / qtdNotas;

  if (media >= 6) {
    situacao = `Aprovado`;
  } else if (media >= 4) {
    situacao = `Recuperação`;
  } else {
    situacao = `Reprovado`;
  }

  console.log(`Aluno: ${nome}`);
  console.log(`Média: ${media}`);
  console.log(`Situação: ${situacao}`);

  var continuar = readline
    .question("Deseja continuar?\n [S]: Sim: \n [N]: Nao:  ")
    .toUpperCase();
  while (continuar != "S" && continuar != "N") {
    continuar = readline
      .question("Opção Invalida! Digite S para sim ou N para não")
      .toUpperCase();
  }
} while (continuar != `N`);*/

/*function  parimpar(n){
  if (n % 2 == 0){
    return `Par`

  }else{
    return `Impar`
  }
 }

 var res = parimpar(223)
 console.log(res)*/

/*function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(8, 8));*/

/*var y = function(x){
  return x * 4
}

console.log(y(10))*/

/*function fatorial(n){

  var fat = 1
  for(var  c = n; c > 1 ; c-- ){

    fat *= c
  }
  return fat
}
console.log(fatorial(5)) // 5 = 5 x 4 x 3 x 2 x 1 = 120*/

// Função recursiva

/*function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1)
  }
}
console.log(fatorial(5));*/

/*var num = [5, 8, 2, 9, 3]
//num.sort()                 Esse metodo coloca o vetor em ordem crescente
//num.push()                 Ess método acrescenta mais um numero no vetor
console.log(num) // Mostra o vetor

console.log(` O vetor tem ${num.length}  posições: `) // O vetor têm 5 posições
console.log(num[0])    // A primeira posição do vetor é: 5
console.log(`O primeiro valor do vetor é: ${num[1]}`) // O primeiro valor do vetor é: 8*/

/*let valores = [8, 1, 7, 4, 2, 9]                   // Maneira tradicional do comando For
for(let pos= 0; pos < valores.length; pos++){

  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

/*let valores = [8, 1, 7, 4, 2, 9]                    // Forma simplificada  do comando For
for(let pos in valores){                     // Leitura: para cada posição na variável composta vai mostrar o num pos

  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)


}*/

/*exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite){
  for(let numero = 2; numero <= limite; numero++){

    let ehPrimo = true;
    for(let divisor = 2; divisor < numero; divisor++){

      if(numero % divisor === 0){
        ehPrimo = false;
        break;
      }
    }
    if(ehPrimo)console.log(numero)
  }
}*/

var readline = require(`readline-sync`);

var senha = "php1324";
var situacao;

var senha = readline.question(`Digitar senha: `);

if (senha.length == 7) {
  situacao = `Senha Valida`;
} else if (senha.length == 8) {
  situacao = `Senha Invalida`;
} else (senha != php1324) 
  situacao = `Senha Bloqueada`;


console.log(`Situação: ${situacao}`);



/*var senha = "teste12345";
if(senha.length == 8){
 console.log('sucesso');
} else {
 console.log('erro');
}*/
