enum Profissao {
  Professor,
  Engenheiro,
  Robotista,
  Eletricista,
}

type Pessoa = {
  name: string;
  idade: number;
  casado: boolean;
  trabalho: Profissao; // Enum como um tipo
};

const jonnes: Pessoa = {
  name: "Jonnes",
  idade: 32,
  casado: true,
  trabalho: Profissao.Engenheiro,
};

const mario: Pessoa = {
  name: "Nunes",
  idade: 32,
  casado: false,
  trabalho: Profissao.Engenheiro,
};

function geradorDeErro(mensagem: string, codigoDeErro: number): never { 
  throw { message: mensagem, errorCode: codigoDeErro };
}
geradorDeErro("Um erro ocorreu!", 500);
