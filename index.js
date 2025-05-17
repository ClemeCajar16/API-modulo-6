// TODO: IMPORT MODULES
const express = require('express'); // ? importamos express
const morgan = require('morgan'); // ? importamos morgan
const cors = require('cors'); // ? importamos cors
const mongoose = require('mongoose'); // ? importamos mongoose

const bodyParser = require('body-parser'); // ? importamos body-parser, un middleware para analizar el cuerpo de la peticion


const app = express(); // ?se usa la constante app para crear una instancia de express

app.use(bodyParser.json());// ? analiza el cuerpo de la peticion y lo convierte a json





app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🤩`);
});