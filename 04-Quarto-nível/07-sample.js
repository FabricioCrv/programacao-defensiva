async function buscarEspecie() {
    const ID_ESPECIE = 1; // Constante para o ID da espécie

    try {
        const resposta = await fetch(`https://swapi.dev/api/species/${ID_ESPECIE}/`);

        if (!resposta.ok) {
            throw new Error("Espécie não encontrada.");
        }

        const especie = await resposta.json();
        console.log(especie.average_lifespan); // Exibe a expectativa média de vida
    } catch (erro) {
        console.error(erro.message);
    }
}

buscarEspecie();
