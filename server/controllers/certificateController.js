const { certificateRequests } = require('../db');

// @desc    Create a certificate request
// @route   POST /api/certificates
// @access  Private (Student)
exports.createRequest = async (req, res) => {
    const { type, purpose } = req.body;

    try {
        const newRequest = {
            studentId: req.user._id,
            studentName: req.user.name,
            type, // 'Bonafide', 'Completion', etc.
            purpose,
            status: 'Pending',
            requestDate: new Date(),
        };

        const request = await certificateRequests.insert(newRequest);
        res.status(201).json(request);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get all requests (for Admin) or My requests (for Student)
// @route   GET /api/certificates
// @access  Private
exports.getRequests = async (req, res) => {
    try {
        let query = {};
        if (req.user.role !== 'admin') {
            query = { studentId: req.user._id };
        }

        // Sort implementation manually since NeDB find doesn't chain sort easily with promisify wrapper
        // We will just return all and sort in frontend or refactor db wrapper later if needed
        const requests = await certificateRequests.find(query);
        res.json(requests);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Update request status
// @route   PUT /api/certificates/:id
// @access  Private (Admin)
exports.updateStatus = async (req, res) => {
    const { status } = req.body; // 'Approved', 'Rejected'

    try {
        const numReplaced = await certificateRequests.update(
            { _id: req.params.id },
            { $set: { status } }
        );

        if (numReplaced === 0) {
            return res.status(404).json({ message: 'Request not found' });
        }

        res.json({ message: 'Status updated' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};
