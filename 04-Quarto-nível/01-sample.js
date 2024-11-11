const PLANETA_ID = 1;

async function buscarPlaneta() {
    const resposta = await fetch(`https://swapi.dev/api/planets/${PLANETA_ID}/`);
    const planeta = await resposta.json();
    console.log(planeta.name);

    exibirNomePlaneta(planeta.name);
}

function exibirNomePlaneta(nome) {
    console.log(`Nome do planeta: ${nome}`);
}

buscarPlaneta();
