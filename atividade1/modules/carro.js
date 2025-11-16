class Carro {
    constructor(marca, modelo, ano, cor, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.motor = motor;
    }

    descricao() {
        return `Carro: ${this.marca}\n Modelo: ${this.modelo}\n Ano: ${this.ano}\n Cor: ${this.cor}\n Motor: ${this.motor}`;
    }
}

module.exports = Carro;