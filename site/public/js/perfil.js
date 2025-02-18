

if (sessionStorage.getItem('acertos') != 'null' && sessionStorage.getItem('tempoQuiz') != 'null') {
    mostrarQuiz.innerHTML = `
    <h6>Acertos <span id="b_acertosQuiz">0</span>/10</h6>
    <h6>Tempo decorrido <span id="b_tempoQuiz">0</span>s</h6>
    `

    b_acertosQuiz.innerHTML = sessionStorage.getItem("acertos");
    b_tempoQuiz.innerHTML = sessionStorage.getItem("tempoQuiz");
}

if (sessionStorage.getItem('pontos') != 'null' && sessionStorage.getItem('totalCompras') != 'null') {
    mostrarClicker.innerHTML = `
            <h6>Pontos: <span id="b_pontosQuiz">0</span></h6>
            <h6>Upgrades comprados: <span id="b_totalCompras">0</span></h6>
        `

    b_pontosQuiz.innerHTML = sessionStorage.getItem('pontos');
    b_totalCompras.innerHTML = sessionStorage.getItem('totalCompras');
}


if (sessionStorage.getItem('avaliacaoClicker') != 'null' && sessionStorage.getItem('avaliacaoQuiz') != 'null') {
    mostrarClicker.innerHTML += `
    <h6 id="b_coracoesClicker"></h6>
    `
    var limiteRepeticao = Number(sessionStorage.getItem('avaliacaoClicker'))
    for (var posicao = 0; posicao < limiteRepeticao; posicao++) {
        b_coracoesClicker.innerHTML += `
            <img src="assets/heart (1).png">
        `
    }

    mostrarQuiz.innerHTML += `
    <h6 id="b_coracoesQuiz"><h6>
    `
    limiteRepeticao = Number(sessionStorage.getItem('avaliacaoQuiz'));
    for (posicao = 0; posicao < limiteRepeticao; posicao++) {
        b_coracoesQuiz.innerHTML += `
            <img src="assets/heart (1).png">
        `
    }

    avaliacaoEstatistica.innerHTML = `
    <button onclick="mostrarDashboard()">Ver estatísticas</button>
    `



}


var telaAvaliacao = document.getElementById('telaAvaliacoes');
var telaDashboard = document.getElementById('telaDashboard');

function mostrarAvaliacao() {
    if (telaAvaliacao.style.display == 'none') {
        telaAvaliacao.style.display = 'block'
        telaDashboard.style.display = 'none'
    } else {
        telaAvaliacao.style.display = 'none'
    }
}

function mostrarDashboard() {
    if (telaDashboard.style.display == 'none') {
        telaDashboard.style.display = 'block'
        telaAvaliacao.style.display = 'none'
        setTimeout(() => dashboard.style.display = 'flex', 300);
    } else {
        telaDashboard.style.display = 'none'
    }
}

b_usuario.innerHTML = sessionStorage.nome;
b_albumPreferido.innerHTML = sessionStorage.albumPreferido;
b_criacao.innerHTML = sessionStorage.dtCriacao;
b_email.innerHTML = sessionStorage.email;


