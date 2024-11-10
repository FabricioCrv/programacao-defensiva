async function buscarEFiltrarPessoas() {
    try {
        const url = "https://swapi.dev/api/people/";
        const resposta = await fetch(url);

        
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar pessoas: ${resposta.statusText}`);
        }

        const dados = await resposta.json();

      
        const pessoasComL = dados.results.filter((pessoa) =>
            pessoa.name.startsWith("L")
        );

        console.log("Pessoas cujo nome começa com L:");
        pessoasComL.forEach((pessoa) => {
            console.log(pessoa.name);
        });

        console.log(`Total de pessoas encontradas: ${dados.results.length}`);
    } catch (erro) {
        console.error("Erro ao buscar pessoas:", erro.message);
    }
}

buscarEFiltrarPessoas();
