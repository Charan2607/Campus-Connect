import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const ApplyCertificate = () => {
    const [type, setType] = useState('Bonafide');
    const [purpose, setPurpose] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/certificates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
                },
                body: JSON.stringify({ type, purpose }),
            });

            if (response.ok) {
                alert('Request submitted successfully!');
                navigate('/student-dashboard');
            } else {
                alert('Failed to submit request');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <DashboardLayout title="Request Certificate">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Certificate Type</label>
                            <select
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="Bonafide">Bonafide Certificate</option>
                                <option value="Completion">Course Completion</option>
                                <option value="LOR">Letter of Recommendation</option>
                                <option value="Workshop">Workshop Participation</option>
                                <option value="Merit">Certificate of Merit</option>
                                <option value="Volunteer">Volunteer Service</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Purpose</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
                                placeholder="e.g. For internship application or higher studies..."
                                value={purpose}
                                onChange={(e) => setPurpose(e.target.value)}
                            />
                        </div>

                        <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-700">
                            <p><strong>Note:</strong> Requests are processed within 2-3 working days. You will be notified upon approval.</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full btn-primary"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ApplyCertificate;
