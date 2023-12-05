const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perguntas = [
  { pergunta: 'Qual é a capital do Brasil?', alternativas: ['a) São Paulo', 'b) Brasília', 'c) Rio de Janeiro'], resposta: 'b' },
  { pergunta: 'Quem foi o primeiro presidente dos Estados Unidos?', alternativas: ['a) George Washington', 'b) Abraham Lincoln', 'c) Thomas Jefferson'], resposta: 'a' },
  { pergunta: 'Em que ano ocorreu a Revolução Francesa?', alternativas: ['a)  1776', 'b) 1789', 'c) 1804'], resposta: 'b' },
  { pergunta: 'Quem escreveu "Romeu e Julieta"?', alternativas: ['a) Charles Dickens', 'b) William Shakespeare', 'c) Jane Austen'], resposta: 'b' },
  { pergunta: 'Qual é o maior oceano do mundo?', alternativas: ['a) Atlântico', 'b) Índico', 'c) Pacífico'], resposta: 'c' },
  { pergunta: 'Qual é o elemento químico mais abundante na crosta terrestre?', alternativas: ['a) Oxigênio', 'b) Silício', 'c) Alumínio'], resposta: 'a' },
  { pergunta: 'Em qual continente está localizado o Deserto do Saara?', alternativas: ['a) África', 'b) Ásia', 'c) América do Sul'], resposta: 'a' },
  { pergunta: 'Quem foi o primeiro ser humano a viajar para o espaço?', alternativas: ['a) Yuri Gagarin', 'b) Neil Armstrong', 'c) Buzz Aldrin'], resposta: 'a' },
  { pergunta: 'Qual é a capital do Canadá?', alternativas: ['a) Toronto', 'b) Ottawa', 'c) Vancouver'], resposta: 'b' },
  { pergunta: 'Qual é a maior cordilheira do mundo?', alternativas: ['a) Montanhas Rochosas', 'b) Cordilheira dos Andes', 'c) Himalaias'], resposta: 'c' },
  { pergunta: 'Quem pintou a Mona Lisa?', alternativas: ['a) Vincent van Gogh', 'b) Leonardo da Vinci', 'c) Pablo Picasso'], resposta: 'b' },
  { pergunta: 'Qual é o segundo maior planeta do nosso sistema solar?', alternativas: ['a) Saturno', 'b) Marte', 'c) Urano'], resposta: 'a' },
  { pergunta: 'Qual é o país mais populoso do mundo?', alternativas: ['a) Índia', 'b) China', 'c) Estados Unidos'], resposta: 'b' },
  { pergunta: 'Qual é a capital da Austrália?', alternativas: ['a) Sydney', 'b) Melbourne', 'c) Canberra'], resposta: 'c' },
  { pergunta: 'Quem foi o cientista que formulou a teoria da relatividade?', alternativas: ['a) Isaac Newton', 'b) Albert Einstein', 'c) Galileu Galilei'], resposta: 'b' },
];

let pontuacao = 0;
let perguntaAtual = 0;

function fazerPergunta() {
  const pergunta = perguntas[perguntaAtual];

  console.log(pergunta.pergunta);
  pergunta.alternativas.forEach((alternativa) => console.log(alternativa));

  rl.question('Sua resposta: ', (respostaUsuario) => {
    if (respostaUsuario.toLowerCase() === pergunta.resposta) {
      console.log('Resposta correta!\n');
      pontuacao++;
    } else {
      console.log(`Resposta incorreta. A resposta correta era: ${pergunta.resposta.toUpperCase()}\n`);
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
      fazerPergunta();
    } else {
      console.log(`Fim do jogo! Sua pontuação: ${pontuacao}/${perguntas.length}`);
      rl.close();
    }
  });
}

fazerPergunta();