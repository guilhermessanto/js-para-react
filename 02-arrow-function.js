/* formas de trabalhar com funções */

// Sintaxe tradicional

function nomeDaFuncao(){
    console.log('Função sintaxe tradicional...');
}
/* Sintaxe de função anônima */
var outraFuncao = function(){
    console.log('Função sintaxe anônima...');
};

//Chamadas de função
nomeDaFuncao();
outraFuncao();

/* Crie uma função que receba dois valores numéricos,
calcule a diferença entre eles e retorne o resultado para uma variavel externa.

02) Mostre no console o resultado
*/

function calculaDiferenca(valor1,valor2){
 return valor1 - valor2;
}
console.log(calculaDiferenca(8,3));

/* Arrow function(função "seta/flecha")
Possibilita diversas sintaxe, e até sumplificação
*/

const exemplo1 = () => {
    console.log('Uma arrow function qualquer...');
};
exemplo1();
/* Arrow function com parâmetro */
/* const ola = (nome) => { */
const ola = nome => { //podemos omitir os parênteses no caso de 1 param
    console.log('Olá '+nome);
};

/* Podemos omitir as {} no caso de uma única instrução */
const ola2 = nome => console.log('Bom dia '+nome);

ola('Guilherme');
ola2('Guilherme');

/* const metade = (valor) => {
    return valor /2;
};
 */

/* Arrow function com retorno IMPLÍCITO */
const metade = valor =>  valor /2;

console.log(metade(9));

/* const multiplicaValores = (valor, fator) => {
    return valor / fator;
}; */

/* parametro com valor padrão */
const multiplicaValores = (valor, fator = 2) => valor / fator;


console.log(multiplicaValores(510));


/* Exercicio
Monte uma arrow function que receba nome de uma pessoa e converta para letras maiusculas

- Chame a função 3x (passando nomes diferentes) e exibindo no console o resultado
*/
console.log('===================');
const nomeMaiusculo = nome => nome.toUpperCase();


console.log(nomeMaiusculo('guilherme'));
console.log(nomeMaiusculo('veronica'));
console.log(nomeMaiusculo('joão'));