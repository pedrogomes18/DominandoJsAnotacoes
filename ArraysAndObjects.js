//Spread - transforma o array em cada item, em cada parametro para a função - Elemnto independente
// ...*ARRAY*
function sum(a, b,c){
    return a+b+c;
}

const n = [1,2,3];
console.log(sum(...n));


//Destruição de OBJ - ENTRE AS {} PODEMOS FILTRAR APENAS OS DADOS DESEJADOS
const user = {
    id: 1,
    displayName: 'Pedro',
    fullName: {
        firstName: 'Pedro Henrique',
        lastName: 'Gomes Oliveira'
    }
};

function getFullName({fullName: {firstName:first, lastName: last}}){
    console.log(`${first} ${last}`)
    return `${first} ${last}`;

}

