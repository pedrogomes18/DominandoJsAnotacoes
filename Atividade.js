const alunos = [
    {
        nome: 'Pedro',
        nota: 10,
        turma: '2C'
    },
    {
        nome: 'Gomes',
        nota: 5,
        turma: '2B'
    },
    {
        nome: 'Henrique',
        nota: 4,
        turma: '2A'
    },
    {
        nome: 'Oliveira',
        nota: 7,
        turma: '2A'
    },
];



function alunosAprovados(array, media ){
    let aprovados = [];

    for(let i =0 ; i<array.length; i++){
        //Destruindo Objeto
        const {nota, nome} = array[i];

        if(nota >= media){
            aprovados.push(nome); 
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos,5))
