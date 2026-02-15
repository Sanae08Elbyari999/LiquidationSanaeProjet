// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';
import {
    FaHome,
    FaTag,
    FaChevronDown,
    FaBell,
    FaShoppingCart,
    FaHeart,
    FaSearch,
    FaQuestionCircle,
    FaShoppingBag,
    FaTruck,
    FaCreditCard,
    FaTimesCircle,
    FaExchangeAlt,
    FaWhatsapp,
    FaUser
} from 'react-icons/fa';

// Import du logo
import logo from '../../assets/images/logo.png';

const Navbar = ({ onMenuToggle }) => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showHelpDropdown, setShowHelpDropdown] = useState(false);
    const [showMobileAide, setShowMobileAide] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const location = useLocation();
    const navigate = useNavigate();

    // Éléments du menu Aide (thème bleu comme spécifié)
const helpItems = [
    {
        id: 'centre-assistance',
        name: 'Centre d\'assistance',
        icon: <FaQuestionCircle className="text-lg" />,
        description: 'Trouvez des réponses à vos questions',
        color: 'text-blue-600',
        path: '/help/assistance'
    },
    {
        id: 'commande',
        name: 'Passer une commande',
        icon: <FaShoppingBag className="text-lg" />,
        description: 'Comment commander sur notre plateforme',
        color: 'text-blue-600',
        path: '/help/commande'
    },
    {
        id: 'suivi-colis',
        name: 'Suivre votre colis',
        icon: <FaTruck className="text-lg" />,
        description: 'Localisez votre commande en temps réel',
        color: 'text-blue-600',
        path: '/help/suivi'
    },
    {
        id: 'paiements',
        name: 'Méthode de paiements',
        icon: <FaCreditCard className="text-lg" />,
        description: 'CB, PayPal, virement et autres',
        color: 'text-blue-600',
        path: '/help/paiements'
    },
    {
        id: 'annulation',
        name: 'Annuler des commandes',
        icon: <FaTimesCircle className="text-lg" />,
        description: 'Procédure d\'annulation et remboursement',
        color: 'text-blue-600',
        path: '/help/annulation'
    },
    {
        id: 'retour',
        name: 'Faire un retour',
        icon: <FaExchangeAlt className="text-lg" />,
        description: 'Comment retourner un article',
        color: 'text-blue-600',
        path: '/help/retour'
    },
    {
        id: 'whatsapp',
        name: 'WhatsApp',
        icon: <FaWhatsapp className="text-lg" />,
        description: 'Contactez-nous sur WhatsApp',
        color: 'text-green-600',
        highlight: true,
        path: '/help/whatsapp'
    }
];

    // Données mockées pour le panier
    const cartItems = [
        {
            id: 1,
            name: "iPhone 13 Pro Max 256GB",
            price: 4500,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1632661674596-df8be070a6c5?w=150"
        },
        {
            id: 2,
            name: "AirPods Pro 2ème génération",
            price: 1200,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=150"
        }
    ];

    // Données mockées pour les favoris
    const favoriteVideos = [
        {
            id: 2,
            title: "Samsung Galaxy S23 Ultra 512GB",
            price: 5200,
            image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=150",
            seller: "MobileExpert"
        },
        {
            id: 3,
            title: "iPad Pro 12.9 M2 128GB",
            price: 6800,
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=150",
            seller: "AppleStore"
        }
    ];

    // Données mockées pour les notifications
    const notifications = [
        {
            id: 1,
            title: "Votre commande a été expédiée",
            message: "Votre iPhone 13 Pro Max est en route",
            time: "Il y a 2 heures",
            read: false,
            type: "shipping"
        },
        {
            id: 2,
            title: "Réduction spéciale",
            message: "20% de réduction sur tous les smartphones",
            time: "Il y a 1 jour",
            read: false,
            type: "promotion"
        },
        {
            id: 3,
            title: "Votre offre a été acceptée",
            message: "Le vendeur a accepté votre offre sur l'AirPods Pro",
            time: "Il y a 2 jours",
            read: true,
            type: "offer"
        }
    ];

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    // Fonctions de gestion des clics
    const handleWishlistClick = () => {
        navigate('/wishlist');
    };

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleNotificationsClick = () => {
        navigate('/notifications');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    // Calcul du total du panier
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartItemsCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    const unreadNotificationsCount = notifications.filter(n => !n.read).length;

    return (
        <>
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">

                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center">
                                <img
                                    src={logo}
                                    alt="La Liquidation Logo"
                                    className="h-16 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Navigation desktop - Accueil et Catégories */}
                        <div className="hidden lg:flex items-center space-x-1 ml-8">
                            <Link
                                to="/"
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                                <FaHome className="text-lg" />
                                <span className="font-medium">Accueil</span>
                            </Link>
                            
                        </div>

                        {/* Search Bar - Centrée */}
                        <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
                            <div className="hidden lg:block">
                                <SearchBar placeholder="Rechercher des produits..." />
                            </div>
                        </div>

                        {/* Actions droite - Aide */}
                        <div className="flex items-center space-x-3">
                            {/* Menu Aide avec dropdown */}
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setShowHelpDropdown(true)}
                                    onClick={() => setShowHelpDropdown(!showHelpDropdown)}
                                    className={`hidden lg:flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${showHelpDropdown ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                                >
                                    <FaQuestionCircle className="text-lg" />
                                    <span className="font-medium">Aide</span>
                                    <FaChevronDown className={`text-xs transition-transform ${showHelpDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {showHelpDropdown && (
                                    <div
                                        className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 py-3 z-50"
                                        onMouseLeave={() => setShowHelpDropdown(false)}
                                    >
                                        <div className="max-h-96 overflow-y-auto px-2 py-2">
                                            <div className="space-y-1">
                                                {helpItems.map((item) => (
                                                    <Link
                                                    key={item.id}
                                                    to={item.path}
                                                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${item.highlight ? 'bg-blue-50 hover:bg-blue-100 border-l-4 border-blue-500' : 'hover:bg-gray-50'}`}
                                                    onClick={() => setShowHelpDropdown(false)}
                                                    >
                                                        <div className={`${item.color} p-2 rounded-lg mr-3`}>
                                                            {item.icon}
                                                        </div>

                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center justify-between">
                                                                <span className={`font-medium text-sm truncate block ${item.highlight ? 'text-blue-700' : 'text-gray-800'}`}>
                                                                    {item.name}
                                                                </span>
                                                                {item.highlight && (
                                                                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                                                                        Direct
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <span className="text-xs text-gray-500 block mt-1">
                                                                {item.description}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="hidden lg:flex items-center space-x-3">
                                {/* Bouton Notifications */}
                                <button
                                    onClick={handleNotificationsClick}
                                    className="p-2 text-gray-600 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors relative group"
                                    title="Notifications"
                                >
                                    <FaBell className="text-lg group-hover:scale-110 transition-transform" />
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center group-hover:scale-125 transition-transform">
                                        {unreadNotificationsCount}
                                    </span>
                                </button>
                                {/* Bouton Panier */}
                                <button
                                    onClick={handleCartClick}
                                    className="p-2 text-gray-600 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors relative group"
                                    title="Mon panier"
                                >
                                    <FaShoppingCart className="text-lg group-hover:scale-110 transition-transform" />
                                </button>

                                {/* Bouton Favoris */}
                                <button
                                    onClick={handleWishlistClick}
                                    className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors relative group"
                                    title="Mes favoris"
                                >
                                    <FaHeart className="text-lg group-hover:scale-110 transition-transform" />
                                    
                                </button>

                                {/* Bouton Se connecter / Mon compte */}
                                {isLoggedIn ? (
                                    <Link
                                        to="/profile"
                                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <FaUser className="text-lg" />
                                        <span className="font-medium">Mon compte</span>
                                    </Link>
                                ) : (
                                    <button
                                        onClick={handleLoginClick}
                                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 "
                                    >
                                        <span className="font-medium">Se connecter</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Barre de recherche mobile */}
                    <div className="lg:hidden py-3 border-t border-gray-100">
                        <SearchBar placeholder="Rechercher..." />
                    </div>

                    {/* Navigation mobile secondaire */}
                    <div className="lg:hidden flex items-center justify-around py-2 border-t border-gray-100">
                        <Link to="/" className="flex flex-col items-center p-2 text-blue-600 group">
                            <FaHome className="text-lg group-hover:scale-110 transition-transform" />
                            <span className="text-xs mt-1 font-medium">Accueil</span>
                        </Link>
                        <button
                            onClick={() => setShowCategories(true)}
                            className="flex flex-col items-center p-2 text-gray-600 group"
                        >
                            <FaTag className="text-lg group-hover:scale-110 transition-transform" />
                            <span className="text-xs mt-1 font-medium">Catégories</span>
                        </button>
                        <button onClick={() => document.querySelector('input[type="search"]')?.focus()} className="flex flex-col items-center p-2 text-gray-600 group">
                            <FaSearch className="text-lg group-hover:scale-110 transition-transform" />
                            <span className="text-xs mt-1 font-medium">Rechercher</span>
                        </button>
                        <button
                            onClick={handleWishlistClick}
                            className="flex flex-col items-center p-2 text-gray-600 group"
                        >
                            <FaHeart className="text-lg group-hover:scale-110 transition-transform" />
                            <span className="text-xs mt-1 font-medium">Favoris</span>
                        </button>
                        <button
                            onClick={() => setShowMobileAide(true)}
                            className="flex flex-col items-center p-2 text-gray-600 group"
                        >
                            <FaQuestionCircle className="text-lg group-hover:scale-110 transition-transform" />
                            <span className="text-xs mt-1 font-medium">Aide</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menu déroulant mobile pour catégories */}
            {showCategories && (
                <div className="lg:hidden fixed inset-0 z-40">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={() => setShowCategories(false)}
                    ></div>
                    <div className="fixed inset-y-0 left-0 right-0 bg-white overflow-y-auto">
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <img
                                    src={logo}
                                    alt="La Liquidation Logo"
                                    className="h-8 w-auto object-contain"
                                />
                                <h2 className="text-xl font-bold text-gray-900">Catégories</h2>
                            </div>
                            <button
                                onClick={() => setShowCategories(false)}
                                className="p-2 text-gray-600 hover:text-gray-900"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Menu déroulant mobile pour Aide */}
            {showMobileAide && (
                <div className="lg:hidden fixed inset-0 z-40">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={() => setShowMobileAide(false)}
                    ></div>
                    <div className="fixed inset-y-0 left-0 right-0 bg-white overflow-y-auto">
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <img
                                    src={logo}
                                    alt="La Liquidation Logo"
                                    className="h-8 w-auto object-contain"
                                />
                                <h2 className="text-xl font-bold text-gray-900">Centre d'aide</h2>
                            </div>
                            <button
                                onClick={() => setShowMobileAide(false)}
                                className="p-2 text-gray-600 hover:text-gray-900"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-4">
                            <div className="space-y-2">
                                {helpItems.map((item) => (
                                    <Link
                                    key={item.id}
                                    to={item.path}
                                    className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg ${item.highlight ? 'bg-blue-50 border-blue-200' : 'border-gray-100'} border text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200`}
                                    onClick={() => setShowMobileAide(false)}
                                    >
                                        <div className={`${item.color}`}>
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 text-left">
                                            <span className="font-medium block">{item.name}</span>
                                            <span className="text-xs text-gray-500">{item.description}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay pour fermer les menus déroulants desktop */}
            {(showCategories || showHelpDropdown) && (
                <div
                    className="hidden lg:block fixed inset-0 z-40"
                    onClick={() => {
                        setShowCategories(false);
                        setShowHelpDropdown(false);
                    }}
                />
            )}
        </>
    );
};

export default Navbar;