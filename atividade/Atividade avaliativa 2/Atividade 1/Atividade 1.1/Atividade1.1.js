const fs = require('fs'); // Importa o módulo 'fs' para lidar com operações de arquivo

function lerEntrada() {
    return Number(fs.readFileSync('stdin', 'utf8').trim()); // Lê a entrada do usuário a partir do arquivo 'stdin' e converte para um número
}

function criarArray(valorInicial) {
    const arr = [valorInicial]; // Cria um array com o valor inicial fornecido
    Array.from({ length: 9 }, (_, i) => arr.push(arr[i] * 2)); // Gera os próximos valores do array multiplicando o valor anterior por 2
    return arr; // Retorna o array gerado
}

function principal() {
    const valorInicial = lerEntrada(); // Chama a função lerEntrada() para obter o valor inicial
    const arr = criarArray(valorInicial); // Chama a função criarArray() para gerar o array

    arr.forEach((valor, indice) => {
        console.log(`N[${indice}] = ${valor}`); // Imprime cada valor do array no formato 'N[indice] = valor'
    });
}

principal(); // Chama a função principal 'principal' para iniciar o programa
