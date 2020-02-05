const express = require('express')

const app = express()
app.use(express.json())

let projects = []
let countRequest = 0

//MIDDLEWARES
//Middleware para veririficar se o existe projeto com o ID enviado via ROUTE PARAMS
function verifyID(req, res, next) {

  const { id } = req.params

  const index = projects.findIndex(element => element.id === id)

  if (index !== -1) {
    return next()
  }
  return res.status(400).json({ error: 'Project not found' })
}

/* Middleware global que contabiliza quantas requisições foram realizadas ao
   servidor */
app.use((req, res, next) => {
  
  console.log(`
  Até o momento ${countRequest < 2 ? 'foi realizada' : 'foram realizadas'} 
  ${countRequest += 1} ${countRequest < 2 ? 'requisição' : 'requisições'} a este servidor.  
  `)
  next()
})

// METODO POST (Cadastrar projetos, recebe os parametros pelo BODY, e cadastra
// o projeto na variável global "projects")
app.post('/projects', (req, res) => {

  const { id, title } = req.body

  projects.push({
    id,
    title,
    tasks: []
  })

  return res.json(projects)
})

//METODO GET (Listar todos projetos que estão na variável "projects")
app.get('/projects', (req, res) => {
  return res.json(projects)
})

//METODO PUT (Busca o projeto pelo ID e altera o titulo)
app.put('/projects/:id', verifyID, (req, res) => {

  const { id } = req.params
  const { title } = req.body

  projects.map(element => {
    if (element.id === id) element.title = title
  })
  res.json(projects)
})

//METODO GET (Exclui um projeto pelo seu ID)
app.delete('/projects/:id', verifyID, (req, res) => {

  const { id } = req.params
  const index = projects.findIndex(element => element.id === id)

  if (index !== -1) projects.splice(index, 1)

  return res.json(projects)
})

//METODO POST (Cadastra uma nova tarefa no projeto selecionado pelo ID)
app.post('/projects/:id/tasks', verifyID, (req, res) => {

  const { title } = req.body
  const { id } = req.params

  projects.map(element => {
    if (element.id === id) {
      element.tasks.push(title)
    }
  })
  res.json(projects)
})

app.listen(3333)