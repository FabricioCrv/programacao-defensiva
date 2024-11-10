async function buscarVeiculosECalcularCusto() {
    try {
        const url = "https://swapi.dev/api/vehicles/";
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar veículos: ${resposta.statusText}`);
        }
        const dados = await resposta.json();
        const veiculosCaros = dados.results.filter((veiculo) =>
            parseInt(veiculo.cost_in_credits, 10) > "10000"
        );
        console.log("Veículos caros (mais de 10.000 créditos):");
        veiculosCaros.forEach((veiculo) => {
            console.log(`- ${veiculo.name}: ${veiculo.cost_in_credits} créditos`);
        });
        const custoTotal = veiculosCaros.reduce((total, veiculo) => {
            return total + parseInt(veiculo.cost_in_credits, 10);
        }, 0);
        console.log(`Custo total dos veículos caros: ${custoTotal} créditos`);
    } catch (erro) {
        console.error("Erro ao buscar veículos:", erro.message);
    }
}

buscarVeiculosECalcularCusto(); 
