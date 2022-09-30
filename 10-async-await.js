import fetch from 'node-fetch';
/* Trabalhando comunicação assincrona(ajax) */
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(resposta => resposta.json())
    .then(dados =>console.log(dados))
    .catch(error=> console.log('Erro na operação' +error.errno));
console.log('--------------------------------');
console.log('--------------------------------');
/* Sintaxe usando função e async/await */
/* async function acessaApi(){
    try{
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const dados = await resposta.json();
        console.log(dados);
            
    }catch(error){
        console.log('Deu ruim: '+error.errno);
    }
} */

const acessaApi = async ()=>{
    try{
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const dados = await resposta.json();
        console.log(dados);
            
    }catch(error){
        console.log('Deu ruim: '+error.errno);
    }
}

acessaApi();
