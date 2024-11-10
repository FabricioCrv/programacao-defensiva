const VALOR_POR_KM = 10;
const valor_frete = 50;

function calcularFrete(distancia) {
    if (distancia < 0) {
        return "A distância não pode ser negativa";
    }
    return distancia * VALOR_POR_KM;
}



const frete = calcularFrete(valor_frete);
console.log(`O valor do frete é: ${frete}`);
