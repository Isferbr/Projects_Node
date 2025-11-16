const express = require('express');
const app = express();

// Array de produtos
let produtos = [
    { id: 1, nome: 'Produto A', preco: 10.0 },
    { id: 2, nome: 'Produto B', preco: 20.0 },
    { id: 3, nome: 'Produto C', preco: 30.0 },
];

app.use(express.json());

// GET /produtos - Retorna todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// GET /produtos/:id - Retorna um produto específico
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        res.status(200).json(produto);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado' });
        return;
    }
});

// POST /produtos - Adiciona um novo produto
app.post('/produtos', (req, res) => {
    const dados = req.body;

    if (!dados) {
        res.status(400).json({ mensagem: 'Dados inválidos!' });
        return;     
    }

    produtos.push(dados);
    res.status(201).json(dados);
});

// PUT /produtos/:id - Atualiza um produto existente
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const dadosAtualizados = req.body;

    let produtoExistente = produtos.find(p => p.id === id);

    if (!produtoExistente) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    produtoExistente = { ...produtoExistente, ...dadosAtualizados };

    produtos = produtos.map(produto => (produto.id === id ? produtoExistente : produto));

    res.status(200).json(produtoExistente);
});

// DELETE /produtos/:id - Remove um produto
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    let produtoExistente = produtos.find(produto => produto.id === id);

    if (!produtoExistente) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    produtos = produtos.filter(produto => produto.id !== id);

    res.status(200).json({ mensagem: 'Produto excluido com sucesso' });
});

app.listen(3000, () => {
    console.log('Meu servidor iniciou!');
});