// src/components/shared/UserProfile.jsx
import React from 'react';
import Button from '../ui/Button';

const UserProfile = ({ user, showContactButton = true }) => {
    if (!user) {
        return (
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                </div>
                <p className="text-gray-500 text-sm">Utilisateur non disponible</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* Header avec avatar et info */}
            <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                        ) : (
                            user.name.charAt(0).toUpperCase()
                        )}
                    </div>
                    {user.isOnline && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                </div>

                <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{user.name}</h3>
                    <p className="text-gray-600 text-sm">{user.location}</p>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mt-1">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    className={`w-4 h-4 ${star <= user.rating ? 'text-yellow-400' : 'text-gray-300'
                                        }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">({user.reviewCount})</span>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                    <p className="text-2xl font-bold text-gray-900">{user.videosCount}</p>
                    <p className="text-xs text-gray-500">Vidéos</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-gray-900">{user.salesCount}</p>
                    <p className="text-xs text-gray-500">Ventes</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-gray-900">{user.responseRate}%</p>
                    <p className="text-xs text-gray-500">Réponse</p>
                </div>
            </div>

            {/* Description */}
            {user.description && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{user.description}</p>
            )}

            {/* Boutons d'action */}
            {showContactButton && (
                <div className="flex space-x-2">
                    <Button variant="primary" size="sm" className="flex-1">
                        Contacter
                    </Button>
                    <Button variant="outline" size="sm">
                        Suivre
                    </Button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;