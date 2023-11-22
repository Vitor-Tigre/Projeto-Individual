create database BMTH;
use BMTH;

create table dadosUsuario(
idDados int primary key,
nome varchar(45) not null,
email varchar(45) not null,
senha varchar(45) not null
);
desc dadosUsuario;

create table perfilUsuario(
idPerfil int,
fkDados int,
idade int not null,
pronome varchar(10),
primary key (idPerfil, fkDados)
);
desc perfilUsuario;
