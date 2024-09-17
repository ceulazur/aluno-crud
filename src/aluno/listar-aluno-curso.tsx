import { useEffect, useState } from "react";
import { AlunoService } from "../services/aluno.service";
import { MessageService } from "../services/message.service";
import { AlunoRes } from "../data/interfaces/aluno";

const cursos = ['CC', 'ES', 'DD', 'EC', 'SI'];

export const ListAlunoByCourse = () => {
  const [alunos, setAlunos] = useState<AlunoRes[]>([]);

  useEffect(() => {
    AlunoService.getAlunos().then(alunos => {
      setAlunos(alunos);
    }).catch(e => {
      MessageService.error(e.message);
    });

  }, []);

  return (
    <section className="container bg-light row g-3 p-4 rounded">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>IRA</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso) => (
              <>
                <tr>
                  <td colSpan={4}><strong>{curso}</strong></td>
                </tr>
                {alunos.filter(aluno => aluno.curso === curso).map((aluno) => (
                  <tr key={aluno.id}>
                    <td>{aluno.ira >= 7 ? (<i className="bi bi-brightness-low-fill text-warning"></i>) : ('')}</td>
                    <td>{aluno.nome}</td>
                    <td>{aluno.ira}</td>
                    <td>{aluno.curso}</td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}