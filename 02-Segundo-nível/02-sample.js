function verificarSePodeDirigir(idade) {
    if (idade >= 18) {
      return 'Pode dirigir';
    }
    return 'Não pode dirigir';
  }
  
  console.log(verificarSePodeDirigir(16));
  