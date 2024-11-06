function numerosPares(num) {
    const num_pares = [];
    const par = 2;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % par === 0) {
            num_pares.push(num[i]);
        }
    }
    return num_pares;
}

const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const n5 = 5;
const n6 = 6;

const numeros = [n1, n2, n3, n4, n5, n6];
const obter_pares = numerosPares(numeros);
console.log(obter_pares);
