import { Link } from "react-router-dom";

export default function Home({ alunos }) {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Lista de Alunos</h1>

      {alunos.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <ul className="list-group">
          {alunos.map((aluno) => (
            <Link
              key={aluno.id}
              to={`/aluno/${aluno.id}`}
              className="list-group-item list-group-item-action"
            >
              <strong>{aluno.nome}</strong>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
