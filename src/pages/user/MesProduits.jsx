// src/pages/user/MesProduits.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../../components/video/VideoCard';
import {
    FaBookmark,
    FaTrash,
    FaSearch,
    FaBoxOpen
} from 'react-icons/fa';

const MesProduits = () => {
    const [savedVideos, setSavedVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all'); // all, liked, viewed, purchased
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVideos, setSelectedVideos] = useState(new Set());

    // Charger les vidéos sauvegardées depuis localStorage
    useEffect(() => {
        const loadSavedVideos = () => {
            setLoading(true);
            // Simuler un chargement
            setTimeout(() => {
                // Dans une application réelle, vous récupéreriez depuis une API
                // Pour l'exemple, nous utilisons des données mockées
                const mockSavedVideos = [
                    {
                        id: 1,
                        title: "MacBook Pro M2 2023 - 16GB",
                        thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=225&fit=crop",
                        price: 4500,
                        seller: "TechStore",
                        duration: "0:45",
                        views: 1240,
                        location: "Casablanca",
                        verified: true,
                        rating: 4.8,
                        uploadDate: "Sauvegardé il y a 2 jours",
                        likes: 245,
                        shares: 45,
                        savedDate: "2024-01-15"
                    },
                    {
                        id: 2,
                        title: "Canapé en cuir véritable 3 places",
                        thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=225&fit=crop",
                        price: 3200,
                        seller: "MaisonModerne",
                        duration: "0:52",
                        views: 890,
                        location: "Rabat",
                        verified: true,
                        rating: 4.5,
                        uploadDate: "Sauvegardé il y a 1 semaine",
                        likes: 189,
                        shares: 32,
                        savedDate: "2024-01-10"
                    },
                    {
                        id: 3,
                        title: "iPhone 14 Pro Max 256GB",
                        thumbnail: "https://images.unsplash.com/photo-1632661674596-618e45e56c53?w=400&h=225&fit=crop",
                        price: 8500,
                        seller: "MobileExpert",
                        duration: "0:48",
                        views: 1890,
                        location: "Rabat",
                        verified: true,
                        rating: 4.8,
                        uploadDate: "Sauvegardé aujourd'hui",
                        likes: 321,
                        shares: 56,
                        savedDate: "2024-01-20"
                    },
                    {
                        id: 4,
                        title: "Montre Rolex Submariner - Occasion",
                        thumbnail: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=225&fit=crop",
                        price: 45000,
                        seller: "LuxeTime",
                        duration: "1:10",
                        views: 5600,
                        location: "Marrakech",
                        verified: true,
                        rating: 4.8,
                        uploadDate: "Sauvegardé il y a 3 jours",
                        likes: 654,
                        shares: 98,
                        savedDate: "2024-01-17"
                    }
                ];

                setSavedVideos(mockSavedVideos);
                setLoading(false);
            }, 1000);
        };

        loadSavedVideos();
    }, []);

    // Gestion des interactions
    const handleRemove = (videoId) => {
        setSavedVideos(prev => prev.filter(video => video.id !== videoId));
        // Ici, vous enverriez aussi une requête à l'API pour supprimer
    };

    const handleRemoveSelected = () => {
        setSavedVideos(prev => prev.filter(video => !selectedVideos.has(video.id)));
        setSelectedVideos(new Set());
    };

    const handleSelectAll = () => {
        if (selectedVideos.size === filteredVideos.length) {
            setSelectedVideos(new Set());
        } else {
            setSelectedVideos(new Set(filteredVideos.map(video => video.id)));
        }
    };

    const handleSelectVideo = (videoId) => {
        const newSelected = new Set(selectedVideos);
        if (newSelected.has(videoId)) {
            newSelected.delete(videoId);
        } else {
            newSelected.add(videoId);
        }
        setSelectedVideos(newSelected);
    };

    const handleLike = (videoId) => {
        console.log('Like video:', videoId);
    };

    const handleFavorite = (videoId) => {
        console.log('Favorite video:', videoId);
    };

    const handleSave = (videoId) => {
        // Supprimer de la liste
        handleRemove(videoId);
    };

    const handleShare = (videoId) => {
        console.log('Share video:', videoId);
    };

    // Filtrer les vidéos
    const filteredVideos = savedVideos.filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.seller.toLowerCase().includes(searchTerm.toLowerCase());

        switch (filter) {
            case 'liked':
                return matchesSearch && video.likes > 200;
            case 'recent':
                return matchesSearch && video.uploadDate.includes("aujourd'hui") || video.uploadDate.includes("hier");
            case 'expensive':
                return matchesSearch && video.price > 5000;
            case 'cheap':
                return matchesSearch && video.price < 1000;
            default:
                return matchesSearch;
        }
    });

    // Statistiques
    const stats = {
        total: savedVideos.length,
        totalValue: savedVideos.reduce((sum, video) => sum + video.price, 0),
        averagePrice: savedVideos.length > 0
            ? savedVideos.reduce((sum, video) => sum + video.price, 0) / savedVideos.length
            : 0
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Contrôles et filtres */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-xl font-bold text-gray-900">
                                Mes sauvegardes ({filteredVideos.length})
                            </h2>

                            {selectedVideos.size > 0 && (
                                <button
                                    onClick={handleRemoveSelected}
                                    className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                                >
                                    <FaTrash />
                                    Supprimer {selectedVideos.size} sélectionné(s)
                                </button>
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Rechercher dans mes sauvegardes..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                        </div>
                    </div>

                    {/* Checkbox de sélection multiple */}
                    <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                        <input
                            type="checkbox"
                            checked={selectedVideos.size === filteredVideos.length && filteredVideos.length > 0}
                            onChange={handleSelectAll}
                            className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-600">
                            {selectedVideos.size > 0
                                ? `${selectedVideos.size} produit(s) sélectionné(s)`
                                : "Sélectionner tout"}
                        </span>
                    </div>
                </div>

                {/* Contenu */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Chargement de vos produits sauvegardés...</p>
                        </div>
                    </div>
                ) : filteredVideos.length > 0 ? (
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredVideos.map((video) => (
                                <div key={video.id} className="relative group">
                                    {/* Checkbox de sélection */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <input
                                            type="checkbox"
                                            checked={selectedVideos.has(video.id)}
                                            onChange={() => handleSelectVideo(video.id)}
                                            className="rounded text-blue-600 focus:ring-blue-500 transform scale-125 opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>

                                    <VideoCard
                                        video={video}
                                        isLiked={false}
                                        isFavorite={false}
                                        isSaved={true}
                                        onLike={() => handleLike(video.id)}
                                        onFavorite={() => handleFavorite(video.id)}
                                        onSave={() => handleSave(video.id)}
                                        onShare={() => handleShare(video.id)}
                                    />

                                    {/* Bouton de suppression */}
                                    <button
                                        onClick={() => handleRemove(video.id)}
                                        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-600"
                                        title="Retirer des sauvegardes"
                                    >
                                        <FaTrash className="text-sm" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Actions groupées */}
                        {selectedVideos.size > 0 && (
                            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50">
                                <div className="flex items-center gap-6">
                                    <span className="font-medium text-gray-900">
                                        {selectedVideos.size} produit(s) sélectionné(s)
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                        <div className="inline-flex flex-col items-center space-y-6 max-w-md mx-auto">
                            <FaBoxOpen className="text-6xl text-gray-300" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Aucun produit sauvegardé
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Commencez à sauvegarder des produits en cliquant sur l'icône
                                    <FaBookmark className="inline mx-2 text-blue-600" />
                                    dans les vidéos qui vous intéressent.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Link
                                    to="/"
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Parcourir les produits
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MesProduits;