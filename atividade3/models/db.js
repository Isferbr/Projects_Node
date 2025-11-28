const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bt%452Of',
    database: 'bd'
});

conexao.connect((err) => {
    if (err) {
        console.log("Erro ao se conectar no MySQL:", err);
        return;
    } else {
        console.log("Conectado ao MySQL!");
    }
});

module.exports = conexao;