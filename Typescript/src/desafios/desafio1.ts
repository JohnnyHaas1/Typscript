// Como podemos rodar isso em um arquivo .ts sem causar erros?
// let employee = {};
// employee.code = 32;
// employee.name = "Johnny";

interface Iemployee {
  name: string;
  code: number;
}

let employee: Iemployee = {} as Iemployee;
employee.code = 32;
employee.name = "Johnny";
