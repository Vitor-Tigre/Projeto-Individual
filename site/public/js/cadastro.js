function cadastrarConta() {
    var nome = input_nomeUsuario.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var confirmarSenha = input_confSenha.value;
    var dtNasc = input_dtNasc.value;
    var albumPreferido = select_albumPreferido.value;
    var dtCriacao = new Date().toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' })

    // validações 
    if (nome == '') {
        mensagemErro.innerHTML = '<span style="color: red;">Insira um nome de usuário!</span>';
        finalizarAguardar();
        return false;
    } else if (email == '' || email.indexOf("@") < 0 || email.endsWith('.com') == false) {
        mensagemErro.innerHTML = '<span style="color: red;"> Insira um email válido!</span>';
        finalizarAguardar();
        return false;
    } else if (senha.length < 8) {
        mensagemErro.innerHTML = '<span style="color: red;"> Insira senha de pelo menos 8 caracteres!</span>';
        finalizarAguardar();
        return false;
    } else if (confirmarSenha != senha) {
        mensagemErro.innerHTML = '<span style="color: red;">Senhas diferentes foram inseridas!</span>';
        finalizarAguardar();
        return false;
    } else if (dtNasc == '') {
        mensagemErro.innerHTML = '<span style="color: red;"> Insira uma data de nascimento!</span>';
        finalizarAguardar();
        return false;
    }

    mensagemErro.innerHTML = ''

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha,
            dtNascServer: dtNasc,
            albumPreferidoServer: albumPreferido,
            dtCriacaoServer: dtCriacao
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {

                mensagemErro.innerHTML = '<span style="color: #fefefe">Cadastro realizado com sucesso! Redirecionando para tela de Login...</span>';

                setTimeout(() => {
                    window.location.href = "login.html";
                }, "2000");

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
                mensagemErro.innerHTML = '<span style="color: red;">E-mail já cadastrado.</span>'
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            mensagemErro.innerHTML = '<span style="color: red;">Erro ao enviar dados.</span>'
        });

}