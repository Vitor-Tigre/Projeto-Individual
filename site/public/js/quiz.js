var listaQuestoes = [
    'Qual foi o ano em que BMTH veio ao Brasil pela primeira vez?',
    'Qual o nome da namorada de Oliver Sykes?',
    'Qual foi o ano em que Jordan Fish entrou para a banda?',
    'Qual é o nome da faixa de abertura do álbum "amo"?',
    'Qual o nome da primeira demo da banda?',
    'Qual álbum contém a faixa "Visions"?',
    'Qual personagem famoso aparece no tempo 2:20 do clipe de "sugar honey ice & tea"?',
    'Em 2016, onde Bring Me The Horizon realizou um concerto beneficente em apoio à Teenage Cancer Trust, uma instituição que ajuda crianças e adolescentes com câncer?',
    'Bring Me The Horizon ganhou o prémio de álbum do ano pelo Kerrang! Awards, por qual álbum?',
    'Qual foi o primeiro single do álbum "Sempiternal" lançado?'
];

var totalAlternativas = [
    ['2008', '2010', '2011', '2009'],
    ['Alissa', 'Hannah', 'Grace', 'Ashley'],
    ['2015', '2010', '2004', '2012'],
    ['mother tongue', 'i apologise if you feel something', 'Nihilist Blues', 'MANTRA'],
    ["There's a Hell...", 'The Bedroom Sessions', 'This is What The Edge...', 'Traitor Never Play Hangman'],
    ["That's The Spirit", 'Sempiternal', 'POST HUMAN: Survival Horror', "There's a Hell..."],
    ['Monica', 'Papa-léguas', 'Bart Simpson', 'Homem Aranha'],
    ['The O2', 'Arena Sheffield', 'Royal Albert Hall', 'Qudos Bank Arena'],
    ["Sempiternal", "There's a Hell...", 'Amo', 'POST HUMAN: Survival Horror'],
    ['Can You Feel My Heart', 'Sleepwalking', 'Doomed', 'Shadow Moses']
];

var respostasCorretas = [3, 1, 4, 2, 2, 4, 1, 3, 2, 4];
var respostasJogador = [];

var nmrQuestao = 0;
var acertos = 0;

var segundosTimer = 0;
function iniciar() {    //inicia o jogo e começa a contar um timer.
    avancar();  //avança para a próxima parte do código.
    tempoDecorrido = setInterval(function () {  //a cada segundo, a variável de segundos aumenta e 1, e é passado para o site. A variável é global para ser chamada depois.
        mostrarSegundos.innerHTML = segundosTimer += 1
    }, 1000);
}

function avancar() {
    textos.innerHTML = `<h3>Questão ${respostasJogador.length + 1}/10</h3>
    <p>${listaQuestoes[nmrQuestao]}</p>`;
    botoes.innerHTML = `
        <div class="linhaBotoes">
            <button onclick="proximaQuestao(this)" value="1">
                ${totalAlternativas[nmrQuestao][0]}
            </button>
            <button onclick="proximaQuestao(this)" value="3">
                ${totalAlternativas[nmrQuestao][2]}
            </button>
        </div>
        <div class="linhaBotoes">
            <button onclick="proximaQuestao(this)" value="2">
                ${totalAlternativas[nmrQuestao][1]}
            </button>
            <button onclick="proximaQuestao(this)" value="4">
                ${totalAlternativas[nmrQuestao][3]}
            </button>
        </div>
    `;

}

function proximaQuestao(botaoApertado) {
    nmrQuestao += 1;
    respostasJogador.push(Number(botaoApertado.value));
    if (nmrQuestao >= 10) {
        clearInterval(tempoDecorrido);

        for (var contagemPontos = 0; contagemPontos < respostasCorretas.length; contagemPontos++) {
            if (respostasJogador[contagemPontos] == respostasCorretas[contagemPontos]) {
                acertos += 1;
            }
        }
        if (acertos == 0) {
            textos.innerHTML = `<p>Eu te admiro por ter errado TODAS as questões. Deve ser muito difícil fazer isso.</p>`
        } else if (acertos == 1) {
            textos.innerHTML = `<p>Você acertou 1 questão! Você poderia tentar da próxima vez.</p>`
        } else if (acertos == 2) {
            textos.innerHTML = `<p>Você acertou 2 questões! Mantenha a calma e tente de novo depois.</p>`
        } else if (acertos <= 4) {
            textos.innerHTML = `<p>Você acertou ${acertos} questões! Você é um pouco desleixado, mas ainda é um fã de Bring Me The Horizon.</p>`
        } else if (acertos <= 6) {
            textos.innerHTML = `<p>Você acertou ${acertos} questões! Você é um fã de Bring Me The Horizon, e você está sempre compartilhando seu amor pela banda com os outros.</p>`
        } else if (acertos <= 8) {
            textos.innerHTML = `<p>Você acertou ${acertos} questões! Você é um fã de Bring Me The Horizon, e você é um verdadeiro tesouro para a comunidade.</p>`
        } else {
            textos.innerHTML = `<p>Você acertou ${acertos} questões! Você é um verdadeiro especialista em Bring Me The Horizon. Você poderia escrever um livro sobre eles.</p>`
        }
        botoes.innerHTML = `<button onclick="sairQuiz()">Ir para o perfil</button>`
    } else {
        avancar();
    }
}

function sairQuiz() {
    fetch("/usuarios/quiz", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            acertosServer: acertos,
            segundosTimerServer: segundosTimer,
            idUsuarioServer: sessionStorage.idUsuario
        }),
    })
        .then(function (resposta) {
            console.log("Resposta: ", resposta);

            if (resposta.ok) {
                console.log("Dados enviados!");
                sessionStorage.setItem('acertos', acertos);
                sessionStorage.setItem('tempoQuiz', segundosTimer);

                setTimeout(() => {
                    window.location.href = "perfil.html"
                }, 700);
            } else {
                console.log("Erro na inserção de dados.");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        })
}