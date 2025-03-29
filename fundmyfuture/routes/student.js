const express = require('express');
const router = express.Router();
const db = require('../config/firebase'); // Correct Firebase path

// Test Route (For Debugging)
router.get('/', (req, res) => {
    res.send("Students API is working!");
});

// Apply for funding
router.post('/apply', async (req, res) => {
    try {
        const { name, email, amount_requested } = req.body;
        if (!name || !email || !amount_requested) {
            return res.status(400).json({ error: "All fields are required" });
        }       

        await db.collection('students').add({
            name,
            email,
            amount_requested,
            status: "Pending",
            createdAt: new Date()
        });

        res.json({ message: "Application submitted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all student applications
router.get('/applications', async (req, res) => {
    try {
        const students = await db.collection('students').get();
        const data = students.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
