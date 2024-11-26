const express = require('express');
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/posts', authMiddleware, createPost);
router.get('/posts', getPosts);
router.put('/posts/:id', authMiddleware, updatePost);
router.delete('/posts/:id', authMiddleware, deletePost);

module.exports = router;
