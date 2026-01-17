import React from 'react';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children, title }) => {
    const { currentUser } = useAuth();

    return (
        <div className="flex bg-gray-50 min-h-screen">
            <Sidebar role={currentUser?.role || 'student'} />

            <main className="flex-1 md:ml-64 h-screen overflow-y-auto relative">
                {/* Mobile Header */}
                <div className="md:hidden sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex justify-between items-center">
                    <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">CampusConnect</span>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>

                {/* Background Blobs */}
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-7xl mx-auto p-4 md:p-8"
                >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-14 mb-12">
                        {/* Title or Welcome Card */}
                        <div className="flex-1">
                            {title ? (
                                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                            ) : (
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg w-full md:w-auto md:min-w-[400px]">
                                    <h1 className="text-2xl font-bold text-gray-900">Welcome Back, {currentUser?.name ? currentUser.name.split(' ')[0] : 'Student'} 👋</h1>
                                    <p className="text-gray-500 text-sm mt-1">Here is what's happening on your campus today.</p>
                                </div>
                            )}
                        </div>

                        {/* Profile Pill */}
                        <div className="flex items-center gap-4 bg-white p-3 pr-6 rounded-full border border-gray-100 shadow-md self-start md:self-center">
                            <Link to="/profile">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-lg font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer ring-2 ring-white">
                                    {currentUser?.email?.charAt(0).toUpperCase()}
                                </div>
                            </Link>
                            <Link to="/profile" className="flex flex-col">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Student</span>
                                <span className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors">{currentUser?.name || 'User'}</span>
                            </Link>
                        </div>
                    </div>
                    {children}
                </motion.div>
            </main>
        </div>
    );
};

export default DashboardLayout;
