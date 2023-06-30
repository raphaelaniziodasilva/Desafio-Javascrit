/* crie um programa que automatize os cálculos das médias dos alunos e turmas. Desenvolva uma função que calcule a média. No entanto, a função deve ser capaz de funcionar com qualquer número de alunos ou turmas
desafio = escreva uma função que recebe um número qualquer de números inteiros como argumentos e retorne a média aritimética entre eles
*/
// primeira forma de resolver usando o forEach no array
function calculoDeMedia1(notas) {
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });
    // notas.length = tamanho do array
    let media = soma / notas.length;
    return media;
}
console.log(calculoDeMedia1([10, 9, 6, 8, 9, 1, 5, 7]))
console.log(calculoDeMedia1([2, 5, 7, 1, -2]))
console.log(calculoDeMedia1([10, 10, 10, 10, 9]))
console.log(calculoDeMedia1([25, 75]))

// segunda forma de resolver usando o reduce no array
// reduce = o metodo reduce vai reduzir todos os elementos de um array a um único elemento
function calculoDeMedia2(notas) {
    const soma = notas.reduce((acumulo, nota) => acumulo + nota, 0);
    // notas.length = tamanho do array
    return soma / notas.length;
}
console.log('segunda forma');
console.log(calculoDeMedia2([1, 9, 3, 6, 7, 10, 10, 10]));
console.log(calculoDeMedia2([2, 3, 5, 1, -2]));
console.log(calculoDeMedia2([8, 7, 10, 7.5, 9]));
console.log(calculoDeMedia2([10, 75]));

// terceira forma de resolver usando a desestruturação de arrays
//... = desestruturação vai siginificar que os parâmetros da função vão ser os elementos de um array chamado notas
function calculoDeMedia3(...notas) {
    const soma = notas.reduce((acumulo, nota) => acumulo + nota, 0);
    // notas.length = tamanho do array
    return soma / notas.length;
}
console.log('terceira forma');
// chamando a função não precisa colocar as notas dentro do array, pois estamos utilizando a desestruturação
console.log(calculoDeMedia3(10, 9, 6, 8, 9, 1, 5, 7))
console.log(calculoDeMedia3(2, 5, 7, 1, -2))
console.log(calculoDeMedia3(10, 10, 10, 10, 9))
console.log(calculoDeMedia3(25, 75))