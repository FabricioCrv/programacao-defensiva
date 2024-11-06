
const pessoa = { nome: "Maria", idade: "28" };

const maior_idade = 18;

function deMaior(pessoa) {
    return pessoa.idade >= maior_idade;
}

console.log(deMaior(pessoa));
