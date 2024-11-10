const ID_PERSONAGEM = 1000000000000;

async function buscarPersonagem() {
    try {
        const resposta = await fetch(`https://swapi.dev/api/people/${ID_PERSONAGEM}/`);

        if (!resposta.ok) {
            throw new Error("Personagem não encontrado.");
        }

        const personagem = await resposta.json();
        console.log(personagem.name);
    } catch (erro) {
        console.error(erro.message);
    }
}

buscarPersonagem();
