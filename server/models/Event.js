const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: String,
    organizer: String, // Or ref to User/Club
    type: { type: String, enum: ['workshop', 'seminar', 'cultural', 'other'], default: 'other' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', eventSchema);
