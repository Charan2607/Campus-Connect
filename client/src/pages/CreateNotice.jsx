import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const CreateNotice = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        targetAudience: 'all'
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/notices', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Announcement created successfully!');
                navigate('/admin');
            } else {
                alert('Failed to post announcement');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <DashboardLayout title="Post Announcement">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                            <input type="text" name="title" required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100" onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                            <textarea name="content" required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100" onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                            <select name="targetAudience" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-indigo-100" onChange={handleChange}>
                                <option value="all">All Students & Faculty</option>
                                <option value="student">Students Only</option>
                                <option value="faculty">Faculty Only</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full btn-primary">Post Announcement</button>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CreateNotice;
