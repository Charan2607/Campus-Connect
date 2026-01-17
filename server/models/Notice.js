const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    targetAudience: { type: String, enum: ['all', 'student', 'faculty'], default: 'all' },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Notice', noticeSchema);
