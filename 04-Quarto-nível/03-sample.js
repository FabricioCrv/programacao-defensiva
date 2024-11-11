const DADOS_LUKE = "{\"name\": \"Luke\", \"idade\": 23}";

async function buscarDados() {
    const personagem = JSON.parse(DADOS_LUKE);
    console.log(personagem.name);
}

buscarDados();
