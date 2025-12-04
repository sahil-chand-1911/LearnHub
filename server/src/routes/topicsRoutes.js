const express = require('express');
const {
    getTopics,
    getTopicById,
    createTopic,
    updateTopic,
    deleteTopic,
} = require('../controllers/topicsController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', authMiddleware, getTopics);
router.get('/:id', authMiddleware, getTopicById);

// Admin routes
router.post('/', authMiddleware, adminMiddleware, createTopic);
router.put('/:id', authMiddleware, adminMiddleware, updateTopic);
router.delete('/:id', authMiddleware, adminMiddleware, deleteTopic);

module.exports = router;
