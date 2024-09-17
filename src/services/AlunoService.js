import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { AbortedDeferredError } from 'react-router-dom';

const alunosCollection = collection(db, 'alunos');

// Adicionar Aluno
export const addAluno = async (aluno) => {
  try {
    const docRef = await addDoc(alunosCollection, aluno);
    console.log("Aluno adicionado com ID: ", docRef.id);
  } catch (e) {
    console.error("Erro ao adicionar aluno: ", e);
  }
};

// Listar Alunos
export const getAlunos = async () => {
  try {
    const querySnapshot = await getDocs(alunosCollection);
    const alunosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return alunosList;
  } catch (e) {
    console.error("Erro ao listar alunos: ", e);
  }
};

// Atualizar Aluno
export const updateAluno = async (id, aluno) => {
  try {
    const alunoRef = doc(db, 'alunos', id);
    await updateDoc(alunoRef, aluno);
    console.log("Aluno atualizado com ID: ", id);
  } catch (e) {
    console.error("Erro ao atualizar aluno: ", e);
  }
};

// Excluir Aluno
export const deleteAluno = async (id) => {
  try {
    const alunoRef = doc(db, 'alunos', id);
    await deleteDoc(alunoRef);
    console.log("Aluno excluído com ID: ", id);
  } catch (e) {
    console.error("Erro ao excluir aluno: ", e);
  }
};
