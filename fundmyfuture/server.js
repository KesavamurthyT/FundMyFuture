const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const studentRoutes = require('./routes/student');
const ngoRoutes = require('./routes/ngo');
const donorRoutes = require('./routes/donor');

// Set Correct API Routes
app.use('/api/students', studentRoutes);
app.use('/api/ngos', ngoRoutes);
app.use('/api/donors', donorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
