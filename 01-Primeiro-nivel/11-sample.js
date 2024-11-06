class Usuario {
    constructor(nome, idade, tipo, outros) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.outros = outros; //data de criacao, ultimo login, checagem se esta ativo e tentativas de login
    }

    estarAtivo() {
        if (this.outros.ativo) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    ehAdmin() {
        if (this.tipo === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

//  verifica o número de usuários com a role de admin
function totalAdmins(users) {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].count === "admin") {
            count++;
        }
    }
    return count;
}

// verifica se o número de tentativas de login é excessivo
function loginTries(login, tentativasMax) {
    if (login.outros.tentativasLogin > tentativasMax) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

// verifica qual usuário logou mais recentemente
function loginMaisRecente(u1, u2) {
    if (u1.outros.ultimoLogin > u2.outros.ultimoLogin) {
        return `${u1.nome  } logou mais recentemente.`;
    } else {
        return `${u2.nome  } logou mais recentemente.`;
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o usuário foi criado recentemente
function usuarioRecente(user) {
    const now = new Date();
    if (now - user.outros.Criacao < "31536000000") {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const users = [
    new Usuario(
        "Carlos", 
        "25", 
        "admin", 
        { 
            Criacao:new Date("2023", "1", "15"),
            ultLogin:new Date("2024", "8", "1"),
            ativo: true,
            triesLogin:"100",
            pontos:"2" 
        }),
    new Usuario(
        "Ana", 
        "30", 
        "guest", 
        { 
            Criacao: new Date("2020", "4", "22"), 
            ultLogin: new Date("2024", "7", "31"), 
            ativo: true, 
            triesLogin: "50", 
            pontos: "3" 
        }),
    new Usuario(
        "José", 
        "29", 
        "admin", 
        { 
            Criacao: new Date("2022", "10", "5"),
            ultLogin: new Date("2024", "6", "10"), 
            ativo:false, 
            triesLogin: "200", 
            pontos:"5" 
        }),
    new Usuario(
        "Maria", 
        "35", 
        "guest", 
        { 
            Criacao:new Date("2021", "2", "10"),
            ultLogin: new Date("2023", "12", "25"),
            ativo: false,
            triesLogin: "80",
            pontos: "7" 
        })
];



console.log(`Usuários admin: ${  totalAdmins(users)}`);

users[0].estarAtivo();
users[1].ehAdmin();

const max_tentativas = 4;
loginTries(users[2], max_tentativas);

console.log(loginMaisRecente(users[0], users[3]));

usuarioRecente(users[3]);
