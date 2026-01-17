const Nedb = require('nedb');
const path = require('path');

const createDatastore = (name) => {
    return new Nedb({
        filename: path.join(__dirname, 'data', `${name}.db`),
        autoload: true,
    });
};

const users = createDatastore('users');
const internships = createDatastore('internships');
const events = createDatastore('events');
const notices = createDatastore('notices');
const certificateRequests = createDatastore('certificateRequests');

// Wrap NeDB methods in Promises for async/await usage
const promisify = (db) => ({
    insert: (doc) => new Promise((resolve, reject) => {
        db.insert(doc, (err, newDoc) => err ? reject(err) : resolve(newDoc));
    }),
    findOne: (query) => new Promise((resolve, reject) => {
        db.findOne(query, (err, doc) => err ? reject(err) : resolve(doc));
    }),
    find: (query) => new Promise((resolve, reject) => {
        db.find(query, (err, docs) => err ? reject(err) : resolve(docs));
    }),
    update: (query, update, options = {}) => new Promise((resolve, reject) => {
        db.update(query, update, options, (err, numReplaced) => err ? reject(err) : resolve(numReplaced));
    }),
    remove: (query, options = {}) => new Promise((resolve, reject) => {
        db.remove(query, options, (err, numRemoved) => err ? reject(err) : resolve(numRemoved));
    }),
    // Expose original db instance if needed
    _db: db
});

module.exports = {
    users: promisify(users),
    internships: promisify(internships),
    events: promisify(events),
    notices: promisify(notices),
    certificateRequests: promisify(certificateRequests),
};
