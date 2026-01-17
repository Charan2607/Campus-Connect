import { FiHome, FiBriefcase, FiCalendar, FiAward, FiBell, FiPlusSquare, FiUsers, FiMap, FiFolder } from 'react-icons/fi';

export const navigation = {
    student: [
        { name: 'Dashboard', path: '/student-dashboard', icon: FiHome },
        { name: 'Announcements', path: '/announcements', icon: FiBell },
        { name: 'Learning Roadmap', path: '/roadmap', icon: FiMap },
        { name: 'Internships', path: '/internships', icon: FiBriefcase },
        { name: 'Events', path: '/events', icon: FiCalendar },
        { name: 'Certificate Wallet', path: '/wallet', icon: FiFolder },
        { name: 'Get Certified', path: '/apply-certificate', icon: FiAward },
    ],
    admin: [
        { name: 'Dashboard', path: '/admin', icon: FiHome },
        { name: 'Post Announcement', path: '/admin/create-notice', icon: FiBell },
        { name: 'Manage Internships', path: '/admin/internships', icon: FiBriefcase },
        { name: 'Post Internship', path: '/admin/create-internship', icon: FiPlusSquare },
        { name: 'Post Event', path: '/admin/create-event', icon: FiCalendar },
        { name: 'Certificates', path: '/admin/certificates', icon: FiAward },
    ],
};
