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

create table avaliacoes(
idAvaliacao int,
avaliacaoClicker int,
avaliacaoQuiz int,
fkUsuario int,
primary key (idAvaliacao, fkusuario),
constraint fkUsuarioAvaliacoes foreign key (fkUsuario) references dadosUsuario (idUsuario)
);

desc dadosUsuario;
desc Clicker;
desc Quiz;

select * from dadosUsuario;
select * from Clicker;
select * from Quiz;
select u.idUsuario, u.nome, c.pontos 'Pontos do Clicker', c.totalCompras 'Total de upgrades comprados', q.acertos 'Acertos no quiz', q.tempo 'Segundos para terminar' from dadosUsuario u left join Clicker c on u.idUsuario = c.fkUsuario join Quiz q on u.idUsuario = q.fkUsuario;