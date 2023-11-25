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

create table Clicker(
idClicker int auto_increment,
totalCompras int,
pontos decimal(22,2),
fkUsuario int,
primary key (idClicker, fkUsuario)
);

desc dadosUsuario;
desc Clicker;
desc Quiz;

select * from dadosUsuario;
select * from Clicker;
select * from Quiz;