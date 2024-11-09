const VALOR_POR_KM = 10;

function calcularFrete(distancia) {
  if (distancia < 0) {
    return "A distância não pode ser negativa";
  }
  return distancia * VALOR_POR_KM;
}

const frete = calcularFrete(50);
console.log(`O valor do frete é: ${frete}`);
