const express = require('express');
const router = express.Router();
const db = require('../config/firebase');

// Get all approved students (for donors)
router.get('/approved-applications', async (req, res) => {
    try {
        const students = await db.collection('students').where("status", "==", "Approved").get();
        const data = students.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
