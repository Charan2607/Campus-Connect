import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';
import { FiUser, FiMail, FiBook, FiAward, FiBriefcase, FiEdit2, FiSave, FiLogOut } from 'react-icons/fi';

const Profile = () => {
    const { currentUser, logout } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        semester: '6th',
        bio: 'Aspiring AIML Engineer with a passion for deep learning and web development.'
    });

    const stats = [
        { label: 'Certificates', value: 3, icon: FiAward, color: 'text-yellow-600', bg: 'bg-yellow-50' },
        { label: 'Internships', value: 2, icon: FiBriefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Events', value: 5, icon: FiBook, color: 'text-purple-600', bg: 'bg-purple-50' },
    ];

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically attempt to save to backend
    };

    return (
        <DashboardLayout title="My Profile">
            <div className="max-w-4xl mx-auto">
                {/* Header Card */}
                <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-500 overflow-hidden bg-white">
                            {/* Placeholder Avatar */}
                            {currentUser?.email?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <span className="mt-3 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wide">
                            {currentUser?.role || 'Student'}
                        </span>
                    </div>

                    <div className="relative z-10 pt-4 flex-1 text-center md:text-left w-full">
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">{currentUser?.name || 'Student Name'}</h1>
                                <p className="text-gray-500 font-medium mb-4">{currentUser?.branch || 'General'} Engineering</p>
                            </div>
                            <button
                                onClick={logout}
                                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                            >
                                <FiLogOut /> Logout
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="flex items-center gap-3 text-gray-600 p-3 bg-gray-50 rounded-xl">
                                <FiMail className="text-blue-500" />
                                <span className="text-sm">{currentUser?.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 p-3 bg-gray-50 rounded-xl">
                                <FiUser className="text-indigo-500" />
                                <span className="text-sm">ID: 2023-CS-042</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all">
                            <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                                <p className="text-gray-500 text-sm">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Details Section */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">Academic Details</h2>
                        <button
                            onClick={isEditing ? handleSave : () => setIsEditing(true)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isEditing
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            {isEditing ? <><FiSave /> Save</> : <><FiEdit2 /> Edit</>}
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Current Semester</label>
                            {isEditing ? (
                                <select
                                    className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                                    value={formData.semester}
                                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={`${n}th`}>{n}th Semester</option>)}
                                </select>
                            ) : (
                                <p className="text-gray-600 p-3 bg-gray-50 rounded-xl border border-transparent">{formData.semester} Semester</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Bio / Career Goals</label>
                            {isEditing ? (
                                <textarea
                                    className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                />
                            ) : (
                                <p className="text-gray-600 p-3 bg-gray-50 rounded-xl border border-transparent leading-relaxed">
                                    {formData.bio}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Profile;
