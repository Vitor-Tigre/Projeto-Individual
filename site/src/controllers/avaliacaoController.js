var avaliacaoModel = require("../models/avaliacaoModel");

function avaliar(req, res) {

    var idUsuario = req.body.idUsuarioServer;
    var coracaoClicker = req.body.coracao_clicadoClickerServer;
    var coracaoQuiz = req.body.coracao_clicadoQuizServer;

    if (coracaoQuiz == undefined) {
        res.status(400).send("sua avaliação do Quiz está UNDEFINED!");
        console.log("erro na avaliação do quiz");
    } else if (coracaoClicker == undefined) {
        res.status(400).send("Sua avaliação do Clicker está UNDEFINED!");
        console.log("erro na avaliação do clicker");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu id está UNDEFINED!");
        console.log("erro no idUsuario");
    } else {

        avaliacaoModel.avaliar(idUsuario, coracaoClicker, coracaoQuiz)
            .then(
                function (resultadoAvaliar) {
                    res.json(resultadoAvaliar);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao enviar a avaliação! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}

module.exports = {
    avaliar
}