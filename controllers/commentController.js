const Comment = require('../models/commentModel');

const addComment = async (req, res) => {
    try {
        const { comment } = req.body;
        const postId = req.params.postId;
        const userId = req.user.id;
        await Comment.addComment(comment, userId, postId);
        res.status(201).json({ message: 'Comment added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getComments = async (req, res) => {
    try {
        const { postId } = req.params;
        const [comments] = await Comment.getCommentsByPostId(postId);
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { addComment, getComments };
