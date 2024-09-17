import { useParams } from "react-router-dom";
import { AlunoService } from "../services/aluno.service";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { AlunoReq } from "../data/interfaces/aluno";
import { MessageService } from "../services/message.service";

export const EditAluno = () => {
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, reset } = useForm<AlunoReq>();

  useEffect(() => {
    const fetchAluno = async () => {
      try {
        const alunoRes = await AlunoService.getAluno(id ?? '');

        reset(alunoRes);
      } catch (e) {
        if (e instanceof Error) {
          MessageService.error(e.message);
        } else {
          MessageService.error('An unknown error occurred');
        }
      }
    };
    fetchAluno();
  }, [id, reset]);


  const handleUpdate = async (data: AlunoReq) => {
    try {
      await AlunoService.updateAluno(id ?? '', data);

      reset();

      MessageService.success('Aluno atualizado com sucesso');
    } catch (e) {
      if (e instanceof Error) {
        MessageService.error(e.message);
      } else {
        MessageService.error('An unknown error occurred');
      }
    }
  }

  return (
    <form className="container bg-light row g-3 p-4 rounded" onSubmit={handleSubmit(handleUpdate)}>
     
        <div className="col-md-3">
          <label htmlFor="inputId" className="form-label">ID</label>
          <input
            value={id}
            type="text"
            className="form-control"
            id="inputId"
            disabled
          />
        </div>
      <div className="col-md-4">
        <label htmlFor="inputNome" className="form-label">Nome</label>
        <input
          {...register('nome')}
          type="text"
          className="form-control"
          id="inputNome"
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="inputCurso" className="form-label">Curso</label>
        <input
          {...register('curso')}
          type="text"
          className="form-control"
          id="inputCurso"
        />
      </div>
      <div className="col-md-2">
        <label htmlFor="inputIra" className="form-label">IRA</label>
        <input
          {...register('ira')}
          type="text"
          className="form-control"
          id="inputIra"
        />
      </div>
      <div className="col-2 w-100 float-right align-self-end">
        <button type="submit" className="btn btn-primary">Salvar</button>
      </div>
    </form>
  );
}
