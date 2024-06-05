const fs = require('fs'); // Importa o módulo 'fs' que permite a leitura e escrita de arquivos.

function gerarMatriz(tamanho) {
    let matriz = []; // Cria uma matriz vazia.

    for (let linha = 0; linha < tamanho; linha++) {
        let novaLinha = []; // Cria uma linha vazia.

        for (let coluna = 0; coluna < tamanho; coluna++) {
            if (linha === coluna) {
                novaLinha.push(1); // Se o índice da linha for igual ao índice da coluna, adiciona o número 1 à linha.
            } else if (linha + coluna === tamanho - 1) {
                novaLinha.push(2); // Se a soma do índice da linha com o índice da coluna for igual a N - 1, adiciona o número 2 à linha.
            } else {
                novaLinha.push(3); // Caso contrário, adiciona o número 3 à linha.
            }
        }
        matriz.push(novaLinha); // Adiciona a linha à matriz.
    }

    return matriz; // Retorna a matriz criada.
}

function lerEProcessarEntrada() {
    const entrada = fs.readFileSync('stdin', 'utf8').trim().split('\n'); // Lê o arquivo de entrada e armazena o conteúdo em uma variável chamada 'entrada'.
    let indice = 0; // Inicializa o índice como 0.

    while (indice < entrada.length) {
        const N = parseInt(entrada[indice].trim()); // Converte o valor da linha atual do arquivo de entrada para um número inteiro.

        if (N >= 3 && N <= 70) {
            const matriz = gerarMatriz(N); // Chama a função 'gerarMatriz' para criar uma matriz com base no valor de N.

            for (let linha of matriz) {
                console.log(linha.join('')); // Imprime cada linha da matriz no console, separando os elementos por espaço.
            }
        }

        indice++; // Incrementa o índice para avançar para a próxima linha do arquivo de entrada.
    }
}

lerEProcessarEntrada(); // Chama a função 'lerEProcessarEntrada' para iniciar o processamento do arquivo de entrada.
