const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('LearnHub API is running');
});

const authRoutes = require('./routes/authRoutes');
const topicsRoutes = require('./routes/topicsRoutes');
const progressRoutes = require('./routes/progressRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/topics', topicsRoutes);
app.use('/api/progress', progressRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
