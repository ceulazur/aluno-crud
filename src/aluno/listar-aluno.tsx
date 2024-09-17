import { useState } from "react";
import { listarAlunos } from "./data"
import { Table } from "react-bootstrap";

export const Alunos = () => {
  const [alunos] = useState(listarAlunos());

  return <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome</th>
          <th>IRA</th>
          <th>Curso</th>
        </tr>
      </thead>
      <tbody>
        {
          alunos && alunos.map(aluno => {
            return <>
              <tr>
                <td>{aluno.nome}</td>
                <td>{aluno.ira}</td>
                <td>{aluno.curso}</td>
              </tr>
            </>
          })
        }

      </tbody>
    </Table>
  </>
} 