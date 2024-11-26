const Post = require('../models/postModel');

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.user.id;
        await Post.createPost(title, content, userId);
        res.status(201).json({ message: 'Post created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getPosts = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;
        const [posts] = await Post.getPosts(limit, offset);
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;
        await Post.updatePost(id, title, content);
        res.json({ message: 'Post updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await Post.deletePost(id);
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createPost, getPosts, updatePost, deletePost };
