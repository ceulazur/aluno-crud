import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AlunoForm from './components/AlunoForm';
import AlunoList from './components/AlunoList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/alunos">Listar Alunos</Link></li>
            <li><Link to="/alunos/novo">Adicionar Aluno</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/alunos" exact component={AlunoList} />
          <Route path="/alunos/novo" component={AlunoForm} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
