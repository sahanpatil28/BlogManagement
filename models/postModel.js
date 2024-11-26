const db = require('../config/db');

const Post = {
    createPost: (title, content, userId) => {
        const query = 'INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)';
        return db.promise().execute(query, [title, content, userId]);
    },

    getPosts: (limit, offset) => {
        const query = 'SELECT * FROM posts LIMIT ? OFFSET ?';
        return db.promise().query(query, [limit, offset]);
    },

    getPostById: (id) => {
        const query = 'SELECT * FROM posts WHERE id = ?';
        return db.promise().query(query, [id]);
    },

    updatePost: (id, title, content) => {
        const query = 'UPDATE posts SET title = ?, content = ? WHERE id = ?';
        return db.promise().execute(query, [title, content, id]);
    },

    deletePost: (id) => {
        const query = 'DELETE FROM posts WHERE id = ?';
        return db.promise().execute(query, [id]);
    },

    searchPosts: (searchTerm) => {
        const query = 'SELECT * FROM posts WHERE title LIKE ? OR content LIKE ?';
        return db.promise().query(query, [`%${searchTerm}%`, `%${searchTerm}%`]);
    }
};

module.exports = Post;
