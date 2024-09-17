import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Remova a importação de estilos se não estiver usando o arquivo
// import './styles.css';

// Cria o root e renderiza o componente App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
