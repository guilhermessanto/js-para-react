/* 
Desestruturação(Destructuring)
Extrair dados facilmente de um array ou objeto
e armazená-los em variáveis/constantes
 */

//Usando desestruturação em arrays
const [a,b] = ['Guilherme','Veronica'];
console.log(a);
console.log(b);
console.log('====================');
const alunos = ['Guilherme','Palloma','Veronica'];
const [guilherme,palloma,veronica] = alunos;

console.log(guilherme);
console.log(palloma);
console.log(veronica);
console.log('====================');

const unidades = ['Penha','Tatuapé','Itaquera','São Miguel Paulista'];

const [penha,tatuape,,smp] = unidades;

console.log(penha);
console.log(tatuape);
console.log(smp);
console.log('====================');

//Usando desestruturação em Objetos

const {nome,cidade} = {nome: 'Guilherme', idade: 23, cidade: 'São Paulo'};

console.log(nome);
console.log(cidade);

const dados = {
    nome: 'Guilherme',
    curso: 'JavaScript',
    nascimento: '31/10/1998'
};
/* Definindo um alias(apelido) para nome utilizando :  */
const {nome: aluno, curso} = dados;

console.log(aluno);
console.log(curso);