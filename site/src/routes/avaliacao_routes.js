var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/avaliacao", function (req, res) {
    avaliacaoController.avaliar(req, res);
});

module.exports = router;