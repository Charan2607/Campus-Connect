import React from 'react';

const InternshipCard = ({ internship }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-gray-800">{internship.title}</h3>
                    <p className="text-lg text-gray-600">{internship.company}</p>
                </div>
                <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-semibold">
                    {internship.stipend}
                </span>
            </div>

            <p className="mt-4 text-gray-600">{internship.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500 font-medium">Location: {internship.location}</span>
            </div>

            <div className="mt-6">
                <a
                    href={internship.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                >
                    Apply Now
                </a>
            </div>
        </div>
    );
};

export default InternshipCard;
