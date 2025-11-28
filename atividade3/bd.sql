-- Crie o banco de dados
CREATE DATABASE bd;

-- Selecione o banco de dados
USE bd;

-- Cria a tabela de usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT  PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

