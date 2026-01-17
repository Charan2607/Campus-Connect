import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { FiCalendar, FiMapPin, FiClock, FiVideo, FiMonitor } from 'react-icons/fi';

const Events = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Annual Tech Fest', date: '2025-03-15', location: 'Auditorium', type: 'Event', description: 'The biggest tech fest of the year.' },
        { id: 2, title: 'AI in Healthcare Webinar', date: '2025-02-10', location: 'Online', type: 'Webinar', description: 'Expert talk on AI applications.' },
        { id: 3, title: 'React.js Workshop', date: '2025-02-20', location: 'Lab 3', type: 'Workshop', description: 'Hands-on session on React.' },
    ]);
    const [filter, setFilter] = useState('All');

    const filteredEvents = filter === 'All' ? events : events.filter(e => e.type === filter);

    return (
        <DashboardLayout title="Events & Webinars">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div></div>

                <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-sm">
                    {['All', 'Event', 'Webinar', 'Workshop'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === f ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map(event => (
                    <div key={event.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${event.type === 'Webinar' ? 'bg-blue-50 text-blue-600' :
                                event.type === 'Workshop' ? 'bg-green-50 text-green-600' : 'bg-purple-50 text-purple-600'
                                }`}>
                                {event.type}
                            </span>
                            <div className="text-center bg-gray-50 rounded-lg p-2 min-w-[60px]">
                                <span className="block text-xs font-bold text-gray-400 uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                                <span className="block text-xl font-bold text-gray-800">{new Date(event.date).getDate()}</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>

                        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 border-t border-gray-100 pt-4">
                            <span className="flex items-center gap-1">
                                {event.location === 'Online' ? <FiVideo /> : <FiMapPin />}
                                {event.location}
                            </span>
                            <span className="flex items-center gap-1"><FiClock /> 10:00 AM</span>
                        </div>
                        <button className="w-full mt-4 py-2 rounded-lg bg-gray-50 text-gray-700 font-bold text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-all">
                            Register Now
                        </button>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default Events;
