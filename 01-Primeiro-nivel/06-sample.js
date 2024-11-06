const username = "Pedro";
const userAge = 25;
const isActive = true;

function userStatus(username, userAge, isActive) {
    if (isActive) {
        console.log(`${username  } tem ${  userAge  } anos e está ativo.`);
    } else {
        console.log(`${username  } está inativo.`);
    }
}

userStatus(username, userAge, isActive);
