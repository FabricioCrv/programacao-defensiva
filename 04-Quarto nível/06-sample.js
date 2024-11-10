async function buscarNave(id) {
    try {
        const resposta = await fetch(`https://swapi.dev/api/starships/${id}/`);

        if (!resposta.ok) {
            throw new Error("Nave não encontrada.");
        }

        const nave = await resposta.json();
        console.log(nave.name); 
    } catch (erro) {
        console.error(erro.message); 
    }
}

const ID_NAVE = 10;
buscarNave(ID_NAVE);
