function calcularSalario(horasTrabalhadas, valorPorHora) {
    /*
    if (horasTrabalhadas < 0 || valorPorHora < 0) {
        throw new Error("Horas trabalhadas e valor por horas devem ser positivos.")
    }*/

    const salario = horasTrabalhadas * valorPorHora;
    return `O salário do funcionário é: R$ ${salario.toFixed(2)}`;
}

module.exports = calcularSalario;