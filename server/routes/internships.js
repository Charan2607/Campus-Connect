const express = require('express');
const router = express.Router();
const { getInternships, createInternship, seedInternships } = require('../controllers/internshipController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(protect, getInternships).post(protect, admin, createInternship);
router.route('/seed').post(seedInternships); // public for now to ease calling

module.exports = router;
