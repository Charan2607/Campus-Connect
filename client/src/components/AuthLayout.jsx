import React from 'react';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen flex text-gray-800">
            {/* Left Side - Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white" >
                <div className="max-w-md w-full">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
                        <p className="text-gray-500">{subtitle}</p>
                    </div>
                    {children}
                </div>
            </div>

            {/* Right Side - Visual */}
            <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden items-center justify-center p-12 text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10 max-w-lg">
                    <h2 className="text-4xl font-bold mb-6">Empowering Your Campus Journey.</h2>
                    <p className="text-lg opacity-90">Join thousands of students connecting with opportunities every day.</p>
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
