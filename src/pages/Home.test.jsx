import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { describe, it, expect } from "vitest";
import axios from "axios";

vi.mock("axios");

describe("Página Home", () => {
  it("mostra lista de alunos", async () => {
    axios.get.mockResolvedValue({
      data: [{ id: 1, nome: "Teste" }]
    });

    render(<Home />);

    expect(await screen.findByText("Teste")).toBeInTheDocument();
  });
});
