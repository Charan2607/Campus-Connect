import React, { useEffect, useState } from 'react';
import InternshipCard from '../components/InternshipCard';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';
import { FiFilter, FiGlobe, FiBriefcase } from 'react-icons/fi';

const Internships = () => {
    const [internships, setInternships] = useState([]);
    const [filter, setFilter] = useState('all'); // all, recommended
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();

    useEffect(() => {
        const userBranch = currentUser?.branch || 'General';
        const url = filter === 'recommended'
            ? `http://localhost:5000/api/internships?branch=${userBranch}`
            : 'http://localhost:5000/api/internships';

        const token = currentUser?.token || JSON.parse(localStorage.getItem('user'))?.token;

        fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setInternships(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [filter, currentUser]);

    return (
        <DashboardLayout title="Current Internships and Jobs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-lg font-bold text-gray-800">Available Opportunities</h2>
                </div>

                <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
                    <button
                        onClick={() => setFilter('all')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === 'all' ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        <FiGlobe /> All
                    </button>
                    <button
                        onClick={() => setFilter('recommended')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === 'recommended' ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        <FiFilter /> Recommended for {currentUser?.branch || 'You'}
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {loading ? (
                    <div className="text-center py-20 text-gray-500">Loading opportunities...</div>
                ) : internships.length > 0 ? (
                    internships.map(internship => (
                        <div key={internship._id} className="relative">
                            {/* Badge for External */}
                            {internship.type === 'External' && (
                                <div className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    External • {internship.source}
                                </div>
                            )}
                            <InternshipCard internship={internship} />
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed">
                        <FiBriefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 font-medium">No internships found for this category.</p>
                        <button onClick={() => setFilter('all')} className="text-indigo-600 font-bold text-sm mt-2 hover:underline">View all available jobs</button>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};

export default Internships;
