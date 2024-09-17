import React, { useState } from 'react';
import { addAluno } from '../services/AlunoService';
import { AbortedDeferredError } from 'react-router-dom';

const AlunoForm = () => {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [ira, setIra] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addAluno({ nome, curso, ira: Number(ira) });
    setNome('');
    setCurso('');
    setIra('');
  };

  return (
    <div>
      <h2>Adicionar Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Curso:</label>
          <input
            type="text"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            required
          />
        </div>
        <div>
          <label>IRA:</label>
          <input
            type="number"
            value={ira}
            onChange={(e) => setIra(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AlunoForm;
