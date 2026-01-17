export const roadmaps = {
    AIML: [
        {
            step: 1,
            title: 'Python Fundamentals',
            description: 'Master the basics of Python, data structures, and algorithms.',
            resources: [
                { name: 'Python for Everybody (Coursera)', link: 'https://www.coursera.org/specializations/python' },
                { name: 'Automate the Boring Stuff', link: 'https://automatetheboringstuff.com/' }
            ],
            type: 'course'
        },
        {
            step: 2,
            title: 'Mathematics for ML',
            description: 'Linear Algebra, Calculus, and Probability statistics.',
            resources: [
                { name: 'Mathematics for ML (Imperial College)', link: 'https://www.coursera.org/specializations/mathematics-machine-learning' }
            ],
            type: 'course'
        },
        {
            step: 3,
            title: 'Data Analysis & Viz',
            description: 'Pandas, NumPy, Matplotlib, Seaborn.',
            resources: [
                { name: 'Data Analysis with Python (FreeCodeCamp)', link: 'https://www.freecodecamp.org/learn/data-analysis-with-python/' }
            ],
            type: 'skill'
        },
        {
            step: 4,
            title: 'Machine Learning Algorithms',
            description: 'Supervised/Unsupervised learning, Scikit-learn.',
            resources: [
                { name: 'Machine Learning (Andrew Ng)', link: 'https://www.coursera.org/specializations/machine-learning-introduction' }
            ],
            type: 'certification'
        },
        {
            step: 5,
            title: 'Deep Learning & Neural Networks',
            description: 'TensorFlow, PyTorch, CNNs, RNNs.',
            resources: [
                { name: 'Deep Learning Specialization', link: 'https://www.deeplearning.ai/' }
            ],
            type: 'certification'
        }
    ],
    CSE: [
        {
            step: 1,
            title: 'Programming Basics (C++/Java)',
            description: 'Strong foundation in OOP and Logic.',
            resources: [],
            type: 'course'
        },
        {
            step: 2,
            title: 'Data Structures & Algorithms',
            description: 'Arrays, Lists, Trees, Graphs, DP.',
            resources: [
                { name: 'Mastering Data Structures (Udemy)', link: '#' }
            ],
            type: 'course'
        },
        {
            step: 3,
            title: 'Web Development',
            description: 'HTML, CSS, JS, React, Node.js.',
            resources: [
                { name: 'The Odin Project', link: 'https://www.theodinproject.com/' }
            ],
            type: 'skill'
        },
        {
            step: 4,
            title: 'Database Management',
            description: 'SQL (Postgres/MySQL) and NoSQL (MongoDB).',
            resources: [],
            type: 'skill'
        },
        {
            step: 5,
            title: 'System Design',
            description: 'Scalability, Load Balancing, Microservices.',
            resources: [],
            type: 'advanced'
        }
    ],
    // Default fallback
    General: [
        {
            step: 1,
            title: 'Communication Skills',
            description: 'Verbal and written communication excellence.',
            resources: [],
            type: 'soft-skill'
        },
        {
            step: 2,
            title: 'Aptitude & Logic',
            description: 'Problem solving for placements.',
            resources: [],
            type: 'soft-skill'
        }
    ]
};
