// Como podemos melhorar o esse código usando TS?

enum Trabalho {
  Atriz,
  Ator
}

interface Iemployees {
  nome: string;
  idade: number;
  profissao: Trabalho;
}

let pessoa1: Iemployees = {} as Iemployees;
pessoa1.nome = "Alícia";
pessoa1.idade = 09;
pessoa1.profissao = Trabalho.Atriz;

let pessoa2: Iemployees = {} as Iemployees;
pessoa2.nome = "Daianne";
pessoa2.idade = 28;
pessoa2.profissao = Trabalho.Atriz;

let pessoa3: Iemployees = {
  nome: "Luna",
  idade: 1, // Tem que ser number
  profissao: Trabalho.Atriz,
};

let pessoa4: Iemployees = {
  nome: "Jonnes", // É um objeto, então sem =
  idade: 32,
  profissao: Trabalho.Ator,
};
