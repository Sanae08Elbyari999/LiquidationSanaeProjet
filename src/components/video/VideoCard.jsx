// src/components/shared/VideoCard.jsx
import React, { useState } from 'react';
import {
    FaMapMarkerAlt,
    FaHeart,
    FaRegHeart,
    FaShareAlt,
    FaPlay,
    FaStar
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
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

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

    const showToast = (message, type = 'success') => {
        setNotificationMessage(message);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    const handleShare = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const shareUrl = window.location.origin + `/video/${video.id}`;
        
        if (navigator.share) {
            navigator.share({
                title: video.title,
                text: `Découvrez ce produit sur Laliquidation: ${video.title}`,
                url: shareUrl,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareUrl);
            showToast('Lien copié dans le presse-papier !', 'success');
        }
        
        if (onShare) onShare();
    };

    const handleSave = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const message = isSaved
            ? "Vidéo retirée des sauvegardes"
            : "Vidéo sauvegardée dans Mes Produits";

        showToast(message, isSaved ? 'info' : 'success');

        if (onSave) {
            onSave();
        }
    };

    return (
        <>
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
                        {/* Titre avec bouton de partage à côté */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors text-base leading-tight flex-1">
                                {video.title}
                            </h3>
                            <button
                                onClick={handleShare}
                                className="p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex-shrink-0"
                                title="Partager"
                            >
                                <FaShareAlt className="text-sm" />
                            </button>
                        </div>

                        {/* Prix et localisation */}
                        <div className="flex justify-between items-center mb-2">
                            <div className="font-bold text-lg text-gray-900">
                                {formatPrice(video.price)}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded-full">
                                <FaMapMarkerAlt className="text-xs" />
                                <span className="truncate max-w-[80px]">{video.location}</span>
                            </div>
                        </div>

                        {/* Section notation avec étoiles */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        className={`${
                                            star <= Math.round(video.rating || 4.5)
                                                ? 'text-yellow-400'
                                                : 'text-gray-300'
                                        } text-xs`}
                                    />
                                ))}
                            </div>
                            <span className="text-xs font-medium text-gray-700">
                                {(video.rating || 4.5).toFixed(1)}
                            </span>
                            <span className="text-xs text-gray-500">
                                ({video.reviews || 124} avis)
                            </span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Notification personnalisée */}
            {showNotification && (
                <div className="fixed top-4 right-4 z-50 animate-slide-in">
                    <div className={`px-4 py-3 rounded-lg shadow-lg border ${
                        notificationMessage.includes('retirée') 
                            ? 'bg-blue-100 text-blue-800 border-blue-200' 
                            : 'bg-green-100 text-green-800 border-green-200'
                    }`}>
                        <div className="flex items-center gap-2">
                            {notificationMessage.includes('retirée') ? (
                                <FaRegHeart className="text-blue-500" />
                            ) : (
                                <FaShareAlt className="text-green-500" />
                            )}
                            <span className="font-medium">{notificationMessage}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Styles pour les animations */}
            <style jsx>{`
                @keyframes slideIn {
                    0% { opacity: 0; transform: translateX(100%); }
                    10% { opacity: 1; transform: translateX(0); }
                    90% { opacity: 1; transform: translateX(0); }
                    100% { opacity: 0; transform: translateX(100%); }
                }
                .animate-slide-in {
                    animation: slideIn 3s ease-in-out forwards;
                }
            `}</style>
        </>
    );
};

export default VideoCard;