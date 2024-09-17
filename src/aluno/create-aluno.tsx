import { useForm, SubmitHandler } from 'react-hook-form';
import { AlunoService } from '../services/aluno.service';
import { MessageService } from '../services/message.service';
import { AlunoReq } from '../data/interfaces/aluno';

export const CreateAluno = () => {
  const { register, handleSubmit, reset } = useForm<AlunoReq>();

  const onSubmit: SubmitHandler<AlunoReq> = async (data) => {    
    try {
      await AlunoService.addAluno(data);

      reset();

      MessageService.success('Aluno adicionado com sucesso');
    } catch (e) {
      if (e instanceof Error) {
        return MessageService.error(e.message);
      } else {
        return MessageService.error('Erro desconhecido');
      }
    }
  };

  
  return (
    <form className="container bg-light row g-3 p-4 rounded" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-4">
        <label htmlFor="inputNome" className="form-label">Nome</label>
        <input
          {...register('nome')}
          type="text"
          className="form-control"
          id="inputNome"
        />
      </div>
      <div className="col-md-4">
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
      <div className="col-2 align-self-end">
        <button type="submit" className="btn btn-primary">Salvar</button>
      </div>
    </form>
  );
}
