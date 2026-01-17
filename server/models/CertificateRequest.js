const mongoose = require('mongoose');

const certificateRequestSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true }, // e.g., Bonafide, Internship Completion
    details: String,
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    requestedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CertificateRequest', certificateRequestSchema);
