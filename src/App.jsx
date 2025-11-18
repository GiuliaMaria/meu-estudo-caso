import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlunoDetalhes from "./pages/AlunoDetalhes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aluno/:id" element={<AlunoDetalhes />} />
      </Routes>
    </BrowserRouter>
  );
}
