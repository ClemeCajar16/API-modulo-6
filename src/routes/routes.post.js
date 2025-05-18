// routes/routes.port.js
import { Router } from 'express';
import { Post } from '../schemas/post.schema.js';

const router = Router();

// GET todos los posts
router.get('/', async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET un post por ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
