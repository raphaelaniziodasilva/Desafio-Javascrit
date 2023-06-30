/* escreva uma função que recebe um par ordenado (x, y) e retorne um array de pares (x, y) onde cada um deles possui x e y menor ou igual ao par recebido em ordem crescente.
Os pares devem ser ordenados de forma que primeiro aumente o valor de y e dpeois de x. 
Apenas o quadrante onde x e y são positivos deve ser considerados
*/

function smallerPairs(par) {
    const result = [];

    for (let i = 0; i <= par[0]; i++) {
        for (let j = 0; j <= par[1]; j++) {
            result.push([i, j]);
        }
    }

    return result;

}

console.log(smallerPairs([2, 2]));
console.log(smallerPairs([4, 12]));
console.log(smallerPairs([1, 9]));