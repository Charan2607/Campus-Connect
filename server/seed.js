const { users } = require('./db');
const bcrypt = require('bcryptjs');

const seedUsers = async () => {
    try {
        console.log('Seeding NeDB...');

        // Clear existing users
        await users.remove({}, { multi: true });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('password123', salt);

        const newUsers = [
            {
                name: 'Student User',
                email: 'student@test.com',
                password: hashedPassword,
                role: 'student',
                createdAt: new Date(),
            },
            {
                name: 'Faculty User',
                email: 'faculty@test.com',
                password: hashedPassword,
                role: 'faculty',
                createdAt: new Date(),
            },
            {
                name: 'Admin User',
                email: 'admin@test.com',
                password: hashedPassword,
                role: 'admin',
                createdAt: new Date(),
            },
        ];

        for (const user of newUsers) {
            await users.insert(user);
            console.log(`Created user: ${user.name}`);
        }

        console.log('Sample users created successfully');
        // NeDB is file-based, no need to "close" connection, just exit
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedUsers();
