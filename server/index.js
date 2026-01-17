require('dotenv').config();
const util = require('util');
if (!util.isDate) {
    util.isDate = (d) => d instanceof Date;
}
if (!util.isRegExp) {
    util.isRegExp = (re) => re instanceof RegExp;
}
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('CampusConnect Server is running');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/internships', require('./routes/internships'));
app.use('/api/notices', require('./routes/notices'));
app.use('/api/certificates', require('./routes/certificates'));
app.use('/api/events', require('./routes/events'));

// Database
const db = require('./db');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
