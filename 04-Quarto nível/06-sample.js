async function buscarNave(id) {
    try {
      const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);
      
      if (!resposta.ok) {
        throw new Error('Nave não encontrada.');
      }
  
      const nave = await resposta.json();
      console.log(nave.name); // Aqui você acessa a propriedade 'name' da nave
    } catch (erro) {
      console.error(erro.message); // Caso ocorra algum erro, ele será exibido no console
    }
  }
  
  buscarNave(10);
  