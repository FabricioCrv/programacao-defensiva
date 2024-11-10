const PORCENTAGEM_DESCONTO = 0.15;

function calcularDesconto(precoOriginal) {
    if (precoOriginal < 0) {
        return "O preço não pode ser negativo";
    }
    return precoOriginal - (precoOriginal * PORCENTAGEM_DESCONTO);
}

const precoFinal = calcularDesconto(100);
console.log(`Preço com desconto: ${  precoFinal}`);
