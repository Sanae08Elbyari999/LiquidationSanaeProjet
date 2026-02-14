// src/components/shared/VideoCard.jsx
import React, { useState } from 'react';
import {
    FaMapMarkerAlt,
    FaHeart,
    FaRegHeart,
    FaShare,
    FaPlay
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VideoCard = ({
    video,
    isFavorite = false,
    isSaved = false,
    onFavorite,
    onSave,
    onShare
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('fr-MA', {
            style: 'currency',
            currency: 'MAD',
            minimumFractionDigits: 0
        }).format(price);
    };

    const handleAction = (e, action) => {
        e.preventDefault();
        e.stopPropagation();
        if (action) action();
    };

    const handleSave = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Notifier l'utilisateur
        const message = isSaved
            ? "Vidéo retirée des sauvegardes"
            : "Vidéo sauvegardée dans Mes Produits";

        // Créer une notification visuelle
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 ${isSaved ? 'bg-blue-100 text-blue-800 border border-blue-200' : 'bg-green-100 text-green-800 border border-green-200'
            }`;
        notification.innerHTML = `
            <div class="flex items-center gap-2">
                <i class="fas ${isSaved ? 'fa-bookmark' : 'fa-bookmark'}"></i>
                <span class="font-medium">${message}</span>
            </div>
        `;
        document.body.appendChild(notification);

        // Supprimer la notification après 3 secondes
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);

        // Appeler la fonction de sauvegarde
        if (onSave) {
            onSave();
        }
    };

    return (
        <Link
            to={`/video/${video.id}`}
            className="block group hover:no-underline"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Thumbnail avec durée et bouton play */}
                <div className="relative overflow-hidden">
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay de lecture */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <FaPlay className="text-white text-sm ml-1" />
                                </div>
                                <span className="text-white text-sm font-medium bg-black/60 px-2 py-1 rounded">
                                    {video.duration}
                                </span>
                            </div>

                            {/* Boutons d'actions rapides sur thumbnail */}
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                
                                <button
                                    onClick={(e) => handleAction(e, onFavorite)}
                                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                                    title="Favori"
                                >
                                    {isFavorite ? (
                                        <FaHeart className="text-red-500 animate-pulse" />
                                    ) : (
                                        <FaRegHeart className="text-gray-700" />
                                    )}
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenu */}
                <div className="p-4">
                    {/* Titre */}
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors text-base leading-tight">
                        {video.title}
                    </h3>

                    {/* Prix et localisation */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="font-bold text-lg text-gray-900">
                            {formatPrice(video.price)}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded-full">
                            <FaMapMarkerAlt className="text-xs" />
                            <span className="truncate max-w-[80px]">{video.location}</span>
                        </div>
                    </div>

                    {/* Métriques et interactions */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        
                        {/* Boutons d'interaction */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={(e) => handleAction(e, onShare)}
                                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                                title="Partager"
                            >
                                <FaShare className="text-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;