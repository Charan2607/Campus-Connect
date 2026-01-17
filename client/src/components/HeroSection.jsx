import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                    <span className="block text-gray-900">Your College Life,</span>
                    <span className="block text-gradient">Simplified.</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10">
                    CampusConnect is your one-stop platform for internships, notices, certificates, and events.
                    Bridge the gap between you and your campus opportunities today.
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/register" className="btn-primary">
                        Get Started
                    </Link>
                    <Link to="/login" className="btn-secondary">
                        Login
                    </Link>
                </div>
            </div>

            {/* Background Blobs */}
            <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
        </div>
    );
};

export default HeroSection;
