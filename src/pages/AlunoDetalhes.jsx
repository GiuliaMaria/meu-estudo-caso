import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AlunoDetalhes() {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);

  useEffect(() => {
    axios.get(`https://proweb.leoproti.com.br/alunos/${id}`)
      .then(r => setAluno(r.data));
  }, []);

  if (!aluno) return <p>Carregando...</p>;

  return (
    <div className="container mt-4">
      <h1>{aluno.nome}</h1>
      <p>Email: {aluno.email}</p>
      <p>Idade: {aluno.idade}</p>
    </div>
  );
}
