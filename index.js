// TODO: IMPORT MODULES

import express from 'express';  
import mongoose from 'mongoose';


const app = express();
const mongoose = mongoose()


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🤩`);
});