import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

const CreateInternship = () => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        description: '',
        location: '',
        stipend: '',
        applyLink: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/internships', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Internship posted successfully!');
                navigate('/admin');
            } else {
                alert('Failed to post internship');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <DashboardLayout title="Post Internship">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                                <input type="text" name="title" required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-100" onChange={handleChange} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                                <input type="text" name="company" required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-100" onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea name="description" required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-100" onChange={handleChange} />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                <input type="text" name="location" required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-100" onChange={handleChange} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Stipend</label>
                                <input type="text" name="stipend" required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-100" onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Application Link</label>
                            <input type="url" name="applyLink" required className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-green-100" onChange={handleChange} />
                        </div>
                        <button type="submit" className="w-full btn-primary bg-gradient-to-r from-green-600 to-teal-600">Post Internship</button>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default CreateInternship;
