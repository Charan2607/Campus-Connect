import React, { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { FiBriefcase, FiMapPin, FiTrash2, FiExternalLink } from 'react-icons/fi';

const ManageInternships = () => {
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchInternships();
    }, []);

    const fetchInternships = () => {
        const token = JSON.parse(localStorage.getItem('user'))?.token;
        fetch('http://localhost:5000/api/internships', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                setInternships(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    };

    return (
        <DashboardLayout title="Manage Internships">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Role & Company</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Location</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Stipend</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {loading ? (
                            <tr><td colSpan="5" className="p-8 text-center text-gray-500">Loading internships...</td></tr>
                        ) : internships.length > 0 ? (
                            internships.map((job) => (
                                <tr key={job._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                                                <FiBriefcase />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-bold text-gray-900">{job.title}</div>
                                                <div className="text-sm text-gray-500">{job.company}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${job.type === 'External' ? 'bg-pink-50 text-pink-700' : 'bg-green-50 text-green-700'}`}>
                                            {job.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex items-center gap-1"><FiMapPin /> {job.location}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                                        {job.stipend}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                                        <a href={job.applyLink} target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-900 font-bold flex inline-flex items-center gap-1">
                                            View <FiExternalLink />
                                        </a>
                                        {/* Mock Delete - would need API implementation */}
                                        <button className="text-red-400 hover:text-red-600 transition-colors" title="Delete (Mock)">
                                            <FiTrash2 />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="5" className="p-8 text-center text-gray-500">No internships found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
};

export default ManageInternships;
