// importando express
import express from "express";

//instanciando express
const app = express();

// array de grupos para retorno
const grupos = [
    {id: 0, "todos": "Todos"},
    {id: 1, "admin": "Administradores"}, 
    {id: 2, "gerentes":"Gerentes"},
    {id: 3, "usuarios": "Usuários limitados"}
]
// array de unidades para retorno
const unidades = [
    {id: 0, "Porto Velho": "Porto Velho"},
    {id: 1, "Vilhena": "Vilhena"},
    {id: 2, "Cacoal":"Cacoal"},
    {id: 3, "Guajará": "Guajará"}
]

// array de usuarios para retorno
const usuarios = [
    {id: 0, "jose": "José da Silva"},
    {id: 1, "vicentesilva": "Vicente da Silva"},
    {id: 2, "noesilva":"Noé Silva"},
    {id: 3, "thomesilva": "Thomé Silva"}
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

// exportando para o server.js fazer uso
export default app