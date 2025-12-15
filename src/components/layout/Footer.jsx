// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                            <span className="text-xl font-bold">Laliquidation</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            La plateforme marocaine de vente par vidéo. Découvrez des produits uniques et connectez-vous directement avec les vendeurs.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                📘
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                                📷
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                                🐦
                            </a>
                        </div>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
                            <li><Link to="/category/electronique" className="text-gray-400 hover:text-white transition-colors">Catégories</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">À propos</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Vendre sur Laliquidation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Vendre</h3>
                        <ul className="space-y-2">
                            <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Devenir vendeur</Link></li>
                            <li><Link to="/seller/guide" className="text-gray-400 hover:text-white transition-colors">Guide du vendeur</Link></li>
                            <li><Link to="/affiliate" className="text-gray-400 hover:text-white transition-colors">Devenir affilié</Link></li>
                            <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Tarifs</Link></li>
                        </ul>
                    </div>

                    {/* Légale */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Légal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</Link></li>
                            <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Politique des cookies</Link></li>
                            <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Centre d'aide</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Laliquidation.com. Tous droits réservés.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="text-gray-400 text-sm">Maroc 🇲🇦</span>
                        <span className="text-gray-400 text-sm">Français 🇫🇷</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
