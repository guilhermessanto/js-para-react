/* 
Usando o ... como operador spread(espalhar) 
Na prática, copiamos o conteúdo de um array(bandas) para dentro de outro (maisBandas)

IMUTABILIDADE (não muda)
*/

const bandas = ['Rush', 'Dream Theater', 'Slayer','Black Sabboth'];
const maisBandas = [...bandas,'Van Halen', 'Deep Purple'];

console.log(maisBandas);

console.log('================================');
/* Spread com Objeto */

const dados = {
    nome: 'Guilherme',
    idade: 23
};

const novosDados = {
    ...dados,
    cidade: 'São Paulo',
    estado: 'SP'
}

console.log(novosDados);