import { AlunoReq, AlunoRes } from '../data/interfaces/aluno';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore/lite';
import { db } from '../firebase.ts';

const alunosCollection = collection(db, 'alunos');

export class AlunoService {
  static async addAluno(aluno: AlunoReq): Promise<string> {
    try {
      const docRef = await addDoc(alunosCollection, aluno);
      return docRef.id;
    } catch (e) {
      throw new Error("Não foi possível adicionar o aluno");
    }
  }

  static async getAlunos(): Promise<AlunoRes[]> {
    try {
      const querySnapshot = await getDocs(alunosCollection);
      const alunosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AlunoRes));
      return alunosList;
    } catch (e) {
      throw new Error("Não foi possível listar os alunos");
    }
  }

  static async getAluno(id: string): Promise<AlunoRes> {
    try {
      const alunoSnap = await getDocs(alunosCollection);
      if (alunoSnap.empty) throw new Error("Aluno não encontrado");
      const aluno = alunoSnap.docs[0].data();
      return { id, ...aluno } as AlunoRes;
    } catch (e) {
      throw new Error("Não foi possível obter o aluno");
    }
  }

  static async updateAluno(id: string, aluno: Partial<AlunoReq>) {
    try {
      const alunoRef = doc(db, 'alunos', id);
      await updateDoc(alunoRef, aluno);
    } catch (e) {
      throw new Error("Não foi possível atualizar o aluno");
    }
  }

  static async deleteAluno(id: string) {
    try {
      const alunoRef = doc(db, 'alunos', id);
      await deleteDoc(alunoRef);
    } catch (e) {
      throw new Error("Não foi possível excluir o aluno");
    }
  }
}