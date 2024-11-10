const IDADE_MINIMA = 18;
const idade_usuario = 16;

function verificarSePodeDirigir(idade) {
    if (idade >= IDADE_MINIMA) {
        return "Pode dirigir";
    }
    return "Não pode dirigir";
}


console.log(verificarSePodeDirigir(idade_usuario));
