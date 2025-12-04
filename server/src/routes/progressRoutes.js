const express = require('express');
const {
    getUserProgress,
    markTopicComplete,
    getProgressStats,
} = require('../controllers/progressController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getUserProgress);
router.get('/stats', authMiddleware, getProgressStats);
router.post('/:topicId', authMiddleware, markTopicComplete);

module.exports = router;
