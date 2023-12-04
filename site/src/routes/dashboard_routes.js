var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/album", function (req, res) {
    dashboardController.album(req, res);
});

router.get("/acertos", function (req, res) {
    dashboardController.acertos(req, res);
});

router.get("/pontos", function (req, res) {
    dashboardController.pontos(req, res);
});

module.exports = router;