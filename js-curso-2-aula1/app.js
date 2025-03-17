let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.2;
    window.speechSynthesis.speak(utterance);
  } else {
    console.log('Web Speech API não suportada neste navegador.');
  }
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
// precisa chamar a funcao fora de qualquer função para funcionar
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    // interpolar quando usa $
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    //habilita o botão novo jogo
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    // limpar o campo toda vez que inserir um numero para chutar
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  // verificar se qtd foi atingida
  if (quantidadeDeElementosNaLista == 3) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}
// lfunção para limpar o campo toda vez que inserir um numero para chutar
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}
// obs reiniciarJogo() foi criada no html indicando uma função.
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  //habilitando o botão após o jogador acertar.
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
