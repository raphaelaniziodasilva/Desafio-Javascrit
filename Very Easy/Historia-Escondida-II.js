/* Escreva uma função que recebe uma string e retorna cada palavra da string invertida e em letras minúsculas, porém com as palavras na mesma ordem. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços
*/

// primeira forma
function invert(str) {
    // precisamos separar a string em palavras para podermos manipular cada palavra separadamente

    // vamos converter a string em um array de várias palavras
    const wordsArray = str.split(' ')

    // agora vamos inverter cada string desse array  
    const invertedWords = wordsArray.map((word) => {
        // vamos transformar cada palavra em letras minúsculas
        const lowerCaseWord = word.toLowerCase();

        // vamos retornar a palavra invertida

        // vamos converter a palavra para um array de caracteres
        // reverse = vai inverter a palavra e join = vai transformar de volta para string
        return lowerCaseWord.split('').reverse().join('')
    })

    return invertedWords.join(' ')
}

console.log(invert('Arc'))
console.log(invert('ONE pieCE'))

// segunda forma
function inverterPalavras(string) {
    // Dividir a string em palavras
    let palavras = string.split(" ");

    // Inverter e converter cada palavra em letras minúsculas
    let palavrasInvertidas = palavras.map(palavra => {
    return palavra.split("").reverse().join("").toLowerCase();
    });

    // Juntar as palavras novamente em uma string
    let stringInvertida = palavrasInvertidas.join(" ");

    return stringInvertida;
}

console.log(inverterPalavras('Zoro'))
console.log(inverterPalavras('Sanji'))