var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT u.idUsuario, u.nome, u.email, u.senha, u.dtNasc, u.albumPreferido, u.dtCriacao, c.pontos, c.totalCompras, q.acertos, q.tempo, a.avaliacaoQuiz, a.avaliacaoClicker FROM dadosUsuario u left join Clicker c on u.idUsuario = c.fkUsuario left join Quiz q on u.idUsuario = q.fkUsuario left join avaliacao a on u.idUsuario = a.fkUsuario WHERE email = '${email}' AND senha = '${senha}' order by u.idUsuario desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
};

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, dtNasc, albumPreferido, dtCriacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO dadosUsuario (nome, email, senha, dtNasc, albumPreferido, dtCriacao) VALUES ('${nome}', '${email}', '${senha}', '${dtNasc}', '${albumPreferido}', '${dtCriacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
};

function clicker(pontos, totalCompras, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function clicker():", pontos, totalCompras);

    var instrucao = `
        INSERT INTO Clicker (totalCompras, pontos, fkUsuario) VALUES (${totalCompras}, ${pontos}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
};

function quiz(acertos, segundosTimer, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quiz():", acertos, segundosTimer);

    var instrucao = `
        INSERT INTO Quiz (acertos, tempo, fkUsuario) VALUES (${acertos}, ${segundosTimer}, ${idUsuario});
    `
    console.log("Executando a instrução SQL: /n" + instrucao);
    return database.executar(instrucao);
};

module.exports = {
    autenticar,
    cadastrar,
    clicker,
    quiz
};