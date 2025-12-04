const prisma = require('../utils/prismaClient');

// Get user's progress
const getUserProgress = async (req, res) => {
    try {
        const userId = req.user.userId;

        const progress = await prisma.progress.findMany({
            where: { userId },
            include: {
                topic: true,
            },
            orderBy: { completedAt: 'desc' },
        });

        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching progress', error: error.message });
    }
};

// Mark topic as completed
const markTopicComplete = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { topicId } = req.params;

        const progress = await prisma.progress.upsert({
            where: {
                userId_topicId: {
                    userId,
                    topicId: parseInt(topicId),
                },
            },
            update: {
                completedAt: new Date(),
            },
            create: {
                userId,
                topicId: parseInt(topicId),
                status: 'COMPLETED',
            },
        });

        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: 'Error marking topic complete', error: error.message });
    }
};

// Get progress stats
const getProgressStats = async (req, res) => {
    try {
        const userId = req.user.userId;

        const [totalCompleted, totalTopics] = await Promise.all([
            prisma.progress.count({ where: { userId } }),
            prisma.topic.count(),
        ]);

        const progressByCategory = await prisma.progress.groupBy({
            by: ['topicId'],
            where: { userId },
            _count: true,
        });

        res.json({
            totalCompleted,
            totalTopics,
            completionRate: totalTopics > 0 ? (totalCompleted / totalTopics) * 100 : 0,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stats', error: error.message });
    }
};

module.exports = {
    getUserProgress,
    markTopicComplete,
    getProgressStats,
};
