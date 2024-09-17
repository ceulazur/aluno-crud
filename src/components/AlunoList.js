import React, { useEffect, useState } from 'react';
import { getAlunos, deleteAluno } from '../services/AlunoService';
import { AbortedDeferredError } from 'react-router-dom';

const AlunoList = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      const alunosData = await getAlunos();
      setAlunos(alunosData);
    };
    fetchAlunos();
  }, []);

  const handleDelete = async (id) => {
    await deleteAluno(id);
    setAlunos(alunos.filter(aluno => aluno.id !== id));
  };

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map(aluno => (
          <li key={aluno.id}>
            {aluno.nome} - {aluno.curso} - {aluno.ira}
            <button onClick={() => handleDelete(aluno.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlunoList;
