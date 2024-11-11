try {
    const urlPersonagem = `https://swapi.dev/api/people/${idPersonagem}/`;
    const respostaPersonagem = await fetch(urlPersonagem);
    
    if (!respostaPersonagem.ok) {
        throw new Error(`Erro ao buscar personagem: ${respostaPersonagem.statusText}`);
    }
    const personagem = await respostaPersonagem.json();
    if (personagem.starships.length > 0) {
        const urlNave = personagem.starships[0];
        const respostaNave = await fetch(urlNave);
        
        if (!respostaNave.ok) {
            throw new Error(`Erro ao buscar nave: ${respostaNave.statusText}`);
        }
        const nave = await respostaNave.json();
        
        const tripulacao_grande = 100;

        const tripulacao = parseInt(nave.crew, 10);
        if (isNaN(tripulacao)) {
            console.log(`Informação de tripulação inválida para a nave ${nave.name}.`);
        } else if (tripulacao > tripulacao_grande) {
            console.log(`A nave ${nave.name} é considerada grande com ${tripulacao} tripulantes.`);
        } else {
            console.log(`A nave ${nave.name} é pequena com ${tripulacao} tripulantes.`);
        }
    } else {
        console.log(`${personagem.name} não possui naves registradas.`);
    }
} 
catch (erro) {
    console.error("Erro ao buscar o personagem ou sua nave:", erro.message);
}

buscarPersonagemENave(1);
