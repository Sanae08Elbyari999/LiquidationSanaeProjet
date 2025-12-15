// src/components/layout/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ onClose }) => {
    const categories = [
        { name: 'Électronique', slug: 'electronique', icon: '📱', count: 124 },
        { name: 'Meubles', slug: 'meubles', icon: '🛋️', count: 89 },
        { name: 'Mode', slug: 'mode', icon: '👗', count: 156 },
        { name: 'Voitures', slug: 'voitures', icon: '🚗', count: 42 },
        { name: 'Immobilier', slug: 'immobilier', icon: '🏠', count: 67 },
        { name: 'Sports', slug: 'sports', icon: '⚽', count: 78 },
        { name: 'Livres', slug: 'livres', icon: '📚', count: 53 },
        { name: 'Jeux', slug: 'jeux', icon: '🎮', count: 91 }
    ];

    return (
        <div className="h-full bg-white border-r border-gray-200 overflow-y-auto">
            {/* Header mobile */}
            <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button
                    onClick={onClose}
                    className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                    ✕
                </button>
            </div>

            {/* Navigation utilisateur */}
            <div className="p-4 border-b border-gray-200">
                <div className="space-y-2">
                    <Link
                        to="/login"
                        className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                        onClick={onClose}
                    >
                        <span>👤</span>
                        <span>Connexion</span>
                    </Link>
                    <Link
                        to="/register"
                        className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                        onClick={onClose}
                    >
                        <span>📝</span>
                        <span>Inscription</span>
                    </Link>
                </div>
            </div>

            {/* Catégories */}
            <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Catégories
                </h3>
                <nav className="space-y-1">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            to={`/category/${category.slug}`}
                            className="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg group transition-colors"
                            onClick={onClose}
                        >
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">{category.icon}</span>
                                <span className="font-medium group-hover:text-blue-600">
                                    {category.name}
                                </span>
                            </div>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {category.count}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Filtres de prix */}
            <div className="p-4 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Filtres
                </h3>
                <div className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Prix maximum
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            <option>Tous les prix</option>
                            <option>Moins de 100 DH</option>
                            <option>100 - 500 DH</option>
                            <option>500 - 1000 DH</option>
                            <option>Plus de 1000 DH</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Localisation
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            <option>Partout au Maroc</option>
                            <option>Casablanca</option>
                            <option>Rabat</option>
                            <option>Marrakech</option>
                            <option>Tanger</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;