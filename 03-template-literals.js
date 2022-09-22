/* Concatenação */
const nome = 'Guilherme';
const sobrenome = 'Santana';
let idade = 23;
let cidade = 'São Paulo';
let estado = 'SP';

let mensagem = 'Meu nome é '+nome+' '+sobrenome+', tenho '+idade+' anos e moro atualmente na cidade de '+cidade+' - '+estado;
/* Método literal */
let mensagem2 = `Meu nome é ${nome.toUpperCase()} ${sobrenome}, tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}`;

console.log(mensagem);
console.log(mensagem2);