/* escreva uma função que recebe uma string, verificar se ela possui a mesma quantidade de cada letra que a compõe e retorne true caso possua ou false caso não possua.
*/

function compareCounts(count, index, array) {
    // verificando se o index não e o primeiro se ele for o primeiro ele não tem nenhum valor anterior, se for diferente de 0 verificar se a contagem e igual a contagem anterior 
    return index !== 0? count === array[index -1]: true;
}

function checkBalance(str) {
    // criando o objeto que vai fazer contagem de caracters
    const charCount = {};

    // vamos fazer a interação sobre a string str
    for (let i = 0; i < str.length; i++) {
        // letra atual que esta sendo percorrida
        const currentLetter = str[i]

        // para cada letra vamos criar uma nova propriedade no objeto e acrescentando a cada vez que essa letra aparece
        charCount[currentLetter] = charCount[currentLetter] ? charCount[currentLetter] +1 : 1
    }

    // precisamos retornar true ou false caso os valores sejam tdos iguais
    // para acessar todos os valores independentes de quais são de um objeto podemos usar Object.values
    // Object.values = converte um objeto para um array e dentro desse array, ele coloca todos os valores 
    // every = verifica se todos os elementos do array atendem a uma determinada condição
    return Object.values(charCount).every(compareCounts)

}

console.log(checkBalance('This is Thee'));
console.log(checkBalance('ssd'));
console.log(checkBalance('Lorem ipsum'));
console.log(checkBalance('QQwweerrttyy'));
