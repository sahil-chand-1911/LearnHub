const prisma = require('../utils/prismaClient');

// Get all topics with filtering, search, and pagination
const getTopics = async (req, res) => {
    try {
        const { category, difficulty, search, page = 1, limit = 10 } = req.query;

        const where = {};

        if (category) {
            where.category = category;
        }

        if (difficulty) {
            where.difficulty = difficulty;
        }

        if (search) {
            where.OR = [
                { title: { contains: search } },
                { content: { contains: search } },
            ];
        }

        const skip = (parseInt(page) - 1) * parseInt(limit);

        const [topics, total] = await Promise.all([
            prisma.topic.findMany({
                where,
                skip,
                take: parseInt(limit),
                orderBy: { createdAt: 'desc' },
            }),
            prisma.topic.count({ where }),
        ]);

        res.json({
            topics,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages: Math.ceil(total / parseInt(limit)),
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching topics', error: error.message });
    }
};

// Get single topic by ID
const getTopicById = async (req, res) => {
    try {
        const { id } = req.params;
        const topic = await prisma.topic.findUnique({
            where: { id },
        });

        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }

        res.json(topic);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching topic', error: error.message });
    }
};

// Create new topic (Admin only)
const createTopic = async (req, res) => {
    try {
        const { title, content, category, difficulty, resources } = req.body;

        const topic = await prisma.topic.create({
            data: {
                title,
                content,
                category,
                difficulty,
                resources,
            },
        });

        res.status(201).json(topic);
    } catch (error) {
        res.status(500).json({ message: 'Error creating topic', error: error.message });
    }
};

// Update topic (Admin only)
const updateTopic = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, category, difficulty, resources } = req.body;

        const topic = await prisma.topic.update({
            where: { id },
            data: {
                title,
                content,
                category,
                difficulty,
                resources,
            },
        });

        res.json(topic);
    } catch (error) {
        res.status(500).json({ message: 'Error updating topic', error: error.message });
    }
};

// Delete topic (Admin only)
const deleteTopic = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.topic.delete({
            where: { id },
        });

        res.json({ message: 'Topic deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting topic', error: error.message });
    }
};

module.exports = {
    getTopics,
    getTopicById,
    createTopic,
    updateTopic,
    deleteTopic,
};
