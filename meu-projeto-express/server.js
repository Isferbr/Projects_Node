const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Servidor rodando na url http://localhost:3000");
});

app.get("/", (requisicao, resposta) => {
    return resposta.send("Eu sou um Backend com NodeJS + Express");
});

