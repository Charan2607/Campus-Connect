import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { navigation } from '../data/navigation';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
    const { currentUser, logout } = useAuth();
    const role = currentUser?.role === 'admin' ? 'admin' : 'student';
    const links = navigation[role];

    return (
        <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-20">
            <div className="flex items-center justify-center h-16 border-b border-gray-100">
                <span className="text-xl font-bold text-gradient">CampusConnect</span>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
                <nav className="px-4 space-y-2">
                    {links.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${isActive
                                    ? 'bg-blue-50 text-blue-600 shadow-sm'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="p-4 border-t border-gray-100">
                <button
                    onClick={logout}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all font-medium"
                >
                    <FiLogOut className="w-5 h-5" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
