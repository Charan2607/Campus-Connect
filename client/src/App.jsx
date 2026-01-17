import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import Internships from './pages/Internships';
import Events from './pages/Events';
import ApplyCertificate from './pages/ApplyCertificate';
import AdminDashboard from './pages/AdminDashboard';
import CreateNotice from './pages/CreateNotice';
import CreateInternship from './pages/CreateInternship';
import CreateEvent from './pages/CreateEvent';
import ManageCertificates from './pages/ManageCertificates';
import ManageInternships from './pages/ManageInternships';
import LearningRoadmap from './pages/LearningRoadmap';
import CertificateWallet from './pages/CertificateWallet';
import Profile from './pages/Profile';
import Announcements from './pages/Announcements';


function Home() {
  const { currentUser } = useAuth();

  if (currentUser) {
    if (currentUser.role === 'admin') return <Navigate to="/admin" />;
    return <Navigate to="/student-dashboard" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-blue-600 mb-6 tracking-tight">
          CampusConnect
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Your centralized platform for internships, updates, and college services.
          Log in to get started.
        </p>
        <div className="space-x-4">
          <a href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Get Started</a>
          <a href="/register" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition">Create Account</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Student Routes */}
            <Route
              path="/student-dashboard"
              element={
                <ProtectedRoute role="student">
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/announcements"
              element={
                <ProtectedRoute>
                  <Announcements />
                </ProtectedRoute>
              }
            />
            <Route
              path="/internships"
              element={
                <ProtectedRoute>
                  <Internships />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events"
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              }
            />
            <Route
              path="/apply-certificate"
              element={
                <ProtectedRoute role="student">
                  <ApplyCertificate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/roadmap"
              element={
                <ProtectedRoute role="student">
                  <LearningRoadmap />
                </ProtectedRoute>
              }
            />
            <Route
              path="/wallet"
              element={
                <ProtectedRoute role="student">
                  <CertificateWallet />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/internships"
              element={
                <ProtectedRoute role="admin">
                  <ManageInternships />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/create-notice"
              element={
                <ProtectedRoute role="admin">
                  <CreateNotice />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/create-internship"
              element={
                <ProtectedRoute role="admin">
                  <CreateInternship />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/create-event"
              element={
                <ProtectedRoute role="admin">
                  <CreateEvent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/certificates"
              element={
                <ProtectedRoute role="admin">
                  <ManageCertificates />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
