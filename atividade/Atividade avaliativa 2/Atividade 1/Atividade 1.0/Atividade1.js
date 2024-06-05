var fs = require('fs');
var input = fs.readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function handleInput(arr) {
    function processArray(inputArray) {
        let resultArray = []; // Array para armazenar os resultados
        
        for (let i = 0; i < inputArray.length; i++) { // Itera sobre cada elemento do array de entrada
            let num = Number(inputArray[i]); // Converte o elemento para número
            if (num <= 0) { // Condicional: verifica se o número é menor ou igual a zero
                resultArray.push(1); // Adiciona 1 ao array de resultados se a condição for verdadeira
            } else {
                resultArray.push(num); // Adiciona o número original ao array de resultados se a condição for falsa
            }
        }
        
        return resultArray; // Retorna o array de resultados
    }

    return processArray(arr); // Chama a função de processamento e retorna o resultado
}

// Processa os dados de entrada
const result = handleInput(lines);

// Imprime os resultados
for (let i = 0; i < result.length; i++) {
    console.log(`X[${i}] = ${result[i]}`);
}
