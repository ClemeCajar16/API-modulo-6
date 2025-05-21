// TODO: IMPOTA MODULOS
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import  path  from "path";
import postRoutes from './src/routes/routes.post.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(bodyParser.json());
app.use("/servicios", postRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🤩`);
});


//! CONECCION CON MONGODB
mongoose.connect("mongodb+srv://ccajarlaguna:ub2zlkdav1BcyYkF@apirest.pywmiwy.mongodb.net/?retryWrites=true&w=majority&appName=APIRest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Base de datos conectada exitosamente");
})
.catch((error) => {
  console.error("❌ Error al conectar con la base de datos:", error);
});
 

//!RUTA GET EXPRESS
app.get('/', (req, res) => {
  res.send('Hello World!');
});