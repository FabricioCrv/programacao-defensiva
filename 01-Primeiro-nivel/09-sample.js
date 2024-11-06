class Gestor {
    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }
}

const nome = "Lucas";
const idade = 40;

const p = new Gestor(nome, idade);

console.log(p.nome);
console.log(p.idade);
