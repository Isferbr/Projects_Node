const calcularSalario = require('./modules/calculo');
console.log(calcularSalario(160, 25));

console.log("-------------------------------------");

const Carro = require('./modules/carro');

const meuCarro = new Carro("Honda", "Civic", 2020, "Prata", "2.0 Turbo");
console.log(meuCarro.descricao());

