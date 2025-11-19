Estudo de Caso: Aplicação Web e Mobile com Rotas, API e Testes

Este projeto foi desenvolvido para a atividade prática envolvendo rotas, consumo de API e testes automatizados.
Ele está dividido em duas partes:

Web (React + Vite + Axios + React Router DOM + Vitest)

Mobile (React Native + Expo + React Navigation + Axios)

O objetivo é listar alunos, exibir detalhes e consumir a API REST fornecida.

📁 Estrutura do Projeto
meu-estudo-caso/
 ├── web/       # Aplicação Web (React + Vite)
 ├── mobile/    # Aplicação Mobile (Expo + React Native)
 └── README.md  # Este arquivo

🟦 1. Aplicação Web (React + Vite)
🚀 Tecnologias usadas

React

Vite

React Router DOM

Axios

React Bootstrap

Vitest

React Testing Library

📌 Como rodar a aplicação web

Entre na pasta web:

cd web


Instale as dependências:

npm install


Rode o projeto:

npm run dev


Acesse no navegador:
👉 http://localhost:5173/

🔗 Rotas da aplicação web
Rota	Descrição
/	Lista de alunos
/aluno/:id	Detalhes de um aluno
🌐 Consumo de API

A aplicação usa a API pública:

https://proweb.leoproti.com.br/alunos


Endpoints usados:

GET /alunos → Lista todos os alunos

GET /alunos/{id} → Detalhes do aluno

🧪 Como rodar os testes (Vitest)

Dentro da pasta web:

npm run test

🟩 2. Aplicação Mobile (React Native + Expo)
🚀 Tecnologias usadas

React Native

Expo

React Navigation

Axios

📌 Como rodar a aplicação mobile

Entre na pasta mobile:

cd mobile


Instale dependências:

npm install


Rode o app:

npx expo start


Abra no celular usando o app Expo Go
ou no emulador Android/iOS.

🔗 Navegação no Mobile
Tela	Nome no código	Descrição
Home	Home	Tela inicial
Lista	Lista	Lista de alunos
Detalhes	Detalhes	Dados do aluno
🌐 API utilizada no Mobile

Mesma da web:

https://proweb.leoproti.com.br/alunos

🟣 3. Deploy no Vercel (Web)

Crie conta no Vercel → https://vercel.com

Conecte seu GitHub

Importe o projeto web/

Selecione framework Vite

Clique em Deploy

🟠 4. Como subir o projeto para o GitHub

Na pasta raiz meu-estudo-caso:

git init
git add .
git commit -m "Entrega do estudo de caso"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/meu-estudo-caso.git
git push -u origin main

📝 Créditos e Referências

React: https://react.dev

Vite: https://vitejs.dev

React Router: https://reactrouter.com

Axios: https://axios-http.com

Expo: https://expo.dev

React Navigation: https://reactnavigation.org

Vitest: https://vitest.dev

API de Alunos: https://proweb.leoproti.com.br/swaggerui/index.html