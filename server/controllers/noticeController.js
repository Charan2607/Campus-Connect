const { notices } = require('../db');

// @desc    Get all notices
// @route   GET /api/notices
// @access  Private
exports.getNotices = async (req, res) => {
    try {
        const allNotices = await notices.find({});
        res.json(allNotices);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Create new notice
// @route   POST /api/notices
// @access  Private/Admin
exports.createNotice = async (req, res) => {
    const { title, content, targetAudience } = req.body;

    try {
        const notice = {
            title,
            content,
            targetAudience: targetAudience || 'all',
            postedBy: req.user._id,
            date: new Date(),
        };

        const newNotice = await notices.insert(notice);
        res.status(201).json(newNotice);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
