/*Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let i = 1;
while (i <= 10) {
  alert(i);
  i++;
}*/

/*Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let j = 10;
while (j >= 0) {
  alert(j);
  j--;
}*/

/*Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = prompt("Digite um numero para iniciar a  contagem regressiva:");
numero = parseInt(numero);

while (numero >= 0) {
  console.log(numero);
  numero--;
}
  */

/*Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numero = prompt("Digite um numero para iniciar a  contagem progressiva :");
numero = parseInt(numero);

let k = 0;
while (k <= numero) {
  console.log(k);
  k++;
}
*/
// operadores logicos
/*
let idade = 25;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
  */

/*
let temMaça = false;
let temBanana = true;

// se tem maça ou tem banana…
if (temMaça || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}
*/

/*Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
.toLowerCase()  para corrigir maiuscula ou minuscula
  .normalize("NFD") para remover os acentos 
  .replace(/[\u0300-\u036f]/g, "");

let fimSemana1 = "sabado";
let fimSemana2 = "domingo";
let diaSemana = prompt("Qual é o dia da semana?")
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");

if (diaSemana === fimSemana1 || diaSemana === fimSemana2) {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}*/

/*Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt("Digite um número:");

if (numero > 0) {
  alert(" O numero é positivo.");
} else if (numero < 0) {
  alert(" O numero é negativo.");
} else {
  alert("O número é zero.");
}*/

/*Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt("Digite sua pontuação:");

if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}
  */

/*
Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

alert(" Banco Javascript");
let saldoDisponivel = 250;

let nome = prompt("Digite seu nome:");
let conta = prompt("Digite sua conta:");

alert(`${nome} seu saldo disponivel da conta:  ${conta} é: ${saldoDisponivel}`);
*/

/*Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Digite seu nome:");
alert(`${nome} Seja bem vindo!!! Estamos feliz com a sua presença.:)`);
*/

/* primeiro desafio
alert("Bem vindo ao site do curso Oracle 50+");

let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos");

let mensagemDeErro = "Erro! Preencha todos os campoooos";
alert(mensagemDeErro);

let seuNome = prompt("Qual o seu nome?");

let idadeUsuario = 18;
console.log(idadeUsuario);
let usuario = prompt("Qual a sua idade?");

if (usuario == idadeUsuario) {
  alert("Pode tirar a habilitação!");
} else {
  alert("Você não tem a maior idade, aguarde completar 18 anos");
}
*/

///   dicas importantes
/// let uso para armazenar um valor de uma variável
///prompt usa para exibir uma janela de input na tela
/// condições if e else
/// console.log para verificar o codigo testando no navegador
