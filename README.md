# Desafio_01_Bootcamp_Rocketseat
Primeiro desafio do Bootcamp da Rocketseat, com o objetivo de criar uma aplicação para armazenar projetos e suas tarefas do zero utilizando Express.

## Este desafio consiste em desenvolver um um pequeno servidor utilizando [Node.js](https://nodejs.org/en/), do qual o seu objetivo é criar uma aplicação para armazenar projetos
### Basicamente este projeto é baseado em uma aplicação CRUD (Create, Read, Updated, Delete).

**Requisitos para testar esta aplição:**
* Ter o Node.js instalado
* Ter o NPM ou YARN instalado

**Passos para executar a aplição**
* Abrir um terminal de comando
* Caminhar até onde o projeto esta localizado ex: `(**cd** c:\uses\projetos\Desafio_01)`
* Executar o comando `yarn` ou `npm install`
* Após instalada as dependencias, executar o comando `yarn start` ou `npm start`

#### Após instaldo as dependencias e colocado o servidor em funcionamento, basta executar as requisições nas seguintes rotas:
  * http://localhost:3333/projects (**Metodo GET**)
  * http://localhost:3333/projects (**Metodo POST**) Passando no BODY {"id" : "numero id",	"title" : " Titulo Projeto"}  
  * http://localhost:3333/projects/"numero_id" (**Metodo PUT**) Passando no BODY {	"title" : "Nome Projeto"}
  * http://localhost:3333/projects/"numero_id" (**Metodo DELETE**)
  * http://localhost:3333/projects/"numero_id" (**Metodo POST**) Passando no BODY {	"title" : "Nome Tarefa"}
  * **No lugar de "numero_id" inserir o numero a ser pesquidado**
  
