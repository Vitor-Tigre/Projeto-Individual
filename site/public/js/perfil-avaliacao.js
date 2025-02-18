    //avaliacao
    var coracao_clicadoQuiz = 0;
    var coracao_clicadoClicker = 0;

    function marcarAvaliacaoQuiz(coracaoClicado) {
        coracao_clicadoQuiz = coracaoClicado.getAttribute("data-id");
        if (coracao_clicadoQuiz == 1) {
            coracoesQuiz.innerHTML = `
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="1">
                <img src="assets/heart.png" onclick="marcarAvaliacaoQuiz(this)" data-id="2">
                <img src="assets/heart.png" onclick="marcarAvaliacaoQuiz(this)" data-id="3">
                <img src="assets/heart.png" onclick="marcarAvaliacaoQuiz(this)" data-id="4">
                <img src="assets/heart.png" onclick="marcarAvaliacaoQuiz(this)" data-id="5">
                `
        } else if (coracao_clicadoQuiz == 2) {
            coracoesQuiz.innerHTML = `
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="1">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="2">
                <img src="assets/heart.png" onclick="marcarAvaliacaoQuiz(this)" data-id="3">
                <img src="assets/heart.png" onclick="marcarAvaliacaoQuiz(this)" data-id="4">
                <img src="assets/heart.png" onclick="marcarAvaliacaoQuiz(this)" data-id="5">
                `
        } else if (coracao_clicadoQuiz == 3) {
            coracoesQuiz.innerHTML = `
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="1">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="2">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="3">
                <img src="assets/heart.png" onclick="marcarAvaliacaoQuiz(this)" data-id="4">
                <img src="assets/heart.png" onclick="marcarAvaliacaoQuiz(this)" data-id="5">
                `
        } else if (coracao_clicadoQuiz == 4) {
            coracoesQuiz.innerHTML = `
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="1">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="2">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="3">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="4">
                <img src="assets/heart.png" onclick="marcarAvaliacaoQuiz(this)" data-id="5">
                `
        } else if (coracao_clicadoQuiz == 5) {
            coracoesQuiz.innerHTML = `
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="1">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="2">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="3">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="4">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoQuiz(this)" data-id="5">
                `
        }
    }

    function marcarAvaliacaoClicker(coracaoClicado) {
        coracao_clicadoClicker = coracaoClicado.getAttribute("data-id");
        if (coracao_clicadoClicker == 1) {
            coracoesClicker.innerHTML = `
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="1">
                <img src="assets/heart.png" onclick="marcarAvaliacaoClicker(this)" data-id="2">
                <img src="assets/heart.png" onclick="marcarAvaliacaoClicker(this)" data-id="3">
                <img src="assets/heart.png" onclick="marcarAvaliacaoClicker(this)" data-id="4">
                <img src="assets/heart.png" onclick="marcarAvaliacaoClicker(this)" data-id="5">
                `
        } else if (coracao_clicadoClicker == 2) {
            coracoesClicker.innerHTML = `
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="1">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="2">
                <img src="assets/heart.png" onclick="marcarAvaliacaoClicker(this)" data-id="3">
                <img src="assets/heart.png" onclick="marcarAvaliacaoClicker(this)" data-id="4">
                <img src="assets/heart.png" onclick="marcarAvaliacaoClicker(this)" data-id="5">
                `
        } else if (coracao_clicadoClicker == 3) {
            coracoesClicker.innerHTML = `
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="1">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="2">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="3">
                <img src="assets/heart.png" onclick="marcarAvaliacaoClicker(this)" data-id="4">
                <img src="assets/heart.png" onclick="marcarAvaliacaoClicker(this)" data-id="5">
                `
        } else if (coracao_clicadoClicker == 4) {
            coracoesClicker.innerHTML = `
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="1">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="2">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="3">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="4">
                <img src="assets/heart.png" onclick="marcarAvaliacaoClicker(this)" data-id="5">
                `
        } else if (coracao_clicadoClicker == 5) {
            coracoesClicker.innerHTML = `
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="1">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="2">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="3">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="4">
                <img src="assets/heart (1).png" onclick="marcarAvaliacaoClicker(this)" data-id="5">
                `
        }
    };

    function ocultar_botao() {
        botao_mostrarAvaliacao.style.display = 'none';
    }
    function salvarAvaliacao() {
        if (coracao_clicadoClicker == 0 || coracao_clicadoQuiz == 0) {
            alert('Avalie os dois jogos clicando nos corações.');
            return false;
        }
        fetch("/avaliacao_routes/avaliacao", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                coracao_clicadoQuizServer: coracao_clicadoQuiz,
                coracao_clicadoClickerServer: coracao_clicadoClicker,
                idUsuarioServer: sessionStorage.idUsuario
            })
        })
            .then(function (resposta) {

                if (resposta.ok) {
                    telaAvaliacoes.innerHTML = `<div style="display: flex; align-self: center; justify-content: center"><p>Agradecemos pelo feedback.</p>
                    <p>Sua avaliação foi enviada com sucesso. Ela aparecerá no seu perfil!</p></div>`;

                    sessionStorage.setItem('avaliacaoClicker', coracao_clicadoClicker);
                    sessionStorage.setItem('avaliacaoQuiz', coracao_clicadoQuiz);

                    setTimeout(ocultar_botao(), 600);
                } else {
                    throw "Erro ao enviar os dados da avaliação!";

                }

            })
            .catch(function (resposta) {
                console.log("#ERRO: ", resposta);
                return false;
            })

    }