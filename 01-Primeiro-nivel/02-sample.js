const account = true;

function verifyAccount(acc) {
    if (account && acc.isAdmin) {
        console.log("Acesso permitido ao administrador.");
    } else {
        console.log("Acesso negado.");
    }
}

const user = { nome: "João", admin: true };
verifyAccount(user);
