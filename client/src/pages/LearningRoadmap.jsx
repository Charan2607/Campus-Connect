import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';
import { roadmaps } from '../data/roadmaps';
import { FiCheckCircle, FiBookOpen, FiExternalLink } from 'react-icons/fi';

const LearningRoadmap = () => {
    const { currentUser } = useAuth();
    const branch = currentUser?.branch || 'General';
    const roadmap = roadmaps[branch] || roadmaps['General'];

    return (
        <DashboardLayout title="Learning Roadmap">
            <div className="mb-8">
                <p className="text-gray-500">Your personalized path to mastering your field: <span className="text-blue-600 font-bold">{branch}</span></p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Timeline Section */}
                <div className="lg:col-span-2 space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-4 bottom-0 w-0.5 bg-gray-200"></div>

                    {roadmap.map((item, index) => (
                        <div key={index} className="relative pl-16">
                            {/* Node Circle */}
                            <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center z-10">
                                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <span className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-2 block">{item.type}</span>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                                {item.resources.length > 0 && (
                                    <div className="space-y-2">
                                        <p className="text-xs font-semibold text-gray-400 uppercase">Recommended Resources:</p>
                                        {item.resources.map((res, idx) => (
                                            <a
                                                key={idx}
                                                href={res.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                                            >
                                                <FiExternalLink /> {res.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar Widgets */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-6 rounded-2xl shadow-lg">
                        <h3 className="font-bold text-lg mb-2">Track Progress</h3>
                        <p className="text-indigo-100 text-sm mb-4">You are on Step 1 of 5.</p>
                        <div className="w-full bg-indigo-900/30 h-2 rounded-full overflow-hidden">
                            <div className="bg-white h-full w-[20%]"></div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><FiBookOpen /> Quick Tips</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="flex gap-2"><FiCheckCircle className="text-green-500 mt-0.5" /> Practice coding daily for at least 1 hour.</li>
                            <li className="flex gap-2"><FiCheckCircle className="text-green-500 mt-0.5" /> Build one mini-project for every new skill.</li>
                            <li className="flex gap-2"><FiCheckCircle className="text-green-500 mt-0.5" /> Join hackathons to test your knowledge.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default LearningRoadmap;
