# Visão Geral

Bem-vindo ao desafio técnico feito para a posição de desenvolvedor(a) Full Stack na Empy Bank!

## Objetivo

O objetivo desta aplicação é gerenciar a carteira de clientes da Empy Bank, permitindo o cadastro de clientes e assistentes comerciais, e a associação entre eles.

## Requisitos Gerais

- A aplicação como uma solução Full Stack (React JS e Node JS).
- O backend deve fornecer uma API RESTful para ser consumida pelo frontend.
- O frontend deve ser fiel aos protótipos fornecidos no Figma.

## Como rodar o projeto?

### 1. Clonar o repositório


`git clone git@github.com:VanehSann/empy.git`

Este comando irá baixar todo o código fonte do projeto para o diretório atual em sua máquina.

### 2. Executar o Frontend

#### a. Navegar até o diretório do frontend

`cd frontend`
#### b. Instalar as dependências do projeto:

`npm install`

#### c. Iniciar o servidor de desenvolvimento:

`npm run dev`

### 3. Executar o Backend (Parte 1)

#### a. Instalar o MongoDB
Se você ainda não tem o MongoDB instalado em sua máquina, você pode baixá-lo e instalá-lo seguindo as instruções no site oficial: 
[MongoDB Download Center](https://www.mongodb.com/try/download/community)


#### b. Iniciar o servidor MongoDB

`mongod`

Este comando iniciará o servidor MongoDB em sua máquina local. Qualquer dúvida, procure a documentação oficial do MongoDB.

#### a. Navegar até o diretório do backend

`cd backend`

#### b. Instalar as dependências do projeto

`npm install`

#### c. Executar o script de seed (Pra uma melhor experiência)

`npm run seed`

#### d. Iniciar o servidor de desenvolvimento

`npm run dev`

### 4. Renomear o arquivo .env-example para .env
Por fim, certifique-se de renomear o arquivo .env-example para .env no diretório do backend. Este arquivo contém variáveis de ambiente necessárias para o funcionamento correto do backend, como informações de conexão com o banco de dados.

Com essas etapas, você poderá executar tanto o frontend quanto o backend do projeto localmente em sua máquina.





## Stack utilizada


🚀 **Front-end:**

React,
TypeScript,
Axios,
React Router Dom,
React Hook Form,
Zod,
CSS Puro.

🚀 **Back-end:**

Node,
Express,
MongoDB,
Mongoose.

