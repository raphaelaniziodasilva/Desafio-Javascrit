/* A equipe de manutenção da nave TopGun solicitou a sua ajuda para analisar o desempenho do computador portátil utilizado pela equipe de reconhecimento. Para isso você presicou simular a criação de blocos de informação em formato de texto recursivamente, crie uma função para imitar esse comprotamento
desafio = escreva uma função que recebe um número e retorna uma quantidade equivalente de palavra "chunks" separados por um "-" sem utilizar nenhuma estrutura de repetição
*/

// num = vai ser a quantidade de chunks que vai ser retornado
function chunks(num) {
    if(num === 0) {
        return '';
    };

    if(num === 1) {
        return 'chunk' // vai retornar um chunk
    } else {
        // se não for 0 e nem 1, vai precisar ir acumuando os chunk- ate acabar todos os numeros chamados
        // chunks = chamando a propria função chunks para continuar executando até chegar no final ou seja vai ser chamado a propria função várias vezes e cada vez e vai diminuindo um por um até chegar no final = 0
            return 'chunk-' + chunks(num - 1)
    }
}
console.log(chunks(1));
console.log(chunks(0));
console.log(chunks(2));
console.log(chunks(5));
console.log(chunks(7));
console.log(chunks(10));