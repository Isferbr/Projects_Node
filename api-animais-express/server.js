const express = require('express');
const app = express();

let animais = [
    { id: 1, nome: 'Rex', raca: 'Pastor Alemão', idade: 5 },
    { id: 2, nome: 'Mia', raca: 'Siamês', idade: 3 },
    { id: 3, nome: 'Bolinha', raca: 'Poodle', idade: 2 },
    { id: 4, nome: 'Luna', raca: 'Labrador', idade: 4 },
];

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Bem-vindo à API de Animais!');
});

// Rota para listar todos os animais
app.get('/animais', (req, res) => {
    const { nome, idade } = req.query;

    let resultado = animais;

    if (nome) {
        resultado = resultado.filter((animal) => animal.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    if (idade) {
        const idadeValue = parseInt(idade, 10);
        resultado = resultado.filter((animal) => animal.idade === idadeValue);
    }

    res.json(resultado);
});

// Rota para obter um animal por ID
app.get('/animais/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const animal = animais.find((a) => a.id === id);

    if (animal) {
        res.status(200).json(animal);
    } else {
        res.status(404).json({ mensagem: 'Animal não encontrado' });
    }
});

// Rota para adicionar um novo animal
app.post('/animais', (req, res) => {
    let dados = req.body;

    if (!dados) {
        res.status(400).json({ mensagem: 'Dados inválidos!' });
        return;     
    }

    animais.push(dados);
    res.status(201).json(dados);
});

// Rota para atualizar um animal existente
app.put('/animais/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const dadosAtualizados = req.body;

    let animalExistente = animais.find((a) => a.id === id);

    if (!animalExistente) {
        return res.status(400).send({ mensagem: 'Animal não encontrado!' });
    }

    animalExistente = { ...animalExistente, ...dadosAtualizados };

    animais = animais.map((animal) => animal.id === id ? animalExistente : animal
    );

    res.status(200).json(animalExistente);
});

// Rota para deletar um animal por ID
app.delete('/animais/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    let animalExistente = animais.find((animal) => animal.id === id);

    if (!animalExistente) {
        return res.status(400).send({ mensagem: 'Animal não encontrado!' });
    }

    animais = animais.filter((animal) => animal.id !== id);

    res.status(200).json({ mensagem: 'Animal excluido com sucesso!' });
});

app.listen(3000, () => {
    console.log('Meu servidor iniciou!');
});