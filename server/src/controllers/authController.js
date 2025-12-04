const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../utils/prismaClient');

const signup = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                role: role || 'LEARNER',
            },
        });

        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(201).json({ token, user: { id: user.id, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token, user: { id: user.id, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

module.exports = { signup, login };
