// src/pages/public/Video.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import UserProfile from '../../components/shared/UserProfile';

const Video = () => {
    const { id } = useParams();
    const [isPlaying, setIsPlaying] = useState(false);

    // Données mockées pour la vidéo
    const videoData = {
        id: 1,
        title: "iPhone 13 Pro Max 256GB - Comme neuf, garantie restante",
        description: "iPhone 13 Pro Max en excellent état, acheté il y a 8 mois. Livré avec facture d'achat, garantie Apple jusqu'à décembre 2024. Accessoires inclus: câble USB-C, adaptateur 20W. Écran et coque arrière protégés depuis le premier jour.",
        price: 4500,
        originalPrice: 6000,
        location: "Casablanca",
        category: "Électronique",
        duration: "0:45",
        views: 1240,
        uploadDate: "2024-01-15",
        seller: {
            id: 1,
            name: "TechStore Maroc",
            avatar: "",
            rating: 4.8,
            reviewCount: 124,
            location: "Casablanca",
            memberSince: "2023",
            responseRate: 95,
            videosCount: 23,
            salesCount: 89,
            description: "Spécialiste en produits électroniques reconditionnés. Tous nos produits sont testés et garantis 6 mois."
        },
        features: [
            "État: Comme neuf",
            "Capacité: 256GB",
            "Couleur: Bleu sierra",
            "Batterie: 100% santé",
            "Garantie: 4 mois restants"
        ]
    };

    const relatedVideos = [
        {
            id: 2,
            title: "Samsung Galaxy S23 Ultra",
            thumbnail: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300",
            price: 5200,
            seller: "MobileExpert",
            duration: "0:38",
            views: 890
        },
        {
            id: 3,
            title: "iPad Pro 12.9 M2",
            thumbnail: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300",
            price: 6800,
            seller: "AppleStore",
            duration: "0:52",
            views: 670
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne principale */}
                    <div className="lg:col-span-2">
                        {/* Player vidéo */}
                        <div className="bg-black rounded-xl overflow-hidden mb-6">
                            <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                                {!isPlaying ? (
                                    <div className="text-center">
                                        <button
                                            onClick={() => setIsPlaying(true)}
                                            className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                                        >
                                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>
                                        <p className="text-white mt-4 text-sm">Cliquez pour lire la vidéo</p>
                                    </div>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="loader-spinner w-12 h-12 border-white mx-auto mb-4"></div>
                                            <p>Chargement de la vidéo...</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Informations produit */}
                        <div className="bg-white rounded-xl p-6 mb-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{videoData.title}</h1>
                                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                                        <span>{videoData.views.toLocaleString()} vues</span>
                                        <span>•</span>
                                        <span>Publié le {new Date(videoData.uploadDate).toLocaleDateString('fr-FR')}</span>
                                        <span>•</span>
                                        <span>{videoData.category}</span>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <Button variant="outline" size="sm">
                                        <span className="flex items-center space-x-2">
                                            <span>💖</span>
                                            <span className="hidden sm:inline">Sauvegarder</span>
                                        </span>
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <span className="flex items-center space-x-2">
                                            <span>📤</span>
                                            <span className="hidden sm:inline">Partager</span>
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">{videoData.price.toLocaleString()} DH</div>
                                    {videoData.originalPrice && (
                                        <div className="text-sm text-gray-500 line-through">{videoData.originalPrice.toLocaleString()} DH</div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                                        <span>📍 {videoData.location}</span>
                                        <span>•</span>
                                        <span className="text-green-600 font-semibold">En stock</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mt-1">Livraison disponible dans tout le Maroc</div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
                                <p className="text-gray-700 leading-relaxed">{videoData.description}</p>
                            </div>

                            {/* Caractéristiques */}
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Caractéristiques</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {videoData.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Boutons d'action */}
                        <div className="bg-white rounded-xl p-6">
                            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                                <Button variant="primary" size="lg" className="flex-1">
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>💬</span>
                                        <span>Contacter le vendeur</span>
                                    </span>
                                </Button>
                                <Button variant="success" size="lg" className="flex-1">
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>🛒</span>
                                        <span>Acheter maintenant</span>
                                    </span>
                                </Button>
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-3">
                                Paiement sécurisé • Livraison garantie • Support 7j/7
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Profil vendeur */}
                        <UserProfile user={videoData.seller} />

                        {/* Vidéos similaires */}
                        <div className="bg-white rounded-xl p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Vidéos similaires</h3>
                            <div className="space-y-4">
                                {relatedVideos.map((video) => (
                                    <Link
                                        key={video.id}
                                        to={`/video/${video.id}`}
                                        className="flex space-x-3 group"
                                    >
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-20 h-16 object-cover rounded-lg"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 text-sm">
                                                {video.title}
                                            </h4>
                                            <p className="text-green-600 font-semibold text-sm">{video.price.toLocaleString()} DH</p>
                                            <p className="text-gray-500 text-xs">{video.views} vues</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Information sécurité */}
                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                            <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mt-0.5">
                                    ℹ️
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-900 text-sm mb-1">Achat sécurisé</h4>
                                    <p className="text-blue-800 text-xs">
                                        Votre paiement est protégé. L'argent est versé au vendeur seulement après réception du produit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;