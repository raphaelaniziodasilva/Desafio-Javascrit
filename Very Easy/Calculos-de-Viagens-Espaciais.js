/* escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único número inteiro
*/

// primeira forma utilizando string
function quadrado(numero) {
    // vamos converter o numero para string, porque com a string podemos percorrer cada caractere da string
    const str = numero.toString();
    let resultado = "";

    // vamos percorrer por cada caractere da string
    for (let i = 0; i < str.length; i++) {
        // Math.pow = eleva o número a potenciação ou seja vamos elevar o numero ao quadrado 
        resultado += Math.pow(Number(str[i]), 2).toString()
    }

    console.log("retornando o cada caractere da string elevado ao quadrado e convertendo para o tipo inteiroum tipo inteiro");
    return Number(resultado);
}
console.log(quadrado(3514));
console.log(quadrado(94571));
console.log(quadrado(24))


// segunda forma utilizando array []
console.log('############# segunda forma ###########');
function quadrado1(numero) {
    // vamos converter o número para string e chamar o metodo split
    // split = vai separar a nossa string e transformar em um array
    const digitsArray = numero.toString().split('');

    console.log("string transformado em um array");
    console.log(digitsArray);

    // agora conseguimos usar os metodos do array ja que transformamos digitsArray em array
    // ** 2 = elevado a dois
    // join = vai converter o array de volta para string ou seja vai juntar os numeros
    const quadaroArray = digitsArray.map(digit => Number(digit) ** 2).join('');

    console.log("array convertido de volta a string e elevando a 2 cada caractere");
    return Number(quadaroArray);
}
console.log(quadrado1(3514));
console.log(quadrado1(94571));
console.log(quadrado1(24))