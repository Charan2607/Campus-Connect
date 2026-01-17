const db = require('./db');

const realInternships = [
    {
        title: 'Software Engineering Intern',
        company: 'Google',
        description: 'Join our team to build scalable systems. You will work on backend services using Go and C++.',
        skillsRequired: ['C++', 'Python', 'Algorithms', 'System Design'],
        stipend: '₹80,000/month',
        location: 'Bangalore / Hyderabad',
        applyLink: 'https://careers.google.com/students/',
        type: 'External',
        source: 'Google Careers',
        branches: ['CSE', 'AIML', 'ISE']
    },
    {
        title: 'Data Science Intern',
        company: 'Microsoft',
        description: 'Work with the Azure AI team to build next-gen machine learning models. Experience with PyTorch is a plus.',
        skillsRequired: ['Python', 'Machine Learning', 'Azure', 'SQL'],
        stipend: '₹75,000/month',
        location: 'Hyderabad',
        applyLink: 'https://careers.microsoft.com/students/us/en',
        type: 'External',
        source: 'Microsoft Careers',
        branches: ['AIML', 'CSE']
    },
    {
        title: 'Frontend Developer Intern',
        company: 'Swiggy',
        description: 'Help us build the next generation of food delivery apps. React and React Native experience required.',
        skillsRequired: ['React', 'JavaScript', 'CSS', 'Redux'],
        stipend: '₹40,000/month',
        location: 'Bangalore',
        applyLink: 'https://careers.swiggy.com/',
        type: 'External',
        source: 'Swiggy Careers',
        branches: ['CSE', 'ISE']
    },
    {
        title: 'Backend Developer Intern',
        company: 'Razorpay',
        description: 'Build robust payment infrastructure. Experience with Node.js and Databases is key.',
        skillsRequired: ['Node.js', 'MongoDB', 'PostgreSQL', 'API Design'],
        stipend: '₹50,000/month',
        location: 'Bangalore',
        applyLink: 'https://razorpay.com/jobs/',
        type: 'External',
        source: 'Razorpay Jobs',
        branches: ['CSE', 'ISE']
    },
    {
        title: 'Cyber Security Analyst',
        company: 'Palo Alto Networks',
        description: 'Analyze security threats and build defensive mechanisms. Knowledge of networking and security protocols required.',
        skillsRequired: ['Network Security', 'Linux', 'Python', 'Ethical Hacking'],
        stipend: '₹65,000/month',
        location: 'Remote',
        applyLink: 'https://jobs.paloaltonetworks.com/',
        type: 'External',
        source: 'Pan Networks',
        branches: ['CSE', 'Cyber Security']
    },
    {
        title: 'UI/UX Design Intern',
        company: 'Cred',
        description: 'Design beautiful and intuitive interfaces for our high-end user base. Figma mastery is a must.',
        skillsRequired: ['Figma', 'Prototyping', 'User Research', 'Visual Design'],
        stipend: '₹45,000/month',
        location: 'Bangalore',
        applyLink: 'https://careers.cred.club/',
        type: 'External',
        source: 'Cred Careers',
        branches: ['CSE', 'ISE', 'Design']
    }
];

const seedData = async () => {
    try {
        // Try deleting but catch error if file lock prevents it
        try {
            console.log('Attempting to clear existing internships...');
            await db.internships.remove({}, { multi: true });
            console.log('Cleared.');
        } catch (e) {
            console.log('Could not clear (likely file lock), appending instead. Error:', e.message);
        }

        console.log('Seeding new data...');
        for (const internship of realInternships) {
            await db.internships.insert({
                ...internship,
                createdAt: new Date()
            });
            console.log('Inserted:', internship.company);
        }

        console.log('Successfully seeded real-world internships!');
    } catch (error) {
        console.error('CRITICAL Error seeding data:', error);
    }
    // Force exit after a safe delay
    setTimeout(() => {
        console.log('Exiting...');
        process.exit(0);
    }, 2000);
};

seedData();
