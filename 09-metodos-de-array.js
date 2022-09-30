/* map(mapear, transformar em outra coisa) 
Passa pelos elementos de um array e realiza operações nelas atraves de uma função( callback) gerando um novo array
*/

function dobraNumero(numero){
    return numero=> numero*2
};
const numeros = [10,20,30,40,50];
const dobro = numeros.map(numero=>numero*2);
/*const dobro = numeros.map(dobraNumero()); */

console.log(numeros); 
console.log(dobro); 


const nomes = ['guilherme', 'veronica']

const nomeMaiusculo = nomes.map(nome=>nome.toUpperCase());
console.log(nomeMaiusculo);

console.log('========================================');
/* filter(filtra/remove)
Retorna um array de valores de acordo com o resultado do filtro aplicado
*/
const vendas = [1500,500,3000,2000,10_000];

const meta = 1000;

const vendasAcimaDaMeta = vendas.filter(venda => venda > meta);

console.log(vendas);
console.log(vendasAcimaDaMeta);

const alunos = ['Guilherme', 'Veronica','João','Marcelo','matheus'];
/* 
const resultados = alunos.filter(aluno => {
    if(aluno.charAt(0) == 'M' || aluno.charAt(0) == 'm'){
        return aluno;
    }
}); */
const resultados = alunos.filter(aluno => {
    if(aluno.startsWith('M')){
        return aluno;
    }
});

const resultadoDois = alunos.filter(aluno=>aluno.toUpperCase().startsWith('M') ?? aluno);

console.log(resultados);
console.log(resultadoDois);

const cursos = [
    {id: 1, titulo: 'HTML e CSS3', categoria: 'Front-End', preco: 500},
    {id: 2, titulo: 'JS e React', categoria: 'Front-End', preco: 800},
    {id: 3, titulo: 'React Native', categoria: 'Mobile', preco: 1000},
    {id: 4, titulo: 'Photoshop', categoria: 'Design', preco: 400},
    {id: 5, titulo: 'PHP e MySQL', categoria: 'Back-End', preco: 600},
    {id: 6, titulo: 'Flutter', categoria: 'Mobile', preco: 900}
];

const cursosFront = cursos.filter(curso => curso.categoria == 'Front-End');
const cursosBack = cursos.filter(curso => curso.categoria == 'Back-End');

console.log(cursos);
console.log(cursosFront);
console.log(cursosBack);

console.log('----------------------------');

const titulos = cursos.map(curso => curso.titulo );
console.log(titulos);

console.log('----------------------------');
const titulosFront = cursos
    .filter(curso => curso.categoria == 'Front-End')
    .map(curso => curso.titulo);

console.log(titulosFront);

console.log('--------------------------------------');
console.log('----------------REDUCE-----------------');

/* reduce(reduzir a um unico valor/resultado) */

const valores = [10,50,2000,5,25];


const soma = valores.reduce((acumulador,valor)=> {
    return acumulador + valor;
},0)

console.log(soma);
console.log('----------------FILTER e REDUCE-----------------');

const somaCursosMobile = cursos
    .filter(curso => curso.categoria == 'Mobile')
    .reduce((acumulador, curso)=> {
        return acumulador + curso.preco;
    },0)

    console.log(somaCursosMobile);