class Pessoa {
    //Propriedades 
    nome = 'Sem nome' ;
    genero = 'Não informado';
    idade;

    // Métodos 
    mostraGenero(){
       console.log(`Genero: ${this.genero}`); 
    }
    mostraNome(){
        console.log(`Nome: ${this.nome}`);
    }
    mostraIdade(){
        console.log(`Idade: ${this.idade}`);
    }
    verificaIdade(){
        if(this.idade >=18){
            return 'maior de idade'
        }else{
            return 'Menor de idade'
        }
        /* 
        if/else ternario 
        return this.idade >= ? 'é maior' : 'é menor';
        */
    }
}
class Aluno extends Pessoa {
    //Propriedades
    matricula;
    curso;

    //Métodos
    mostraDados(){
    console.log(`Matricula: ${this.matricula}`);
        console.log(`Curso: ${this.curso}`);
        //Métodos da superClasse
        this.mostraNome();
        this.mostraGenero();
        this.mostraIdade();
    }
} 

/* Criando objetos/instâncias */
let umaPessoa = new Pessoa;
umaPessoa.nome = 'Guilherme';
umaPessoa.genero = 'Masculino';
console.log(umaPessoa);

let outraPessoa = new Pessoa;
outraPessoa.nome = 'Jorge'
/* outraPessoa.genero = 'Masculino' */
console.log(outraPessoa);
console.log('=========================');
//Objeto herdando recursos
let aluno = new Aluno;
aluno.nome = 'Rayssa';
aluno.genero = 'Feminino';
aluno.matricula = '1234';
aluno.curso = 'Js para React';
aluno.idade = 23;


aluno.mostraDados();
console.log(aluno.verificaIdade());


