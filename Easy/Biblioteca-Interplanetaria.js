/* escreva uma funcão que recebe uma string contendo um nome completo e retorne uma string com todos os nomes, exceto o último, abreviado e o último nome em letras maiúsculas antes da abreviação seperado por virgula
*/

function quotation(fullName) {
    // Vamos utilizar um array para poder manipular os nomes separadamente

    // criando uma lista de nomes
    const names = fullName.split(' ');

    // a variavel initials vai pegar as iniciais dos nomes
    let initials = ''

    // pegando as inicias dos nomes indo de nome em nome e pegando as inicias
    for (let i = 0; i < names.length -1; i++) {
        
        // acrescentando a primeira letra do nome
        // [i] = nome que vai ser utilizado, [0] = pegando a primeira letra do nome, toUpperCase = para deixar todas as letras maiúsculas
        initials += ` ${names[i][0].toUpperCase()}`;
    }
    
    // retornando o ultimo nome em letra maiuscula
    return `${names[names.length -1].toUpperCase()} - ${initials}`;

}

console.log(quotation('Monke the Luffy'));
console.log(quotation('Roronroa Zoro'));
console.log(quotation('Sanji San'));