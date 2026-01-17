import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { FiAward, FiDownload, FiUpload, FiTrash2, FiPlus } from 'react-icons/fi';

const CertificateWallet = () => {
    const [certificates, setCertificates] = useState([
        { id: 1, title: 'Web Development Bootcamp', issuer: 'Udemy', date: '2025-12-01', type: 'External' },
        { id: 2, title: 'Bonafide Certificate', issuer: 'CampusConnect', date: '2026-01-10', type: 'Internal' }
    ]);
    const [showUpload, setShowUpload] = useState(false);
    const [newCert, setNewCert] = useState({ title: '', issuer: '', file: null });

    const handleUpload = (e) => {
        e.preventDefault();
        const cert = {
            id: Date.now(),
            title: newCert.title,
            issuer: newCert.issuer || 'External',
            date: new Date().toISOString().split('T')[0],
            type: 'External'
        };
        setCertificates([...certificates, cert]);
        setShowUpload(false);
        setNewCert({ title: '', issuer: '', file: null });
    };

    return (
        <DashboardLayout title="Certificate Wallet">
            <div className="flex justify-between items-center mb-8">
                <p className="text-gray-500">Securely store and manage your credentials.</p>
                <button
                    onClick={() => setShowUpload(true)}
                    className="btn-primary flex items-center gap-2"
                >
                    <FiPlus /> Upload External
                </button>
            </div>

            {/* Upload Modal (Basic Overlay) */}
            {showUpload && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                        <h2 className="text-xl font-bold mb-4">Upload Certificate</h2>
                        <form onSubmit={handleUpload} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Certificate Title"
                                className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                value={newCert.title}
                                onChange={e => setNewCert({ ...newCert, title: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="Issuing Organization"
                                className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                                value={newCert.issuer}
                                onChange={e => setNewCert({ ...newCert, issuer: e.target.value })}
                            />
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                                <FiUpload className="mx-auto text-gray-400 mb-2" size={24} />
                                <p className="text-sm text-gray-500">Click to upload PDF/Image (Simulated)</p>
                            </div>
                            <div className="flex gap-3 pt-2">
                                <button type="button" onClick={() => setShowUpload(false)} className="flex-1 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200">Cancel</button>
                                <button type="submit" className="flex-1 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">Save to Vault</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map(cert => (
                    <div key={cert.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
                        <div className={`absolute top-0 left-0 w-2 h-full ${cert.type === 'Internal' ? 'bg-indigo-500' : 'bg-green-500'}`}></div>

                        <div className="flex justify-between items-start mb-4 pl-4">
                            <div className="p-3 bg-gray-50 rounded-xl">
                                <FiAward className={`w-6 h-6 ${cert.type === 'Internal' ? 'text-indigo-600' : 'text-green-600'}`} />
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${cert.type === 'Internal' ? 'bg-indigo-50 text-indigo-600' : 'bg-green-50 text-green-600'}`}>
                                {cert.type}
                            </span>
                        </div>

                        <div className="pl-4">
                            <h3 className="font-bold text-gray-900 mb-1">{cert.title}</h3>
                            <p className="text-sm text-gray-500 mb-4">Issued by {cert.issuer} • {cert.date}</p>

                            <div className="flex gap-2">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-50 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                    <FiDownload /> Download
                                </button>
                                <button className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default CertificateWallet;
