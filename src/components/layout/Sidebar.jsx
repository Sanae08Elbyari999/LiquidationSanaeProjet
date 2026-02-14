// src/components/layout/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import {
    FaUserCircle,
    FaVideo,
    FaCog,
    FaSignOutAlt,
    FaEnvelope,
    FaShoppingBag,
    FaFemale,
    FaMale,
    FaMobileAlt,
    FaCouch,
    FaCar,
    FaUtensils,
    FaBookmark,
    FaPlus,
    FaChevronDown,
    FaChevronRight,
    FaInfoCircle
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Sidebar = ({ onClose }) => {
    const location = useLocation();
    const [hasChannel, setHasChannel] = useState(false);
    const [showCategories, setShowCategories] = useState(false);

    // Simuler la vérification si l'utilisateur a une chaîne
    useEffect(() => {
        const channelCreated = localStorage.getItem('channelCreated') === 'false';
        setHasChannel(channelCreated);
    }, []);

    const categories = [
        {
            name: 'Femme',
            slug: 'femme',
            icon: <FaFemale className="text-lg" />,
            color: 'text-gray-700',
            bgColor: 'bg-gray-100'
        },
        {
            name: 'Homme',
            slug: 'homme',
            icon: <FaMale className="text-lg" />,
            color: 'text-gray-700',
            bgColor: 'bg-gray-100'
        },
        {
            name: 'Électronique',
            slug: 'electronique',
            icon: <FaMobileAlt className="text-lg" />,
            color: 'text-gray-700',
            bgColor: 'bg-gray-100'
        },
        {
            name: 'Meubles',
            slug: 'meubles',
            icon: <FaCouch className="text-lg" />,
            color: 'text-gray-700',
            bgColor: 'bg-gray-100'
        },
        {
            name: 'Véhicules',
            slug: 'vehicules',
            icon: <FaCar className="text-lg" />,
            color: 'text-gray-700',
            bgColor: 'bg-gray-100'
        },
        {
            name: 'Cuisine',
            slug: 'cuisine',
            icon: <FaUtensils className="text-lg" />,
            color: 'text-gray-700',
            bgColor: 'bg-gray-100'
        }
    ];

    // Menu vendeur dynamique selon si la chaîne est créée
    const sellerMenu = hasChannel
        ? [
            { name: 'Ma chaîne', path: '/profile/channel', icon: <FaVideo className="text-lg" /> },
            { name: 'Ajouter un produit', path: '/profile/add-product', icon: <FaPlus className="text-lg" />, highlight: true },
            { name: 'Mes produits', path: '/mes-produits', icon: <FaBookmark className="text-lg" /> },
            { name: 'Mes achats', path: '/profile/orders', icon: <FaShoppingBag className="text-lg" /> },
        ]
        : [
            { name: 'Mes produits', path: '/mes-produits', icon: <FaBookmark className="text-lg" /> },
            { name: 'Mes achats', path: '/profile/orders', icon: <FaShoppingBag className="text-lg" /> },
        ];

    const helpMenu = [
        { name: 'À propos', path: '/about', icon: <FaInfoCircle className="text-lg" /> },
        { name: 'Contact', path: '/contact', icon: <FaEnvelope className="text-lg" /> },
        { name: 'Paramètres', path: '/profile/settings', icon: <FaCog className="text-lg" /> }
    ];

    const isActive = (path) => location.pathname.startsWith(path);

    return (
        <div className="h-full bg-white border-r border-gray-200 flex flex-col">
            {/* Contenu scrollable */}
            <div className="flex-1 overflow-y-auto p-3">
                {/* Navigation principale - version compacte */}
                <div className="space-y-1 mb-4">
                    <Link
                        to="/profile"
                        className={`flex items-center space-x-3 p-2 rounded-lg transition-all ${isActive('/profile') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                        onClick={onClose}
                    >
                        <FaUserCircle className="text-lg flex-shrink-0" />
                        <span className="font-medium text-sm">Mon compte</span>
                    </Link>
                </div>

                {/* Menu vendeur compact - dynamique */}
                <div className="mb-4">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                        {hasChannel ? 'Ma boutique' : 'Vendre'}
                    </h3>
                    <div className="space-y-1">
                        {sellerMenu.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center space-x-3 p-2 rounded-lg transition-all text-sm ${isActive(item.path) ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'} ${item.highlight ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100' : ''}`}
                                onClick={onClose}
                            >
                                <span className="flex-shrink-0">
                                    {item.icon}
                                </span>
                                <span className="font-medium truncate">{item.name}</span>
                                {item.highlight && (
                                    <span className="ml-auto text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-full flex-shrink-0">
                                        {hasChannel ? 'New' : 'Start'}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Catégories en menu déroulant */}
                <div className="mb-6">
                    <button
                        onClick={() => setShowCategories(!showCategories)}
                        className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-700"
                    >
                        <div className="flex items-center space-x-3">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Catégories ({categories.length})
                            </span>
                        </div>
                        <FaChevronDown className={`text-xs transition-transform duration-200 ${showCategories ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Contenu déroulant des catégories */}
                    {showCategories && (
                        <div className="mt-2 space-y-1 pl-1">
                            {categories.map((category) => (
                                <Link
                                    key={category.slug}
                                    to={`/category/${category.slug}`}
                                    className="group flex items-center p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 border border-transparent hover:border-blue-100"
                                    onClick={onClose}
                                >
                                    {/* Icône avec fond coloré */}
                                    <div className={`${category.bgColor} ${category.color} p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-200`}>
                                        {category.icon}
                                    </div>

                                    {/* Nom de catégorie */}
                                    <div className="flex-1 min-w-0">
                                        <span className="font-medium text-gray-800 group-hover:text-blue-600 text-sm truncate block transition-colors">
                                            {category.name}
                                        </span>
                                        <span className="text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
                                            Voir les produits
                                        </span>
                                    </div>

                                    {/* Flèche de navigation */}
                                    <FaChevronRight className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Aide et support compact */}
                <div className="mb-4">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">
                        Aide
                    </h3>
                    <div className="space-y-1">
                        {helpMenu.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors text-sm"
                                onClick={onClose}
                            >
                                {item.icon}
                                <span className="font-medium truncate">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bouton de déconnexion compact */}
                <div className="px-2 mt-6">
                    <button 
                    onClick={() => {
                        localStorage.removeItem('channelCreated');
                        localStorage.removeItem('user');
                        localStorage.removeItem('token');
                        window.location.href = '/';
                    }}
                    className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors w-full text-sm"
                    >
                        <FaSignOutAlt className="flex-shrink-0" />
                        <span className="font-medium">Déconnexion</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;