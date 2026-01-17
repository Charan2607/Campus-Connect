const db = require('../db');

exports.getInternships = async (req, res) => {
    const { branch } = req.query;

    try {
        let docs = await db.internships.find({}); // Use promisified find

        // Filter by branch if provided
        if (branch && branch !== 'General') {
            docs = docs.filter(job =>
                !job.branches || job.branches.includes(branch) || job.branches.includes('All') || job.branches.length === 0
            );
        }

        res.status(200).json(docs);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving internships.');
    }
};

exports.createInternship = (req, res) => {
    const { title, company, description, location, stipend, applyLink, branches } = req.body;

    db.internships.insert({
        title,
        company,
        description,
        location,
        stipend,
        applyLink,
        branches: branches || [], // Store target branches
        createdAt: new Date(),
        type: 'Internal'
    }, (err, newDoc) => {
        if (err) return res.status(500).send('Error creating internship.');
        res.status(201).json(newDoc);
    });
};

exports.seedInternships = async (req, res) => {
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

    try {
        await db.internships.remove({}, { multi: true });
        for (const internship of realInternships) {
            await db.internships.insert({ ...internship, createdAt: new Date() });
        }
        res.status(200).send('Seeding successful!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Seeding failed.');
    }
};
