// TODO: IMPORT MODULES
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use("/servicios", servicios);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🤩`);
});


//TODO: CONECTION TO MONGODB
const DB = mongoose.connect("mongodb+srv://ccajarlaguna:ub2zlkdav1BcyYkF@apirest.pywmiwy.mongodb.net/?retryWrites=true&w=majority&appName=APIRest", {
    userNewUrlParser: true,
    useUnifiedTopology: true
})

DB.once("open", () => {
    console.log("Database connected successfully");
});