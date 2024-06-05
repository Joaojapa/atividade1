const fs = require('fs'); // Importa o módulo 'fs' para lidar com operações de arquivo

function lerEntrada() { // Define uma função chamada 'lerEntrada' para ler a entrada do usuário
    return fs.readFileSync('stdin', 'utf8').trim().split('\n'); // Lê a entrada do usuário e a retorna como um array de linhas
}

function criarMatrizFloresta(linhas, tamanho) { // Define uma função chamada 'criarMatrizFloresta' para criar uma matriz de floresta
    let floresta = []; // Cria um array vazio para representar a floresta
    for (let i = 0; i < tamanho; i++) { // Loop para cada linha da matriz
        floresta.push(linhas[i].split(' ').map(Number)); // Divide cada linha em números e adiciona ao array 'floresta'
    }
    return floresta; // Retorna a matriz de floresta
}

function obterCelulasVisitadas(linhas, indiceInicio, numVisitas) { // Define uma função chamada 'obterCelulasVisitadas' para obter as células visitadas
    let celulasVisitadas = []; // Cria um array vazio para armazenar as células visitadas
    for (let i = 0; i < numVisitas; i++) { // Loop para cada visita
        let [x, y] = linhas[indiceInicio + i].split(' ').map(Number); // Divide a linha em coordenadas x e y
        celulasVisitadas.push([x - 1, y - 1]); // Adiciona as coordenadas ao array 'celulasVisitadas'
    }
    return celulasVisitadas; // Retorna as células visitadas
}

function contarEspeciesUnicas(floresta, celulasVisitadas) { // Define uma função chamada 'contarEspeciesUnicas' para contar as espécies únicas
    let especiesUnicas = []; // Cria um array vazio para armazenar as espécies únicas
    for (let [x, y] of celulasVisitadas) { // Loop para cada célula visitada
        if (floresta[x] && floresta[x][y] !== undefined) { // Verifica se a célula existe na matriz de floresta
            if (!especiesUnicas.includes(floresta[x][y])) { // Verifica se a espécie não está no array de espécies únicas
                especiesUnicas.push(floresta[x][y]); // Adiciona a espécie única ao array 'especiesUnicas'
            }
        }
    }
    return especiesUnicas.length; // Retorna o número de espécies únicas
}

function processarEntrada() { // Define uma função chamada 'processarEntrada' para processar a entrada
    const linhas = lerEntrada(); // Lê a entrada do usuário e armazena em 'linhas'
    let indice = 0; // Inicializa o índice

    while (indice < linhas.length) { // Loop enquanto o índice for menor que o número de linhas
        const N = parseInt(linhas[indice].trim()); // Converte a primeira linha em um número inteiro
        if (N === 0) break; // Se N for igual a 0, encerra o loop

        const floresta = criarMatrizFloresta(linhas.slice(indice + 1, indice + 1 + N), N); // Cria a matriz de floresta
        const celulasVisitadas = obterCelulasVisitadas(linhas, indice + 1 + N, 2 * N); // Obtém as células visitadas

        const numEspeciesUnicas = contarEspeciesUnicas(floresta, celulasVisitadas); // Conta as espécies únicas
        console.log(numEspeciesUnicas); // Imprime o número de espécies únicas

        indice += 1 + N + 2 * N; // Atualiza o índice para a próxima iteração
    }
}

processarEntrada(); // Chama a função 'processarEntrada' para iniciar o processamento da entrada
