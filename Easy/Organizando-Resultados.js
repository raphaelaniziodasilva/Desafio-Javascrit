/* Escreva uma função que recebe um array bidimensional de inteiros e retorna um único array contendo todos os números em ordem ascendente
*/

function flatAndSort(array) {
    const numbers = [];

    array.forEach(list => {
        numbers.push(...list);
    });

    return numbers.sort((a, b) => a - b);

}

console.log(flatAndSort([[9, 8, 7, 5, 3, 1, 2, 4], [1, 2, 3,], [9, 10, 22, 17, 11]]));
console.log(flatAndSort([[1, 2, 3,], [9, 10, 22, 17, 11]]));