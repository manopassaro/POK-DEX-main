const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require("path");
let message = "";
require("dotenv").config();
const port = process.env.PORT || 3000;

const pokedex = [
    {
        id: 1,
        nome: "Charmander",
        imagem: "img/charmander.png",
        tipo: "Fogo",
        altura: "0,7m",
        peso: "12Kg",
    },
    {
        id: 2,
        nome: "Squirtle",
        imagem: "img/squirtle.png",
        tipo: "Água",
        altura: "0,6m",
        peso: "13Kg",
    },
    {
        id: 3,
        nome: "Bulbasaur",
        imagem: "img/bulbasaur.png",
        tipo: "Planta",
        altura: "0,65m",
        peso: "10Kg",
    },
];

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");



app.get('/', (req, res) => {
    setTimeout(() => {
        message = "";
      }, 1000);
    res.render('index', {pokedex, message})
});

app.post('/add', (req, res) => {
    const pokemon = req.body;
    pokemon.id = pokedex.length + 1;
    pokedex.push(pokemon);
    message = "Pokémon cadastrado!"
    
    res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
    const id = req.params.id - 1;

    delete pokedex[id];
    res.redirect('/');
});

app.listen(port, () => console.log(`rodando em http://localhost:${port}`));