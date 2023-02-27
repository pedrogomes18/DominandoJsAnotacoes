//Função básica
function nome(){
    //instrução
    //Só acessa variveis do msm escopo seja let,var ou const
    return;
    //Qnd invocamos o return, a função para de ser executada
}


//Função anônima - Armazena uma função dentro de uma variável
const soma = function(a, b){
    return a+b
}
//EX:
soma(1,4)


//Função autoinvocável - Se chama sozinha
const soma3 = (
    function(){
        let name = 'Pedro GOMES'
        return name;
    }
)();


//Função CALLBACKS
// É uma função sendo passada de argumento para outra
// EX

const calc = function(funcao, n1,n2){
    return funcao(n1, n2)
}

const soma5 = function(n1, n2){
    return n1+ n2
}

const subtra = function(n1, n2){
    return n1 - n2
}

//Chamando a função de callback

console.log(calc(soma5, 5,6))
console.log(calc(soma5, 6,6))
console.log(calc(subtra, 6,6))



