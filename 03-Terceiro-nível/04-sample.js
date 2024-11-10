async function buscarPersonagemENave(idPersonagem) {
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
            const tripulacao = parseInt(nave.crew, 10);
        } 
    } catch (erro) {
        console.error("Erro ao buscar o personagem ou sua nave:", erro.message);
    }
}
buscarPersonagemENave(1);
