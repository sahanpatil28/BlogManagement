const db = require('../config/db');

const Comment = {
    addComment: (comment, userId, postId) => {
        const query = 'INSERT INTO comments (comment, user_id, post_id) VALUES (?, ?, ?)';
        return db.promise().execute(query, [comment, userId, postId]);
    },

    getCommentsByPostId: (postId) => {
        const query = 'SELECT * FROM comments WHERE post_id = ?';
        return db.promise().query(query, [postId]);
    }
};

module.exports = Comment;
