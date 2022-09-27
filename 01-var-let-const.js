/* Jeito antigo de usar vaiáveis */
/* var meuNome = 'Guilherme'; */

/* Jeito moderno de usar variáveis */
/* let meuNome = 'Guilherme'; */

const meuNome = 'Guilherme'; //Obrigatório a inicialização
console.log(meuNome);

let idade = 10;
let mensagem;
if(idade >= 18){
    mensagem = 'é maior de idade';
}else{
    mensagem = 'É menos de idade';
}
console.log(mensagem);



/* let e const: possuem escopo de BLOCO quando declaro dentro de blocos(condicionais,loops) 
e escopo global quando declarados fora dos blocos

Uma Variável/constante em escopo de BLOCO só existe e é acessível DENTRO do bloco em que foi criada.
*/