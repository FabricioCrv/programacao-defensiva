async function buscarFilme() {
    try {
      const resposta = await fetch('https://swapi.dev/api/films/1/');
      if (!resposta.ok) {
        throw new Error('Erro ao buscar filme');
      }
  
      const filme = await resposta.json();
      console.log(filme.title.toUpperCase());
    } catch (erro) {
      console.error(erro.message);
    }
  }
  
  buscarFilme();
  