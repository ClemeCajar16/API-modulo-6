// !importaciones
import { Router } from 'express';
import { Post } from '../schemas/schemas.post.js';

const router = Router();

          
// ! GET todos los posts
router.get('/', async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ! GET un post por ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//! crear nuevo post

router.post('/', async (req, res) => {
    const post = new Post({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        mensaje: req.body.mensaje
    });
    
    try {
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ! actualizar un post
router.patch('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      {
        $set: {
          mensaje: req.body.mensaje,
          telefono: req.body.telefono
        }
      }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
 // ! eliminar un post
router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

export default router;
