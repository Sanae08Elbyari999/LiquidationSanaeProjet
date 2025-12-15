// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

            <div className="flex flex-1">
                {/* Sidebar pour desktop */}
                <aside className="hidden lg:block w-64 bg-white border-r border-gray-200">
                    <Sidebar />
                </aside>

                {/* Sidebar mobile */}
                {sidebarOpen && (
                    <div className="lg:hidden fixed inset-0 z-40">
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50"
                            onClick={() => setSidebarOpen(false)}
                        ></div>
                        <div className="fixed inset-y-0 left-0 w-64 bg-white">
                            <Sidebar onClose={() => setSidebarOpen(false)} />
                        </div>
                    </div>
                )}

                {/* Contenu principal */}
                <main className="flex-1 overflow-x-hidden">
                    {children}
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
