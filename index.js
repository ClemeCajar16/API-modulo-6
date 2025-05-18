// TODO: IMPORT MODULES
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './src/routes/routes.post.js';


const app = express();

app.use(bodyParser.json());
app.use("/servicios", postRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🤩`);
});


//TODO: CONECTION TO MONGODB
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
 
app.get('/', (req, res) => {
  res.send('Hello World!');
});