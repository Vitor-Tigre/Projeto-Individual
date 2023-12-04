var database = require("../database/config");

function avaliar(idUsuario, coracaoClicker, coracaoQuiz) {
    console.log("avaliacaoModel acessado. function avaliar(): ", coracaoQuiz, coracaoClicker);
    var instrucao = `
    insert into avaliacao (fkUsuario, avaliacaoClicker, avaliacaoQuiz) values (${idUsuario}, ${coracaoClicker}, ${coracaoQuiz});
    `;
    console.log("Executando a instrução no SQL:" + instrucao);
    return database.executar(instrucao);
};

module.exports = {
    avaliar
};