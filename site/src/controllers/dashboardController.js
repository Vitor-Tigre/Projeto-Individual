var dashboardModel = require("../models/dashboardModel");

function album(req, res) {

    dashboardModel.album()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Dados de álbuns não encontrado!")
            }

        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
};

function acertos(req, res) {

    dashboardModel.acertos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Dados de acertos não encontrados!");
            }

        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Erro na consulta de acertos. Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
};

function pontos(req, res) {

    dashboardModel.pontos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Dados pontos Clicker vazios")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Erro na consulta de pontos. Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
};

module.exports = {
    album,
    acertos,
    pontos
}