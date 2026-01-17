import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
    const { currentUser, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    if (role && currentUser.role !== role) {
        // If role is required and user mismatch, redirect to home
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
