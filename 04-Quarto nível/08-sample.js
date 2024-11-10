async function buscarPlanetaRecursivo(id) {
    const ID_INICIAL = 1; // Constante para o ID inicial do planeta

    try {
        const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);

        if (!resposta.ok) {
            console.log("Nenhum planeta encontrado para o ID:", id);
            return; // Condicional de parada
        }

        const planeta = await resposta.json();
        console.log(planeta.name);

        // Chamada recursiva com o próximo ID
        buscarPlanetaRecursivo(id + 1);
    } catch (erro) {
        console.error("Erro ao buscar planeta:", erro.message);
    }
}

buscarPlanetaRecursivo(ID_INICIAL);
