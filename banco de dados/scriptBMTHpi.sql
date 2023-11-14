create database bmthPI;
use bmthPI;

create table dadosUsuario (
email varchar(45) primary key,
nome varchar(45) not null,
senha varchar(45) not null,
dtNasc date,
albumPreferido varchar(45),
dtCriacao varchar(15) not null);
select * from dadosUsuario;

create table forum (
idForum int,
titulo varchar(45),
post varchar(499),
fkId int,
fkEmail varchar(45),
constraint forumFkUsuario foreign key (fkEmail) references dadosUsuario(email),
primary key (idForum, fkEmail));

create table quiz (
idQuiz int,
acertos int,
fkId int,
fkEmail varchar(45),
primary key (idQuiz, fkEmail),
constraint quizFkUsuario foreign key (fkEmail) references dadosUsuario(email));

create table clicker (
idClicker int,
nivel int,
pontos decimal(15,2),
fkId int,
fkEmail varchar(45),
primary key (idClicker, fkEmail),
constraint clickerFkUsuario foreign key (fkEmail) references dadosUsuario(email));