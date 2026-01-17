import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import AnnouncementCard from '../components/AnnouncementCard';
import { Link } from 'react-router-dom';
import { FiBriefcase, FiAward } from 'react-icons/fi';

const StudentDashboard = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/notices')
            .then(res => res.json())
            .then(data => {
                setNotices(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <DashboardLayout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Quick Actions & Stats */}
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-2">Ready to explore?</h2>
                            <p className="text-indigo-100 mb-6">Find your dream internship or get certified today.</p>
                            <div className="flex gap-3">
                                <Link to="/internships" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-xl transition-colors">
                                    <FiBriefcase className="w-6 h-6" />
                                </Link>
                                <Link to="/apply-certificate" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-xl transition-colors">
                                    <FiAward className="w-6 h-6" />
                                </Link>
                            </div>
                        </div>
                        {/* Blob */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
                        <div className="space-y-3">
                            <Link to="/internships" className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-blue-50 group transition-colors">
                                <span className="text-gray-600 group-hover:text-blue-600 font-medium">Browse Internships</span>
                                <span className="text-gray-400">→</span>
                            </Link>
                            <Link to="/events" className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-blue-50 group transition-colors">
                                <span className="text-gray-600 group-hover:text-blue-600 font-medium">Upcoming Events</span>
                                <span className="text-gray-400">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column: Announcements */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        Latest Announcements
                    </h2>
                    <div className="space-y-4">
                        {loading ? (
                            <p className="text-center text-gray-500 py-10">Loading updates...</p>
                        ) : notices.length > 0 ? (
                            notices.map(notice => <AnnouncementCard key={notice._id} notice={notice} />)
                        ) : (
                            <div className="text-center py-10 bg-white rounded-3xl border border-gray-100 border-dashed">
                                <p className="text-gray-500">No new announcements.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default StudentDashboard;
