// src/pages/public/Category.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../../components/shared/VideoCard';
import Button from '../../components/ui/Button';

const Category = () => {
    const { name } = useParams();
    const [sortBy, setSortBy] = useState('relevant');
    const [priceRange, setPriceRange] = useState('all');

    // Données mockées pour la catégorie
    const categoryData = {
        'electronique': {
            name: 'Électronique',
            description: 'Découvrez les derniers smartphones, ordinateurs, tablettes et accessoires électroniques',
            icon: '📱',
            videoCount: 1240
        },
        'meubles': {
            name: 'Meubles',
            description: 'Meubles de qualité pour votre maison et bureau',
            icon: '🛋️',
            videoCount: 890
        },
        'mode': {
            name: 'Mode',
            description: 'Vêtements, chaussures et accessoires de mode',
            icon: '👗',
            videoCount: 1560
        },
        'voitures': {
            name: 'Voitures',
            description: 'Véhicules neufs et d\'occasion',
            icon: '🚗',
            videoCount: 420
        }
    };

    const currentCategory = categoryData[name] || {
        name: name?.charAt(0).toUpperCase() + name?.slice(1),
        description: 'Découvrez nos produits dans cette catégorie',
        icon: '📦',
        videoCount: 0
    };

    // Données mockées pour les vidéos
    const categoryVideos = [
        {
            id: 1,
            title: "iPhone 13 Pro Max - Comme neuf",
            thumbnail: "https://images.unsplash.com/photo-1632661674596-618e45e56c53?w=400",
            price: 4500,
            seller: "TechStore",
            duration: "0:45",
            views: 1240,
            location: "Casablanca"
        },
        {
            id: 2,
            title: "Samsung Galaxy S23 Ultra 512GB",
            thumbnail: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
            price: 5200,
            seller: "MobileExpert",
            duration: "0:38",
            views: 890,
            location: "Rabat"
        },
        {
            id: 3,
            title: "MacBook Air M2 2022 - 8GB/256GB",
            thumbnail: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
            price: 8500,
            seller: "AppleStore",
            duration: "0:52",
            views: 670,
            location: "Marrakech"
        },
        {
            id: 4,
            title: "AirPods Pro 2ème génération",
            thumbnail: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400",
            price: 900,
            seller: "TechStore",
            duration: "0:41",
            views: 780,
            location: "Casablanca"
        },
        {
            id: 5,
            title: "iPad Pro 12.9 M2 128GB",
            thumbnail: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
            price: 9800,
            seller: "AppleStore",
            duration: "0:47",
            views: 430,
            location: "Tanger"
        },
        {
            id: 6,
            title: "PlayStation 5 Edition Digital",
            thumbnail: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
            price: 3800,
            seller: "GameZone",
            duration: "0:35",
            views: 1200,
            location: "Fès"
        },
        {
            id: 7,
            title: "Samsung Galaxy Watch 6 Classic",
            thumbnail: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
            price: 1200,
            seller: "TechStore",
            duration: "0:38",
            views: 560,
            location: "Casablanca"
        },
        {
            id: 8,
            title: "Nintendo Switch OLED + 2 manettes",
            thumbnail: "https://images.unsplash.com/photo-1556009114-f68c13eac7e1?w=400",
            price: 2800,
            seller: "GameZone",
            duration: "0:42",
            views: 340,
            location: "Rabat"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* En-tête de catégorie */}
                <div className="bg-white rounded-xl p-8 mb-6 text-center">
                    <div className="text-6xl mb-4">{currentCategory.icon}</div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentCategory.name}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                        {currentCategory.description}
                    </p>
                    <div className="text-gray-500">
                        {currentCategory.videoCount.toLocaleString()} vidéos disponibles
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar des filtres */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 sticky top-24">
                            <h3 className="font-semibold text-gray-900 mb-4">Filtres</h3>

                            {/* Filtre par prix */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Fourchette de prix
                                </label>
                                <div className="space-y-2">
                                    {[
                                        { value: 'all', label: 'Tous les prix' },
                                        { value: '0-100', label: 'Moins de 100 DH' },
                                        { value: '100-500', label: '100 - 500 DH' },
                                        { value: '500-1000', label: '500 - 1 000 DH' },
                                        { value: '1000-5000', label: '1 000 - 5 000 DH' },
                                        { value: '5000+', label: 'Plus de 5 000 DH' }
                                    ].map((option) => (
                                        <label key={option.value} className="flex items-center space-x-3">
                                            <input
                                                type="radio"
                                                name="priceRange"
                                                value={option.value}
                                                checked={priceRange === option.value}
                                                onChange={(e) => setPriceRange(e.target.value)}
                                                className="text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="text-sm text-gray-700">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Filtre par localisation */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Localisation
                                </label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                    <option>Tout le Maroc</option>
                                    <option>Casablanca</option>
                                    <option>Rabat</option>
                                    <option>Marrakech</option>
                                    <option>Tanger</option>
                                    <option>Fès</option>
                                </select>
                            </div>

                            {/* Filtre par état */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    État du produit
                                </label>
                                <div className="space-y-2">
                                    {['Neuf', 'Comme neuf', 'Très bon état', 'Bon état', 'État correct'].map((state) => (
                                        <label key={state} className="flex items-center space-x-3">
                                            <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                                            <span className="text-sm text-gray-700">{state}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <Button variant="primary" className="w-full">
                                Appliquer les filtres
                            </Button>
                        </div>
                    </div>

                    {/* Contenu principal */}
                    <div className="lg:col-span-3">
                        {/* Barre de tri */}
                        <div className="bg-white rounded-xl p-4 mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                                    <span className="text-sm text-gray-600">
                                        {categoryVideos.length} résultats
                                    </span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm text-gray-600">Trier par:</span>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="relevant">Pertinence</option>
                                        <option value="price_asc">Prix: Croissant</option>
                                        <option value="price_desc">Prix: Décroissant</option>
                                        <option value="newest">Plus récents</option>
                                        <option value="popular">Plus populaires</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Grille de vidéos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categoryVideos.map((video) => (
                                <VideoCard key={video.id} video={video} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-8">
                            <nav className="flex items-center space-x-2">
                                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50">
                                    Précédent
                                </button>
                                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
                                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">3</button>
                                <span className="px-2 text-gray-500">...</span>
                                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">10</button>
                                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50">
                                    Suivant
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;