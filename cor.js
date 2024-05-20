let n = 7;
let m = (7 + 1) / 2; // m = 4

let matriz = [];

for (let i = 1; i <= n; i++) {
    matriz[i] = [];
    for (let j = 1; j <= n; j++) {
        if ((par(i) && par(j)) && ((i - j === 0) || ((i + j) === (n + 1)) || (i === m) || (j === m))) {
            matriz[i][j] = "preto";
        } else {
            matriz[i][j] = "branco";
        }
    }
}

// Função para verificar se um número é par
function par(num) {
    return num % 2 === 0;
}

// Exibindo a matriz
for (let i = 1; i <= n; i++) {
    console.log(matriz[i].join(" "));
}
