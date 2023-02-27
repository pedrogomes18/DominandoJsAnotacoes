//arguments é uma coleção de todoso os parametros que foram passados para a função
//exemplo
function findMax(){
    let max = -Infinity

    for(let i = 0; i< arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max
}


//Exemplo de chamada
//showArgs(1,2, [2,3,4], "pedro")

function showArgs(){
    return arguments;
}

// saida
// ...

