// src/pages/public/Home.jsx
import React, { useState, useEffect, useCallback } from 'react';
import VideoCard from '../../components/video/VideoCard';
import {
    FaFire,
    FaFilter,
    FaSortAmountDown,
    FaHeart,
    FaBookmark,
    FaShare
} from 'react-icons/fa';
import { MdOutlineTrendingUp } from 'react-icons/md';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [likedVideos, setLikedVideos] = useState(new Set());
    const [favoriteVideos, setFavoriteVideos] = useState(new Set());
    const [savedVideos, setSavedVideos] = useState(new Set());
    const [sortBy, setSortBy] = useState('popular');

    // Données initiales de vidéos (simulation d'API)
    const initialVideos = [
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
            uploadDate: "Il y a 2 heures",
            likes: 245,
            shares: 45
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
            uploadDate: "Il y a 3 heures",
            likes: 189,
            shares: 32
        },
        {
            id: 3,
            title: "Collection de sacs de luxe 2024",
            thumbnail: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=225&fit=crop",
            price: 1800,
            seller: "FashionMaroc",
            duration: "0:38",
            views: 1560,
            location: "Marrakech",
            verified: true,
            rating: 4.7,
            uploadDate: "Il y a 5 heures",
            likes: 312,
            shares: 67
        },
        {
            id: videos.length + 1,
            title: "MacBook Pro M2 2023 - 16GB",
            thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=225&fit=crop",
            price: 8900,
            seller: "AppleStore",
            duration: "0:55",
            views: 1890,
            location: "Casablanca",
            verified: true,
            rating: 4.9,
            uploadDate: "Il y a 4 heures",
            likes: 321,
            shares: 56
        },
        {
            id: videos.length + 2,
            title: "Montre Rolex Submariner - Occasion",
            thumbnail: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=225&fit=crop",
            price: 45000,
            seller: "LuxeTime",
            duration: "1:10",
            views: 5600,
            location: "Marrakech",
            verified: true,
            rating: 4.8,
            uploadDate: "Il y a 6 heures",
            likes: 654,
            shares: 98
        },
        {
            id: 4,
            title: "BMW X5 2018 - Full options",
            thumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=225&fit=crop",
            price: 285000,
            seller: "AutoPremium",
            duration: "1:00",
            views: 3240,
            location: "Tanger",
            verified: true,
            rating: 4.9,
            uploadDate: "Il y a 1 jour",
            likes: 567,
            shares: 89
        },
        {
            id: 5,
            title: "PlayStation 5 + 3 jeux",
            thumbnail: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=225&fit=crop",
            price: 4200,
            seller: "GameZone",
            duration: "0:41",
            views: 2100,
            location: "Fès",
            verified: false,
            rating: 4.3,
            uploadDate: "Il y a 1 jour",
            likes: 198,
            shares: 41
        },
        {
            id: 6,
            title: "Appartement meublé centre ville",
            thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=225&fit=crop",
            price: 850000,
            seller: "ImmoPlus",
            duration: "0:58",
            views: 4300,
            location: "Casablanca",
            verified: true,
            rating: 4.6,
            uploadDate: "Il y a 2 jours",
            likes: 432,
            shares: 78
        }
    ];

    // Gestion des interactions utilisateur
    const handleLike = (videoId) => {
        setLikedVideos(prev => {
            const newSet = new Set(prev);
            if (newSet.has(videoId)) {
                newSet.delete(videoId);
            } else {
                newSet.add(videoId);
            }
            return newSet;
        });
    };

    const handleFavorite = (videoId) => {
        setFavoriteVideos(prev => {
            const newSet = new Set(prev);
            if (newSet.has(videoId)) {
                newSet.delete(videoId);
            } else {
                newSet.add(videoId);
            }
            return newSet;
        });
    };

    const handleSave = (videoId) => {
        setSavedVideos(prev => {
            const newSet = new Set(prev);
            if (newSet.has(videoId)) {
                newSet.delete(videoId);
            } else {
                newSet.add(videoId);
            }
            return newSet;
        });
    };

    const handleShare = (videoId) => {
        // Simulation de partage
        alert(`Partager la vidéo ${videoId}`);

    };

    // Simule le chargement de plus de vidéos
    const loadMoreVideos = useCallback(() => {
        if (loading || !hasMore) return;

        setLoading(true);

        // Simulation d'une API call
        setTimeout(() => {
            const newVideos = [
                {
                    id: videos.length + 1,
                    title: "MacBook Pro M2 2023 - 16GB",
                    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=225&fit=crop",
                    price: 8900,
                    seller: "AppleStore",
                    duration: "0:55",
                    views: 1890,
                    location: "Casablanca",
                    verified: true,
                    rating: 4.9,
                    uploadDate: "Il y a 4 heures",
                    likes: 321,
                    shares: 56
                },
                {
                    id: videos.length + 2,
                    title: "Montre Rolex Submariner - Occasion",
                    thumbnail: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=225&fit=crop",
                    price: 45000,
                    seller: "LuxeTime",
                    duration: "1:10",
                    views: 5600,
                    location: "Marrakech",
                    verified: true,
                    rating: 4.8,
                    uploadDate: "Il y a 6 heures",
                    likes: 654,
                    shares: 98
                },
                {
                    id: videos.length + 3,
                    title: "Vélo électrique pliable",
                    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop",
                    price: 3500,
                    seller: "EcoMobility",
                    duration: "0:48",
                    views: 1250,
                    location: "Rabat",
                    verified: true,
                    rating: 4.4,
                    uploadDate: "Il y a 8 heures",
                    likes: 187,
                    shares: 34
                },
                {
                    id: videos.length + 4,
                    title: "Appareil photo Canon EOS R5",
                    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=225&fit=crop",
                    price: 12500,
                    seller: "PhotoPro",
                    duration: "1:15",
                    views: 3200,
                    location: "Tanger",
                    verified: true,
                    rating: 4.7,
                    uploadDate: "Il y a 12 heures",
                    likes: 298,
                    shares: 52
                },
                {
                    id: videos.length + 5,
                    title: "Meuble TV design scandinave",
                    thumbnail: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=225&fit=crop",
                    price: 1800,
                    seller: "DesignHome",
                    duration: "0:42",
                    views: 890,
                    location: "Fès",
                    verified: false,
                    rating: 4.2,
                    uploadDate: "Il y a 1 jour",
                    likes: 143,
                    shares: 29
                },
                {
                    id: videos.length + 6,
                    title: "Console Nintendo Switch OLED",
                    thumbnail: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=225&fit=crop",
                    price: 2800,
                    seller: "GameWorld",
                    duration: "0:36",
                    views: 2100,
                    location: "Casablanca",
                    verified: true,
                    rating: 4.6,
                    uploadDate: "Il y a 1 jour",
                    likes: 234,
                    shares: 47
                }
            ];

            setVideos(prev => [...prev, ...newVideos]);
            setPage(prev => prev + 1);
            setLoading(false);
            if (page >= 3) {
                setHasMore(false);
            }
        }, 1000);
    }, [loading, hasMore, page, videos.length]);

    // Initialisation
    useEffect(() => {
        setVideos(initialVideos);
    }, []);

    // Gestion du scroll infini
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            // Charger plus de vidéos quand l'utilisateur arrive à 80% de la page
            if (scrollTop + clientHeight >= scrollHeight * 0.8 && hasMore && !loading) {
                loadMoreVideos();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore, loading, loadMoreVideos]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header avec options de tri */}
            <div className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <FaFire className="text-orange-500 text-xl" />
                            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                                Vidéos tendance
                            </h1>
                        </div>
                        <p className="text-gray-600 text-sm mt-1">
                            Découvrez les produits les plus populaires du moment
                        </p>
                    </div>

                    {/* Options de tri et filtre */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSortBy('popular')}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${sortBy === 'popular' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <MdOutlineTrendingUp />
                            Tendance
                        </button>
                        <button
                            onClick={() => setSortBy('recent')}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${sortBy === 'recent' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <FaSortAmountDown />
                            Récent
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                            <FaFilter />
                            Filtres
                        </button>
                    </div>
                </div>
            </div>

            {/* Grille de vidéos - Style YouTube amélioré */}
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {videos.map((video) => (
                        <div key={video.id} className="group relative">
                            <VideoCard
                                video={video}
                                compact={true}
                                isLiked={likedVideos.has(video.id)}
                                isFavorite={favoriteVideos.has(video.id)}
                                isSaved={savedVideos.has(video.id)}
                                onLike={() => handleLike(video.id)}
                                onFavorite={() => handleFavorite(video.id)}
                                onSave={() => handleSave(video.id)}
                                onShare={() => handleShare(video.id)}
                            />
                        </div>
                    ))}
                </div>

                {/* Indicateur de chargement */}
                {loading && (
                    <div className="flex justify-center items-center py-12">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
                                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
                            </div>
                            <span className="text-gray-600 font-medium">Chargement de plus de vidéos...</span>
                        </div>
                    </div>
                )}

                {/* Message quand plus de vidéos */}
                {!hasMore && !loading && videos.length > 0 && (
                    <div className="text-center py-12">
                        <div className="inline-flex flex-col items-center space-y-3 px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                            <div>
                                <h3 className="font-bold text-gray-900">Vous avez tout vu !</h3>
                                <p className="text-gray-600 text-sm">Revenez plus tard pour découvrir de nouvelles vidéos</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Bouton flottant pour actions rapides */}
            <div className="fixed bottom-6 right-6 flex flex-col items-center gap-3 z-10">
                {/* Bouton de partage */}
                <button className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                    <FaShare className="text-lg" />
                </button>

                {/* Feedback visuel pour le scroll */}
                {hasMore && !loading && (
                    <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm shadow-lg animate-bounce">
                        <span>Défilez pour plus ↓</span>
                    </div>
                )}
            </div>

            {/* Barre d'actions rapides en bas */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-10">
                <div className="flex justify-around items-center">
                    <button className="flex flex-col items-center gap-1 p-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <FaFire className="text-lg" />
                        <span className="text-xs">Tendance</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 p-2 text-gray-600 hover:text-red-600 transition-colors">
                        <FaHeart className="text-lg" />
                        <span className="text-xs">Favoris</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 p-2 text-gray-600 hover:text-green-600 transition-colors">
                        <FaBookmark className="text-lg" />
                        <span className="text-xs">Sauvegardés</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 p-2 text-gray-600 hover:text-purple-600 transition-colors">
                        <FaFilter className="text-lg" />
                        <span className="text-xs">Filtres</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;