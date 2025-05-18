import express from 'express';
import { Router } from 'express';
import { Post } from "../schemas/post.schema.js";

Router.length('/servicios', async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
        
    } catch (error) {
        
    }
})