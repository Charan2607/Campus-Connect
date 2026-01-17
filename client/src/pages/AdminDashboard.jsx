import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { FiBell, FiBriefcase, FiAward, FiCalendar } from 'react-icons/fi';

const AdminDashboard = () => {
    const stats = [
        { label: 'Total Students', value: '120+', icon: '👥', color: 'bg-blue-100 text-blue-600' },
        { label: 'Active Internships', value: '45', icon: '💼', color: 'bg-green-100 text-green-600' },
        { label: 'Pending Certificates', value: '12', icon: '📝', color: 'bg-yellow-100 text-yellow-600' },
    ];

    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${stat.color}`}>
                            <span role="img" aria-label="icon">{stat.icon}</span>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link to="/admin/create-notice" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FiBell className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">Make Announcement</h3>
                    <p className="text-gray-500 text-xs">Post new updates for students.</p>
                </Link>

                <Link to="/admin/internships" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FiBriefcase className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">View Internships</h3>
                    <p className="text-gray-500 text-xs">Manage current job listings.</p>
                </Link>

                <Link to="/admin/create-internship" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FiPlusSquare className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">Post Internship</h3>
                    <p className="text-gray-500 text-xs">Add new job opportunities.</p>
                </Link>

                <Link to="/admin/create-event" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FiCalendar className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">Create Event</h3>
                    <p className="text-gray-500 text-xs">Schedule a new college event.</p>
                </Link>

                <Link to="/admin/certificates" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FiAward className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">Review Certificates</h3>
                    <p className="text-gray-500 text-xs">Approve pending requests.</p>
                </Link>
            </div>
        </DashboardLayout>
    );
};

export default AdminDashboard;
