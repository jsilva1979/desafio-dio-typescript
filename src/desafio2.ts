enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro    
}

console.log(pessoa1.nome, pessoa1.idade, pessoa1.profissao,Trabalho['0']);
console.log(pessoa2.nome, pessoa2.idade, pessoa2.profissao,Trabalho['1']);
console.log(pessoa3.nome, pessoa3.idade, pessoa3.profissao,Trabalho['0']);
console.log(pessoa4.nome, pessoa4.idade, pessoa4.profissao,Trabalho['1']);