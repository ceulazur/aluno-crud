
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './home'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Alunos } from './aluno/listar-aluno';
import { CreateAluno } from './aluno/create-aluno';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { EditAluno } from './aluno/edit-aluno';
import { ListAlunoByCourse } from './aluno/listar-aluno-curso';

function App() {
  return (
    <main className='bg-body-secondary app-container w-100 h-100'>
      <Navbar expand="lg" className="bg-body-tertiary w-100">
        <Container>
          <Navbar.Brand href="#home">Escola</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <NavDropdown title="Professor" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}

              <NavDropdown title="Aluno" id="basic-nav-dropdown">
                <NavDropdown.Item href="/alunos">Listar</NavDropdown.Item>
                <NavDropdown.Item href="/alunos/curso">Listar por curso</NavDropdown.Item>
                <NavDropdown.Item href="/alunos/criar">Criar</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      < BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/alunos/curso" element={<ListAlunoByCourse />} />
          <Route path="/alunos/criar" element={<CreateAluno />} />
          <Route path="/alunos/editar/:id" element={<EditAluno />} />
        </Routes>
      </BrowserRouter >

      <ToastContainer />
    </ main>
  );

}

export default App
