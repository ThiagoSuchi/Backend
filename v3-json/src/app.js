// importando express
import express from "express";

//instanciando express
const app = express();

app.use(express.json())

// array de grupos para retorno
const grupos = [
    {id: 0, nome: "Todos"},
    {id: 1, nome: "Administradores"}, 
    {id: 2, nome: "Gerentes"},
    {id: 3, nome: "Usuários limitados"}
]
// array de unidades para retorno
const unidades = [
    {id: 0, nome: "Porto Velho"},
    {id: 1, nome: "Vilhena"},
    {id: 2, nome: "Cacoal"},
    {id: 3, nome: "Guajará"}
]

// array de usuarios para retorno
const usuarios = [
    {id: 0, nome: "José da Silva"},
    {id: 1, nome: "Vicente da Silva"},
    {id: 2, nome: "Noé Silva"},
    {id: 3, nome: "Thomé Silva"}
]

// Rota vazia - raiz
app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo ao auth');
})

// Rotas para cada array
app.get('/grupos', (req, res) => {
    res.status(200).json(grupos);
})

app.get('/unidades', (req, res) => {
    res.status(200).json(unidades);
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
})

app.post('/usuarios', (req, res) => {
    console.log(req.body);
    usuarios.push(req.body);
    res.status(200).json(usuarios)
})

app.put('/usuarios/:id', (req, res) => {
    let index = buscar(req.params.id);
    usuarios[index].nome = req.body.nome
    res.json(usuarios[index])
})

app.delete('/usuarios/:id', (req, res) => {
    let { id } = req.params
    let index = buscar(id, usuarios)
    usuarios.splice(index, 1)
    res.send(`Usuário de ID ${id} deletado com sucesso!`)
})

function buscar(id, array) {
    return array.findIndex(item => item.id == id)
}

// exportando para o server.js fazer uso
export default app