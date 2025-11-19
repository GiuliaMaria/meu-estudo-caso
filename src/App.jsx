import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlunoDetalhes from "./pages/AlunoDetalhes";
import { useState, useEffect } from "react";
import api from "./api";

export default function App() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const resp = await api.get("/alunos");
        setAlunos(resp.data);
      } catch (e) {
        console.error("Erro ao carregar alunos", e);
      }
    }

    carregar();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home alunos={alunos} />} />
        <Route path="/aluno/:id" element={<AlunoDetalhes alunos={alunos} />} />
      </Routes>
    </BrowserRouter>
  );
}
