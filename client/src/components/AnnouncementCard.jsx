import React from 'react';
import { FiClock, FiTag } from 'react-icons/fi';

const AnnouncementCard = ({ notice }) => {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 group">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {notice.title}
                </h3>
                <span className="bg-blue-50 text-blue-700 py-1 px-3 rounded-full text-xs font-bold tracking-wide uppercase">
                    {notice.targetAudience}
                </span>
            </div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                {notice.content}
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                <span className="flex items-center gap-1">
                    <FiClock /> {new Date(notice.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                    <FiTag /> Announcement
                </span>
            </div>
        </div>
    );
};

export default AnnouncementCard;
