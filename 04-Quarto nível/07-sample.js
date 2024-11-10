async function buscarEspecie() {
    try {
      const resposta = await fetch("https://swapi.dev/api/species/1/");
      
      if (!resposta.ok) {
        throw new Error('Espécie não encontrada.');
      }
  
      const especie = await resposta.json();
      console.log(especie.average_lifespan); // Agora apenas exibe o valor numérico
    } catch (erro) {
      console.error(erro.message);
    }
  }
  
  buscarEspecie();
  