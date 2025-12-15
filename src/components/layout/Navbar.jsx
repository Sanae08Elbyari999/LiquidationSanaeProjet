// src/components/layout/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';
import Button from '../ui/Button';
import LanguageSwitcher from '../shared/LanguageSwitcher';

const Navbar = ({ onMenuToggle }) => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo et menu mobile */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onMenuToggle}
                            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                            <span className="text-xl font-bold text-gray-900">Laliquidation</span>
                        </Link>
                    </div>

                    {/* Navigation desktop */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Accueil</Link>
                        <Link to="/category/electronique" className="text-gray-700 hover:text-blue-600 font-medium">Catégories</Link>
                        <Link to="/seller/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">Vendre</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">À propos</Link>
                    </div>

                    {/* Search Bar - Centrée */}
                    <div className="flex-1 max-w-2xl mx-8">
                        <div className="hidden lg:block">
                            <SearchBar />
                        </div>
                    </div>

                    {/* Actions droite */}
                    <div className="flex items-center space-x-4">
                        <LanguageSwitcher />

                        <div className="hidden lg:flex items-center space-x-2">
                            <Link to="/login">
                                <Button variant="outline" size="sm">Connexion</Button>
                            </Link>
                            <Link to="/register">
                                <Button variant="primary" size="sm">Inscription</Button>
                            </Link>
                        </div>

                        {/* Menu mobile actions */}
                        <div className="lg:hidden flex items-center space-x-2">
                            <Link to="/login" className="p-2 text-gray-600 hover:text-gray-900">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Search Bar mobile */}
                <div className="lg:hidden pb-4">
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;