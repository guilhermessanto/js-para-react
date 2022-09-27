/* Usando o ... como operador rest ()
Na prática, usamos para mesclas uma lista de argumentos/parâmetros para uma função*/

/* function ordenar(...parametros){ //Rest 
    return parametros.sort();
} */
const ordenar = (...parametros)=>parametros.sort();

console.log(ordenar('guilherme','josé','antonio'));
console.log(ordenar('Lil wayne','Lil Peep','Caverinha','Drake','Eminem'));

const cursos= ['React','Angular', 'Vue','Node.js']
console.log(ordenar(...cursos)); //Spread

console.log('=======================');

/* function soma(...valores){
   let total = 0;
   for(let valor of valores){
    total +=valor;
   }
   return total;
} */

const soma = (...valores) =>{
    let total = 0;
    for(let valor of valores){
        total += valor;
    }
    return total;
}

console.log(soma(10,340,50,30));