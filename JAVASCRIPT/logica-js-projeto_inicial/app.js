alert("Bem vindo ao MUNDO DOS JOGOS");
let numeroMaximo = 3000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Loops de repetição while=enquanto o chute nao for igual ao numero secreto repita a ação
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 ${numeroMaximo}`);
  //se o chute for igual ao numero secreto faça alguma coisa tudo que estiver dentro das chaves
  if (chute == numeroSecreto) {
    // Condicional break utiliza para PARAR
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}
// corrigindo a ortografia de numeros de tentativas, utilizando o operador Tenário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Uhuu, voce descobriu o N° secreto :  ${numeroSecreto},com : ${tentativas} ${palavraTentativa}`
);

// o console é uma ferramenta para o desenvolvedor e nao para usuario lembre-se disso!
//Template strings forma de criar strings que permitem a inclusão de expressões e variáveis no seu conteúdo. Elas são uma alternativa mais eficiente à concatenação de strings, permitindo que o código seja mais legível e fácil de entender. usa a crase o sinal do sifrao e a variavel fica dentro das chaves
// ex.   alert(`Uhuu, voce descobriu o número secreto ${numeroSecreto}`);

// Fica a Dica: para atualizar o codigo baixa a extensão live serve, entenda que o index ao ser aberto no live server atualiza automaticamente toda vez que salvar algun dado no codigo. E observe que a pagina é aberta no servidor local, enquanto abrir o index no navegador igual ao chrome precisa atualizar a pagina toda vez que ocorrer alteração dos dados do codigo.

// Existe varios tipos de operadores
//exemplos != diferente de  == compara o resultado   === compara o valor !== estritamente não igual
// AND (&&) Combinar duas condições e avaliar se ambas são verdadeiras
// OR(\\) Verifica se pelos menos uma das condições é verdadeira

//   tentativas++;    quando quer atribuir mais 1 a variavel  utiliza este metodo mais atual
// tentativas = tentativas + 1; é um metodo absoleto.
