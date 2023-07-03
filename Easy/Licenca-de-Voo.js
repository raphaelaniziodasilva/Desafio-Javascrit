/* escreva uma classe que contenha um método para gerar uma licença de voo e os seguintes atributos
    1. nome
    2. sobrenome
    3. data de nascimento
    4. licença de voo (que deve iniciar sempre como falso)

além disso a classe deve possuir um método para criar uma licença caso a pessoa ainda não possua uma. A licença deve ser uma string seguindo o seguinte padrão:
    - os primeiros cinco caracteres do sobrenome em letras maiúsculas (completado com 9's caso possua menos de cinco)
    - o sexto caractere e um traço (-)
    - o setimo caractere é o algarismo da década (penúltimo) do ano de nascimento
    - oitavo e nono caractere são o mês de nascimento
    - decimo caractere é o algarismo do ano (último) do ano de nascimento
    - decimo primeiro caractere é um ponto (.)
    - decimo segundo caractere é a primeira letra do primeiro nome (minúscula)
*/

class Pilot {
    // criando o construtor e definindo os atributos
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
        this.flyingLicense = false;
    }

    // gerando licença de voo
    generateflyingLicense () {
        // criando a licença
        let license = '';

        // precisamos das cinco primeira letras do sobrenome 
        for (let i = 0; i < 5; i++) {
            // se o sobrenome tem 5 letras ou mais, acrescentando as cinco primeira letras do sobrenome em maiuscula, se não existir acrescente o númerpo 9
            // usando operador ternario
            license += this.lastName[i] ? this.lastName[i].toUpperCase() : '9'
        };

        license += '-';

        // acrescentando o algarismo da década do ano de nascimento
        // getFullYear() = vai retornar o número ou seja o ano de nascimento, agora vamos transformar em uma string utilizando o toString()
        license += this.birthday.getFullYear().toString()[2];

        // pegando o mes completo
        license += this.getBirthdayFullMonth();
        
        // acrescentando o algarismo do ano de nascimento 
        license += this.birthday.getFullYear().toString()[3];

        license += '.';

        // acrecentando a primeira letra do nome em minuscula
        license += this.firstName[0].toLowerCase();

        this.flyingLicense = license;
    }

    // pegando o mes completo ex: 01 - 02 - 10 - 12 etc.
    getBirthdayFullMonth () {
        if(this.birthday.getMonth() < 9) {
            return `0${this.birthday.getMonth() + 1}`;
        } else {
            return `${this.birthday.getMonth() + 1}`
        }
    }
}

const pilot1 = new Pilot('Akaza', 'Lua', '01/25/1650');
const pilot2 = new Pilot('Zoro', 'Espadachin', '07/15/1988');
const pilot3 = new Pilot('Obito', 'Akatsuki', '11/04/1990');

pilot1.generateflyingLicense()
pilot2.generateflyingLicense()
pilot3.generateflyingLicense()

console.log(pilot1);
console.log(pilot2);
console.log(pilot3);