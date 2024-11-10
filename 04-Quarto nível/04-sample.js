const ID_LUKE = 1;

async function buscarPersonagem(id) {
    const url = `https://swapi.dev/api/people/${id}/`;
    const resposta = await fetch(url);
    const personagem = await resposta.json();
    console.log(personagem.name);
}

buscarPersonagem(ID_LUKE);
