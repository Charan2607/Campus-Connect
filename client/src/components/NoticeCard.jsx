import React from 'react';

const NoticeCard = ({ notice }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{notice.title}</h3>
            <p className="text-gray-600 mb-4">{notice.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Posted on: {new Date(notice.date).toLocaleDateString()}</span>
                <span className="bg-blue-100 text-blue-800 py-1 px-2 rounded-full text-xs">
                    {notice.targetAudience.toUpperCase()}
                </span>
            </div>
        </div>
    );
};

export default NoticeCard;
