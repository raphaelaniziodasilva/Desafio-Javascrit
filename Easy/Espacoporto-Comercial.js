/* escreva uma função que recebe um valor inteiro e retorne a quantidade de cada moeda para se chegar ao valor. Deve-se sempre priorizar as moedas de maior valor (o máximo possivel de moedas de 500, depois o máximo possível de moedas de 100, etc.)
*/

function coins(num) {
    const coins = {
        '500': 0,
        '100': 0,
        '200': 0,
        '50': 0,
        '25': 0,
        '10': 0,
        '5': 0,
    };

    let rest = num;

    coins['500'] = Math.floor(rest / 500);
    rest -= 500 * Math.floor(rest / 500);

    coins['100'] = Math.floor(rest / 100);
    rest -= 100 * Math.floor(rest / 100);

    coins['200'] = Math.floor(rest / 200);
    rest -= 200 * Math.floor(rest / 200);

    coins['50'] = Math.floor(rest / 50);
    rest -= 50 * Math.floor(rest / 50);

    coins['25'] = Math.floor(rest / 25);
    rest -= 25 * Math.floor(rest / 25);

    coins['10'] = Math.floor(rest / 10);
    rest -= 10 * Math.floor(rest / 10);

    coins['5'] = Math.floor(rest / 5);
    rest -= 5 * Math.floor(rest / 5);

    return coins;
}

console.log(coins(478));
console.log(coins(384));
console.log(coins(5412));
console.log(coins(50));