/* escreva uma função que recebe um número e retorna o seu fatorial sem utilizar nenhuma estrutura de repetição. O fatorial de um número é igual a multiplicação de todos os inteiros positivos menores ou iguais a ele. ela deve ser capaz de retornar números inteiros corretos mesmo para valores altos.
*/

function fatorial(n) {
    const bigNum = BigInt(n);

    if (bigNum == 0n) {
        return 1n;
    } else {
        return bigNum * fatorial(bigNum - 1n)
    }
}

console.log(fatorial(5));
console.log(fatorial(49));
console.log(fatorial(77));