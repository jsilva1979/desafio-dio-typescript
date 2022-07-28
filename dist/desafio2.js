"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};
let pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};
let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};
console.log(pessoa1.nome, pessoa1.idade, pessoa1.profissao, Trabalho['0']);
console.log(pessoa2.nome, pessoa2.idade, pessoa2.profissao, Trabalho['1']);
console.log(pessoa3.nome, pessoa3.idade, pessoa3.profissao, Trabalho['0']);
console.log(pessoa4.nome, pessoa4.idade, pessoa4.profissao, Trabalho['1']);
//# sourceMappingURL=desafio2.js.map