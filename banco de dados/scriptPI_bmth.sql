create database BMTH;
use BMTH;

create table dadosUsuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(50) unique,
senha varchar(45),
dtNasc date,
albumPreferido varchar(45),
dtCriacao varchar(10)
);

create table Quiz(
idQuiz int auto_increment,
acertos int,
tempo int,
fkUsuario int,
primary key(idQuiz, fkUsuario)
);
alter table Quiz add constraint fkUsuarioQuiz foreign key (fkUsuario) references dadosUsuario (idUsuario);

create table Clicker(
idClicker int auto_increment,
totalCompras int,
pontos decimal(22,2),
fkUsuario int,
primary key (idClicker, fkUsuario)
);
alter table Clicker add constraint fkUsuarioClicker foreign key (fkUsuario) references dadosUsuario (idUsuario);

create table avaliacao(
fkUsuario int primary key,
avaliacaoClicker int,
avaliacaoQuiz int,
constraint fkUsuarioAvaliacoes foreign key (fkUsuario) references dadosUsuario (idUsuario)
);

show tables;

desc dadosUsuario;
desc Clicker;
desc Quiz;
desc avaliacao;

select * from dadosUsuario;
select * from Clicker;
select * from Quiz;
select * from avaliacao;

SELECT u.idUsuario, u.nome, u.email, u.senha, u.dtNasc, u.albumPreferido, u.dtCriacao, c.pontos, c.totalCompras, q.acertos, q.tempo, a.avaliacaoQuiz, a.avaliacaoClicker FROM dadosUsuario u left join Clicker c on u.idUsuario = c.fkUsuario left join Quiz q on u.idUsuario = q.fkUsuario left join avaliacao a on u.idUsuario = a.fkUsuario order by u.idUsuario desc;

SELECT u.idUsuario, u.nome, u.email, u.senha, u.dtNasc, u.albumPreferido, u.dtCriacao, c.pontos, c.totalCompras, q.acertos, q.tempo, a.avaliacaoClicker, a.avaliacaoQuiz FROM dadosUsuario u left join Clicker c on u.idUsuario = c.fkUsuario left join Quiz q on u.idUsuario = q.fkUsuario left join avaliacao a on u.idUsuario = a.fkUsuario order by u.idUsuario desc;

SELECT albumPreferido, count(albumPreferido) qtd FROM dadosUsuario GROUP BY albumPreferido order by qtd desc LIMIT 5;

select max(q.acertos) acertos, min(q.tempo) tempo, u.nome FROM Quiz q JOIN dadosUsuario u ON q.fkUsuario = u.idUsuario GROUP BY u.idUsuario order by acertos desc limit 5;

select max(c.pontos) pontos, u.nome from Clicker c join dadosUsuario u on u.idUsuario = c.fkUsuario group by u.nome order by pontos desc limit 5;
select max(c.totalCompras) upgrade, u.nome from Clicker c join dadosUsuario u on u.idUsuario = c.fkusuario group by u.nome order by upgrade desc limit 5;

select c.pontos, c.totalCompras upgrades, u.nome from dadosUsuario u join Clicker c on u.idUsuario = c.fkUsuario;
select max(c.pontos) pontos, max(c.totalCompras) upgrades, u.nome from dadosUsuario u join Clicker c on u.idUsuario = c.fkUsuario group by u.nome order by pontos desc;



select * from dadosUsuario u left join avaliacao a on u.idUsuario = a.fkUsuario;