async function buscarEDetalharPlaneta(idPlaneta) {
    try {
        const url = `https://swapi.dev/api/planets/${idPlaneta}/`;
        const resposta = await fetch(url);

       
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar planeta: ${resposta.statusText}`);
        }

        const planeta = await resposta.json();

      
        const { name, climate, population } = planeta;

        
        const detalhesPlaneta = `
Nome: ${name}
Clima: ${climate}
População: ${population}
        `;
        console.log("Detalhes do Planeta:");
        console.log(detalhesPlaneta);

        
        const populacao = parseInt(population, 10);

        if (isNaN(populacao)) {
            console.log("Informação de população inválida.");
        } else if (populacao > 1000000) {
            console.log("Este planeta é muito populado.");
        } else {
            console.log("Este planeta tem uma população pequena.");
        }
    } catch (erro) {
        console.error("Erro ao buscar o planeta:", erro.message);
    }
}

buscarEDetalharPlaneta(1);
