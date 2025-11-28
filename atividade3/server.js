const express = require('express');
const app = express();
const db = require('./models/db');

app.use(express.json());

// Rota para cadastrar usuário
app.post('/usuarios', (req, res) => {
    const { nome, senha } = req.body;

    const sql = "INSERT INTO usuarios (nome, senha) VALUES (?, ?)";

    db.query(sql, [nome, senha], (err, result) => {
        if (err) {
            return res.status(500).json({ erro: err });
        }
        res.json({
            mensagem: "Usuário cadastrado com sucesso!",
            id: result.insertId
        });
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na url http://localhost:3000");
});