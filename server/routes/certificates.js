const express = require('express');
const router = express.Router();
const { createRequest, getRequests, updateStatus } = require('../controllers/certificateController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .post(protect, createRequest)
    .get(protect, getRequests);

router.route('/:id')
    .put(protect, admin, updateStatus);

module.exports = router;
