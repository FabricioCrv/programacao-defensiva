// Constantes para evitar números mágicos
const MULTIPLICADOR = 3;
const ID_USUARIO_JOAO = 42;
const IDADE_JOAO = 25;
const ID_USUARIO_MARIA = 43;
const IDADE_MARIA = 28;
const MAIORIDADE = 18;
const ARRAY_ITENS = ["10", "20", "30", "40", "50"];
const ARRAY_OUTROS_ITENS = ["5", "7", "9", "11"];
const OPERACAO_SOMA = 1;
const OPERACAO_MULTIPLICACAO = 2;
const OPERACAO_SUBTRACAO = 3;
const VALOR_PAR = 2;
const VALOR_IMPAR = 3;
const LIMITE_DADOS = 10;

function principal() {
    const itens = ARRAY_ITENS;
    let total = 0;
    
    const x = OPERACAO_SOMA;
    const y = OPERACAO_MULTIPLICACAO;

    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * MULTIPLICADOR;
    }

    const usuario = obterUsuario(ID_USUARIO_JOAO);

    if (x === OPERACAO_SOMA && y === OPERACAO_MULTIPLICACAO && usuario.ativo === 1) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

function obterUsuario(id) {
    if (id === ID_USUARIO_JOAO) {
        return {
            id: ID_USUARIO_JOAO,
            nome: "João Silva",
            idade: IDADE_JOAO,
            ativo: 1
        };
    } else if (id === ID_USUARIO_MARIA) {
        return {
            id: ID_USUARIO_MARIA,
            nome: "Maria Souza",
            idade: IDADE_MARIA,
            ativo: 0
        };
    } else {
        console.log("Usuário não encontrado");
        return null;
    }
}

function atualizarDados(usuario) {
    if (usuario !== null && usuario.idade > MAIORIDADE) {
        console.log("Atualizando usuário:", usuario.id);
        function salvarDados() {
            console.log("Dados salvos com sucesso!");
        }
        salvarDados();

        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function calcular(a, b, c) {
    let d = 0;
    switch (a) {
        case OPERACAO_SOMA:
            d = b + c;
            break;
        case OPERACAO_MULTIPLICACAO:
            d = b * c;
            break;
        case OPERACAO_SUBTRACAO:
            d = b - c;
            break;
        default:
            d = b / c;
    }

    const e = d.toString().split("").reverse().join("");
    console.log("String invertida:", e);
    return e;
}

function processarDados(n) {
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
        resultado += i % VALOR_PAR === 0 ? i : -i;
    }
    console.log("Resultado do processamento:", resultado);

    exibirDados();
    return resultado;
}

function exibirDados() {
    const dados = ["Valor 1", "Valor 2", "Valor 3"];
    for (let i = 0; i < dados.length; i++) {
        console.log("Dados:", dados[i]);
    }
}

function funcao() {
    const itens = ARRAY_OUTROS_ITENS;
    let total = 0;

    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * MULTIPLICADOR;
    }

    mostrarInfo();
    console.log("Cálculo total:", total);
    return total;
}

function mostrarInfo() {
    const valores = ["Dado 1", "Dado 2", "Dado 3"];
    for (let j = 0; j < valores.length; j++) {
        console.log("Info:", valores[j]);
    }
}

// Chamadas das funções principais
principal();
console.log("Resultado do cálculo:", calcular(OPERACAO_SOMA, VALOR_PAR, VALOR_IMPAR));
console.log("Resultado do processamento de dados:", processarDados(LIMITE_DADOS));
console.log("Resultado da função:", funcao());
