const BONUS_GERENTE = 1000;
const BONUS_SUPERVISOR = 500;
const BONUS_OUTRO_CARGO = 200;
const DESCONTO_ALTO = 0.27;
const DESCONTO_MEDIO = 0.18;
const DESCONTO_BAIXO = 0.11;
const DESCONTO_FIXO = 300;
const LIMITE_ALTO = 5000;
const LIMITE_MEDIO = 3000;

function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
  const salarioBase = horasTrabalhadas * valorHora;

  let salarioComBonus;
  if (cargo === "gerente") {
    salarioComBonus = salarioBase + BONUS_GERENTE;
  } else if (cargo === "supervisor") {
    salarioComBonus = salarioBase + BONUS_SUPERVISOR;
  } else {
    salarioComBonus = salarioBase + BONUS_OUTRO_CARGO;
  }

  const salarioComDesconto = salarioComBonus - DESCONTO_FIXO;

  let salarioFinal;
  if (salarioComDesconto > LIMITE_ALTO) {
    salarioFinal = salarioComDesconto - salarioComDesconto * DESCONTO_ALTO;
  } else if (salarioComDesconto > LIMITE_MEDIO) {
    salarioFinal = salarioComDesconto - salarioComDesconto * DESCONTO_MEDIO;
  } else {
    salarioFinal = salarioComDesconto - salarioComDesconto * DESCONTO_BAIXO;
  }

  return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, "gerente");
console.log(`O salário final é: ${salario}`);
