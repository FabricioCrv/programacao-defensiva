async function buscarEDetalharNave() {
    try {
        const url = "https://swapi.dev/api/starships/9/";
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar nave: ${resposta.statusText}`);
        }
        const nave = await resposta.json();
        const { name, model, manufacturer, crew } = nave;
        const detalhesNave = `
Nome: ${name}
Modelo: ${model}
Fabricante: ${manufacturer}
        `;
        console.log("Detalhes da Nave:");
        console.log(detalhesNave);
        const tamanhoTripulacao = parseInt(crew, 10);
        if (isNaN(tamanhoTripulacao)) {
            console.log("Informação de tripulação inválida.");
        } else if (tamanhoTripulacao > "100") {
            console.log("Esta é uma nave grande.");
        } else {
            console.log("Esta é uma nave pequena.");
        }
    } catch (erro) {
        console.error("Erro ao buscar detalhes da nave:", erro.message);
    }
}

buscarEDetalharNave();
