/* escreva uma função que receba uma string e retorne a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços
*/
// primeira forma
function highestLetter(str) {
    // transformando toda a string em letras minúsculas 
    const lowerCaseString = str.toLowerCase();
    console.log(lowerCaseString);

    // transformando a string em um array
    const lettersArray = lowerCaseString.split('');
    console.log(lettersArray);
    
    // ordenando o array de letras em ordem alfabética
    const sortedArray = lettersArray.sort();
    console.log(sortedArray);

    // retornando a maior letra do array que esta em ordem alfabética
    // sortedArray.length -1 = o comprimento tem que ser a partir de -1 pois o array começa na posição 0
    return sortedArray[sortedArray.length -1]
}

console.log(highestLetter('THE INFINITY castlle'))
console.log(highestLetter('bleACH the INFINITY war'))

console.log('==== Segunda forma#### '); 
function highestLetter1(str) {
    // transformando toda a string em letras minúsculas,  transformando em um array, ordenando o array em ordem alfabética
    const sortedArray = str.toLowerCase().split('').sort();
    console.log(sortedArray);

    // retornando a maior letra do array que esta em ordem alfabética
    // sortedArray.length -1 = o comprimento tem que ser a partir de -1 pois o array começa na posição 0
    return sortedArray[sortedArray.length -1]
}

console.log(highestLetter1('Arc'))
console.log(highestLetter1('ONE pieCE'))