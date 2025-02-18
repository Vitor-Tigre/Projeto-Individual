function entrarConta() {

    var emailVar = input_email.value;
    var senhaVar = input_senha.value;

    if (emailVar == '' || senhaVar == '') {
        mensagemErro.innerHTML = 'Erro de campo em branco.';
        finalizarAguardar();
        return false;
    }

    console.log("email informado: ", emailVar);
    console.log("senha informada: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("Entrou na conta (entrou no then entrarConta())");

        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.idUsuario = json.idUsuario;
                sessionStorage.nome = json.nome;
                sessionStorage.email = json.email;
                // sessionStorage.senha = json.senha;
                sessionStorage.dtNasc = json.dtNasc;
                sessionStorage.albumPreferido = json.albumPreferido;
                sessionStorage.dtCriacao = json.dtCriacao;
                sessionStorage.acertos = json.acertos;
                sessionStorage.tempoQuiz = json.tempo;
                sessionStorage.pontos = json.pontos;
                sessionStorage.totalCompras = json.totalCompras;
                sessionStorage.avaliacaoQuiz = json.avaliacaoQuiz;
                sessionStorage.avaliacaoClicker = json.avaliacaoClicker;

                window.location.href = "perfil.html"
            });
        }
    })

}