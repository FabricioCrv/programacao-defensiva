const SENHA_CORRETA = "12345";
const MAX_TENTATIVAS = 3;

function tentarLogin(senha) {
    let tentativas = 0;

    while (tentativas < MAX_TENTATIVAS) {
        if (senha === SENHA_CORRETA) {
            return "Login efetuado com sucesso!";
        }
        tentativas++;
    }

    return "Tentativas de login excedidas.";
}

console.log(tentarLogin("123"));
