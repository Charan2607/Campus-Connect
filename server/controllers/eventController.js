const { events } = require('../db');

// @desc    Get all events
// @route   GET /api/events
// @access  Private
exports.getEvents = async (req, res) => {
    try {
        const allEvents = await events.find({});
        res.json(allEvents);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Create new event
// @route   POST /api/events
// @access  Private/Admin
exports.createEvent = async (req, res) => {
    const { title, description, date, location } = req.body;

    try {
        const newEvent = {
            title,
            description,
            date,
            location,
            createdBy: req.user._id,
            createdAt: new Date()
        };

        const event = await events.insert(newEvent);
        res.status(201).json(event);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
