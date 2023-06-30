/* escreva uma função que recebe um número e verifica se ele é um código de indentificação válido segundo as regras de criação do digito verificador. A criação do digito verificador funciona da seguinte forma: 

1. some os dígitos das posições pares (impares se estiver contando a partir de 1)
2. multiplique esse resultado por 3
3. some os dígitos das posições ímpares (pares se estiver contando a partir de 1) do número original e então some esse resultado so resultado do passo anterior
4. encontre o resto da divisão do resultado do passo anterior por 10
5. se o resto da divisão for 0, o digito verificador é 0, do contrário o dígito verificador e 10 - resto
*/

// gerando o digito verificador a partir de um conjunto de números
function generateDigit(arr) {
    // precisamos somar os números das posições pares
    const step1 = arr.reduce((accum, current, index) => {
        return index === 0 || index %2 === 0 ? accum + current: accum
    }, 0)
    // console.log(step1);

    // multiplicando por 3
    const step2 = step1 * 3
    // console.log(step2)

    // precisamos somar os números das posições impares
    const step3 = step2 + arr.reduce((accum, current, index) => {
        return index %2 !== 0 ? accum + current : accum
    }, 0)
    // console.log(step3);

    // verificando se o step3 e diferente de 0 se o resto da divisão for 0, o digito verificador é 0, do contrário o dígito verificador e 10 - resto
    return step3 %10 !== 0 ? 10 - step3 %10 : 0
}

// verificando o digito
function verifycode(code) {
    // transformando o codigo em um array de numeros
    const numberArray = code.toString().split('').map(Number);
    // console.log(numberArray);

    // pegando todos os elementos do array ate a penultima posição
    const numberArrayWithtoutDigit = numberArray.slice(0, -1);
    // console.log(numberArrayWithtoutDigit);

    // encontrando o digito verificador 
    const correctDigit = generateDigit(numberArrayWithtoutDigit);
    // console.log(correctDigit);

    // verificando se o digito verificador que foi gerado é igual ao que foi recebido
    return correctDigit === numberArray[numberArray.length - 1];
}

console.log(verifycode(547020743789));
console.log(verifycode(301354030349));
console.log(verifycode(985772030342));
console.log(verifycode(985210030936));