/*Olá queridos, tudo bom?
 Inicialmente gostaria de agradecer pela oportunidade de estar realizando este desafio,
  pra mim é de uma alegria imensa..*/

function Divisiveis(number){

        var result = 0;
    for(let i = 1; i< number; i++){
        if(i % 3 === 0 || i % 5 === 0){
                result += i;
        }

    }
    return result;
}


/* Teste o código aqui, alterando o parâmetro. :) */
const result = Divisiveis(10);
console.log(result);


