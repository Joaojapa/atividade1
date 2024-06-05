const fs = require('fs'); // Importa o módulo 'fs' para lidar com operações de arquivo

function determinarDirecaoFinal(comandos) {
    const direcoes = ['N', 'L', 'S', 'O']; // Define um array com as direções possíveis: Norte, Leste, Sul, Oeste
    let indiceDirecaoAtual = 0; // Define o índice da direção atual como 0 (Norte)

    for (let comando of comandos) {
        // Para cada comando na lista de comandos
        switch(comando) {
            case 'E':
                indiceDirecaoAtual = (indiceDirecaoAtual + 3) % 4; // Se o comando for 'E' (esquerda), atualiza o índice da direção atual para a esquerda
                break;
            case 'D':
                indiceDirecaoAtual = (indiceDirecaoAtual + 1) % 4; // Se o comando for 'D' (direita), atualiza o índice da direção atual para a direita
                break;
        }
    }

    return direcoes[indiceDirecaoAtual]; // Retorna a direção final com base no índice da direção atual
}

function lerEntrada() {
    return fs.readFileSync('stdin', 'utf8'); // Lê a entrada do usuário a partir do arquivo 'stdin'
}

function processarEntrada() {
    const entrada = lerEntrada(); // Chama a função lerEntrada() para obter a entrada do usuário
    const linhas = entrada.split('\n'); // Divide a entrada em linhas
    let indice = 0; // Define o índice inicial como 0
    let resultado = '';

    do {
        let n = parseInt(linhas[indice]); // Converte a linha atual para um número inteiro
        if (n === 0) return console.log(resultado.trim()); // Se o número for 0, encerra a função e exibe o resultado final

        let comandos = linhas[indice + 1].trim(); // Obtém os comandos da próxima linha e remove espaços em branco
        let direcaoFinal = determinarDirecaoFinal(comandos); // Obtém a direção final com base nos comandos
        resultado += direcaoFinal + '\n'; // Adiciona a direção final ao resultado

        indice += 2; // Incrementa o índice em 2 para pular para a próxima entrada
    } while (indice < linhas.length); // Repete até que todas as linhas tenham sido processadas

    console.log(resultado.trim()); // Exibe o resultado final removendo espaços em branco desnecessários
}

processarEntrada(); // Chama a função principal para processar a entrada
