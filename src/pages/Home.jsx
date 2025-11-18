import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios.get("https://proweb.leoproti.com.br/alunos")
      .then(r => setAlunos(r.data));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map(a => (
          <li key={a.id}>
            <Link to={`/aluno/${a.id}`}>{a.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
