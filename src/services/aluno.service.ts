import { AlunoReq, AlunoRes } from '../data/interfaces/aluno';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore/lite';
import { db } from '../firebase.ts';

const alunosCollection = collection(db, 'alunos');

export class AlunoService {
  public static callFirebaseCount = 0;

  static async addAluno(aluno: AlunoReq): Promise<string> {
    this.callFirebaseCount++;
    if (this.callFirebaseCount > 100) throw new Error("Limite de requisições excedido");
    try {
      const docRef = await addDoc(alunosCollection, aluno);
      return docRef.id;
    } catch (e) {
      throw new Error("Não foi possível adicionar o aluno");
    }
  }

  static async getAlunos(): Promise<AlunoRes[]> {
    this.callFirebaseCount++;
    if (this.callFirebaseCount > 100) throw new Error("Limite de requisições excedido");
    try {
      const querySnapshot = await getDocs(alunosCollection);
      const alunosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AlunoRes));
      return alunosList;
    } catch (e) {
      throw new Error("Não foi possível listar os alunos");
    }
  }

  static async getAluno(id: string): Promise<AlunoRes> {
    this.callFirebaseCount++;
    if (this.callFirebaseCount > 100) throw new Error("Limite de requisições excedido");
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
    this.callFirebaseCount++;
    if (this.callFirebaseCount > 100) throw new Error("Limite de requisições excedido");

    try {
      const alunoRef = doc(db, 'alunos', id);
      await updateDoc(alunoRef, aluno);
    } catch (e) {
      throw new Error("Não foi possível atualizar o aluno");
    }
  }

  static async deleteAluno(id: string) {
    this.callFirebaseCount++;
    if (this.callFirebaseCount > 100) throw new Error("Limite de requisições excedido");

    try {
      const alunoRef = doc(db, 'alunos', id);
      await deleteDoc(alunoRef);
    } catch (e) {
      throw new Error("Não foi possível excluir o aluno");
    }
  }
}

// export const addAluno = async (aluno: Aluno) => {
//   try {
//     const docRef = await addDoc(alunosCollection, aluno);
//     console.log("Aluno adicionado com ID: ", docRef.id);
//   } catch (e) {
//     throw new Error("Não foi possível adicionar o aluno");
//   }
// };

// export const getAlunos = async () => {
//   try {
//     const querySnapshot = await getDocs(alunosCollection);
//     const alunosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     return alunosList;
//   } catch (e) {
//     throw new Error("Não foi possível listar os alunos");
//   }
// };

// export const updateAluno = async (id: string, aluno: Partial<Aluno>) => {
//   try {
//     const alunoRef = doc(db, 'alunos', id);
//     await updateDoc(alunoRef, aluno);
//   } catch (e) {
//     throw new Error("Não foi possível atualizar o aluno");
//   }
// };

// export const deleteAluno = async (id: string) => {
//   try {
//     const alunoRef = doc(db, 'alunos', id);
//     await deleteDoc(alunoRef);
//   } catch (e) {
//     throw new Error("Não foi possível excluir o aluno");
//   }
// };
