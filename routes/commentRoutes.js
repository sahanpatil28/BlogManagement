const express = require('express');
const { addComment, getComments } = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/posts/:postId/comments', authMiddleware, addComment);
router.get('/posts/:postId/comments', getComments);

module.exports = router;
