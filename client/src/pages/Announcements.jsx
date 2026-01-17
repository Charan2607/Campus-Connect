import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import AnnouncementCard from '../components/AnnouncementCard';

const Announcements = () => {
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
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Campus Announcements</h1>
                    <p className="text-gray-500">Stay updated with the latest news and notices.</p>
                </div>

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
        </DashboardLayout>
    );
};

export default Announcements;
