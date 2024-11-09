const IDADE_MINIMA = 18;

function verificarSePodeDirigir(idade) {
  if (idade >= IDADE_MINIMA) {
    return "Pode dirigir";
  }
  return "Não pode dirigir";
}

console.log(verificarSePodeDirigir(16));
