var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está UNDEFINED!");
        console.log("erro no email");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está UNDEFINED!");
        console.log("erro na sneha");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {

                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length > 0) {
                        res.json(resultadoAutenticar[resultadoAutenticar.length - 1])
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}

// function autenticar(req, res) {
//     var email = req.body.emailServer;
//     var senha = req.body.senhaServer;

//     if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está indefinida!");
//     } else {

//         usuarioModel.autenticar(email, senha)
//             .then(
//                 function (resultadoAutenticar) {
//                     console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

//                     if (resultadoAutenticar.length == 1) {
//                         console.log(resultadoAutenticar);

//                         aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
//                             .then((resultadoAquarios) => {
//                                 if (resultadoAquarios.length > 0) {
//                                     res.json({
//                                         id: resultadoAutenticar[0].id,
//                                         email: resultadoAutenticar[0].email,
//                                         nome: resultadoAutenticar[0].nome,
//                                         senha: resultadoAutenticar[0].senha,
//                                         aquarios: resultadoAquarios
//                                     });
//                                 } else {
//                                     res.status(204).json({ aquarios: [] });
//                                 }
//                             })
//                     } else if (resultadoAutenticar.length == 0) {
//                         res.status(403).send("Email e/ou senha inválido(s)");
//                     } else {
//                         res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.emailServer;
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;
    var dtNasc = req.body.dtNascServer;
    var albumPreferido = req.body.albumPreferidoServer;
    var dtCriacao = req.body.dtCriacaoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (dtNasc == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, dtNasc, albumPreferido, dtCriacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function clicker(req, res) {
    var pontos = req.body.pontosServer;
    var totalCompras = req.body.totalComprasServer;
    var idUsuario = req.body.idUsuarioServer;

    if (pontos == undefined) {
        res.status(400).send("Seus pontos estão com valor 'undefined'.");
        console.log("pontos UNDEFINED");
    } else if (totalCompras == undefined) {
        res.status(400).send("Seu total de compras de upgrades está com valor 'undefined'.");
        console.log("totalCompras UNDEFINED");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id está com valor 'undefined'.");
        console.log("idUsuario UNDEFINED");
    } else {
        usuarioModel.clicker(pontos, totalCompras, idUsuario)
            .then(
                function (resultatoClicker) {
                        res.json(resultatoClicker);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "Houve um erro ao cadastrar dados do Clicker! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function quiz(req, res) {
    var acertos = req.body.acertosServer;
    var segundosTimer = req.body.segundosTimerServer;
    var idUsuario = req.body.idUsuarioServer;

    if (acertos == undefined) {
        res.status(400).send("Seus dados de acertos estão com valor 'undefined'.");
        console.log("pontos UNDEFINED");
    } else if (segundosTimer == undefined) {
        res.status(400).send("O tempo está 'undefined'.");
        console.log("totalCompras UNDEFINED");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id de usuário está com valor 'undefined'.");
        console.log("/quiz idUsuario UNDEFINED");
    } else {
        usuarioModel.quiz(acertos, segundosTimer, idUsuario)
            .then(
                function (resultadoQuiz) {
                        res.json(resultadoQuiz);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "Houve um erro ao cadastrar dados do Quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

module.exports = {
    autenticar,
    cadastrar,
    clicker,
    quiz
}