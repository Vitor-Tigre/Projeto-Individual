var database = require("../database/config");

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, email, senha, dtNasc, albumPreferido, dtCriacao FROM dadosUsuario WHERE email = '${email}' AND senha = '${senha}';
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

function quiz(acertos, tempo, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quiz():", acertos, tempo);

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