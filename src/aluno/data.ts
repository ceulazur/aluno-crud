interface Aluno {
  nome: string;
  curso: string;
  ira: string;
}

const alunos = [
  {
    nome: "Paulo",
    curso: 'ES',
    ira: '8'
  }, {
    nome: "Paulo2",
    curso: 'ES',
    ira: '8'
  }, {
    nome: "Paulo3",
    curso: 'ES',
    ira: '8'
  }, {
    nome: "Paulo4",
    curso: 'ES',
    ira: '8'
  }, {
    nome: "Paulo5",
    curso: 'ES',
    ira: '8'
  }
]

export const criarAluno = (aluno: Aluno) => {
  alunos.push(aluno);
}

export const listarAlunos = () => alunos;