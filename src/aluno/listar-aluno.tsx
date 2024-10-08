import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AlunoService } from "../services/aluno.service";
import { MessageService } from "../services/message.service";
import { AlunoRes } from "../data/interfaces/aluno";
import { Link } from "react-router-dom";

export const Alunos = () => {
  const [alunos, setAlunos] = useState<AlunoRes[]>([]);
  const [isColored, setIsColored] = useState<boolean>(false);
  const [media, setMedia] = useState<number>(0);

  useEffect(() => {
    AlunoService.getAlunos().then(alunos => {
      setAlunos(alunos);
    }).catch(e => {
      MessageService.error(e.message);
    });

  }, []);

  const handleDelete = (id: string) => async () => {
    try {
      await AlunoService.deleteAluno(id);
      const newAlunos = alunos.filter(aluno => aluno.id !== id);
      setAlunos(newAlunos);
      MessageService.success('Aluno excluído com sucesso');
    } catch (e) {
      if (e instanceof Error) {
        MessageService.error(e.message);
      } else {
        MessageService.error('Erro desconhecido');
      }
    }
  }

  useEffect(() => {
    const mediaValue = alunos.reduce((acc, curr) => (Number(acc) + Number(curr.ira)), 0) / alunos.length;
    setMedia(mediaValue);
  }, [alunos]);

  const getBackgroundByIra = (ira: number) => {
    return (ira > media ? 'table-info' : ira < media ? 'table-danger' : '');
  }

  const handlePintarAlunos = () => {
    setIsColored(!isColored);
  }

  return (
    <section className="container bg-white row g-3 p-4 rounded">
      <p className="d-flex justify-content-between">
        <h2>Alunos</h2>
        <button type="button" className="btn btn-primary" onClick={handlePintarAlunos}>Pintar</button>
      </p>

      <Table  hover>
        <thead>
          <tr>
            <th className="d-flex justify-content-center">#</th>
            <th>Nome</th>
            <th>IRA</th>
            <th>Curso</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            alunos?.map(aluno => (
              <tr className={isColored ? getBackgroundByIra(aluno.ira) : ''} key={aluno.id}>
                <td className="d-flex justify-content-center" height={54}>
                  <Link to={`/alunos/editar/${aluno.id}`}>
                    <i className="bi bi-pencil-fill"></i>
                  </Link>
                </td>
                <td>{aluno.nome}</td>
                <td>{aluno.ira}</td>
                <td>{aluno.curso}</td>
                <td>
                  <button className="btn btn-danger" onClick={handleDelete(aluno.id)}>
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            ))
          }

          <tr className="table-primary">
            <td></td>
            <td></td>
            <td></td>
            <td>Média IRA</td>
            <td>{media}</td>
          </tr>

        </tbody>
      </Table>
    </section>
  );
} 