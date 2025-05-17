// TODO: IMPORT MODULES

import express from 'express';  
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🤩`);
});