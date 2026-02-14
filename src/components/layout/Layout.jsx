// src/components/layout/Layout.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FaBars, FaTimes } from 'react-icons/fa';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [desktopSidebarCollapsed, setDesktopSidebarCollapsed] = useState(false);

    const handleToggleDesktopSidebar = () => {
        setDesktopSidebarCollapsed(!desktopSidebarCollapsed);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

            {/* Container principal avec hauteur fixe */}
            <div className="flex-1 flex min-h-0">
                {/* Sidebar pour desktop - position fixed avec son propre scroll */}
                <div className={`hidden lg:block fixed left-0 top-16 bottom-0 z-30 transition-all duration-300 ${desktopSidebarCollapsed ? 'w-0' : 'w-56'}`}>
                    {!desktopSidebarCollapsed && (
                        <div className="h-full overflow-y-auto bg-white border-r border-gray-200 relative">
                            {/* Bouton de toggle dans le coin supérieur droit de la sidebar */}
                            <button
                                onClick={handleToggleDesktopSidebar}
                                className="absolute top-2 right-2 w-6 h-6 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors shadow-sm"
                                title="Fermer le menu"
                            >
                                <FaTimes className="text-xs" />
                            </button>
                            <Sidebar />
                        </div>
                    )}
                </div>

                {/* Bouton pour ouvrir le sidebar quand il est fermé */}
                {desktopSidebarCollapsed && (
                    <div className="hidden lg:block fixed left-0 top-20 z-40">
                        <button
                            onClick={handleToggleDesktopSidebar}
                            className="w-8 h-8 bg-gray-200 text-gray-700 rounded-r-lg flex items-center justify-center hover:bg-gray-300 transition-colors shadow-sm"
                            title="Ouvrir le menu"
                        >
                            <FaBars className="text-sm" />
                        </button>
                    </div>
                )}

                {/* Sidebar mobile */}
                {sidebarOpen && (
                    <div className="lg:hidden fixed inset-0 z-40">
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50"
                            onClick={() => setSidebarOpen(false)}
                        />
                        <div className="fixed inset-y-0 left-0 w-56 bg-white overflow-y-auto">
                            <Sidebar onClose={() => setSidebarOpen(false)} />
                        </div>
                    </div>
                )}

                {/* Contenu principal - avec marge pour le sidebar fixe */}
                <main className={`flex-1 min-w-0 transition-all duration-300 ${desktopSidebarCollapsed ? 'lg:ml-0' : 'lg:ml-56'}`}>
                    <div className="h-full overflow-y-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;