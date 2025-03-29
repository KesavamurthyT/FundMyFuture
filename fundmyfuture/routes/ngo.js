const express = require('express');
const router = express.Router();
const db = require('../config/firebase');

// Approve or reject application
router.put('/approve/:id', async (req, res) => {
    try {
        const { status } = req.body; // "Approved" or "Rejected"
        await db.collection('students').doc(req.params.id).update({ status });
        res.json({ message: "Application status updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
