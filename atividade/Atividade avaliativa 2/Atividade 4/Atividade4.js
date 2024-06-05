const fs = require('fs'); // Importa o módulo 'fs'

// Função que verifica se uma equação é uma equação de Turing
function verificarEquacaoTuring(equacao) {
    // Função para reverter uma string
    const reverterString = (str) => str.split('').reverse().join('');
    
    // Dividindo a equação em partes
    const [esquerda, direita] = equacao.split('=');
    const [a, b] = esquerda.split('+');

    // Revertendo os números
    const aRevertido = parseInt(reverterString(a), 10);
    const bRevertido = parseInt(reverterString(b), 10);
    const cRevertido = parseInt(reverterString(direita), 10);

    // Verificando a equação de Turing
    return (aRevertido + bRevertido === cRevertido) ? "Verdadeiro" : "Falso";
}

// Função para processar a entrada
function processarEntrada() {
    const entrada = fs.readFileSync('stdin', 'utf8').trim().split('\n');
    const resultados = [];
    let indice = 0;

    // Loop para processar cada equação até encontrar a equação de parada
    do {
        const equacao = entrada[indice].trim();
        resultados.push(verificarEquacaoTuring(equacao));
        indice++;
    } while (entrada[indice - 1] !== '0+0=0');

    return resultados;
}

// Função principal
function principal() {
    const resultados = processarEntrada();
    resultados.forEach(resultado => {
        console.log(resultado);
    });
}

// Chamada da função principal
principal();
