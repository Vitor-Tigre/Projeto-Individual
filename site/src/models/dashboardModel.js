var database = require("../database/config");

function album() {
    var instrucao = `
    SELECT albumPreferido, count(albumPreferido) qtd FROM dadosUsuario GROUP BY albumPreferido order by qtd desc LIMIT 5;
    `;
    console.log("Executando a instrução no SQL:" + instrucao);
    return database.executar(instrucao);
};

function acertos() {
    var instrucao = `
    select max(q.acertos) acertos, min(q.tempo) tempo, u.nome FROM Quiz q JOIN dadosUsuario u ON q.fkUsuario = u.idUsuario GROUP BY u.idUsuario order by acertos desc limit 5;
    `;
    console.log("Executando a instrução no SQL:" + instrucao);
    return database.executar(instrucao);
};

function pontos() {
    var instrucao = `
    select max(c.pontos) pontos, max(c.totalCompras) upgrades, u.nome from dadosUsuario u join Clicker c on u.idUsuario = c.fkUsuario group by u.nome order by pontos desc limit 5;
    `;
    console.log("Executando a instrução no SQL:" + instrucao);
    return database.executar(instrucao);
};


module.exports = {
    album,
    acertos,
    pontos
};