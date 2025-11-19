import { useParams, Link } from "react-router-dom";

export default function AlunoDetalhes({ alunos }) {
  const { id } = useParams();
  const aluno = alunos.find((a) => a.id == id);

  if (!aluno) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">Aluno não encontrado.</div>
        <Link to="/" className="btn btn-secondary mt-3">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2>{aluno.nome}</h2>

        <p><strong>Email:</strong> {aluno.email || "Não informado"}</p>
        <p><strong>Idade:</strong> {aluno.idade || "Não informada"}</p>
        <p><strong>Curso:</strong> {aluno.curso || "Não informado"}</p>

        <Link to="/" className="btn btn-primary mt-3">⬅ Voltar para lista</Link>
      </div>
    </div>
  );
}
