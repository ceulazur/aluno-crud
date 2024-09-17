
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './home'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Alunos } from './aluno/listar-aluno';
import { CriarAluno } from './aluno/criar-aluno';

function App() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Atividade 3</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Professor" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Aluno" id="basic-nav-dropdown">
                <NavDropdown.Item href="/alunos">Listar</NavDropdown.Item>
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
          <Route path="/alunos/criar" element={<CriarAluno/>} />
        </Routes>
      </BrowserRouter >
    </>
  );

}

export default App
