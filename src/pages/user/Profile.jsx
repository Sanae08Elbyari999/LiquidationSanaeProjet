// src/pages/user/Profile.jsx
import React, { useState } from 'react';
import {
    FaUserCircle,
    FaEdit,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaCheckCircle,
    FaPhoneAlt,
    FaEnvelope,
    FaLock,
    FaSave
} from 'react-icons/fa';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: "Sanae El-byari",
        email: "sanae.byari@email.com",
        phone: "+212 6 12 34 56 78",
        avatar: "",
        location: "Fes, Centre ville",
        memberSince: "15 Mars 2023",
        verified: true
    });

    const [formData, setFormData] = useState({ ...user });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        setUser(formData);
        setIsEditing(false);
        // Ici, vous enverriez les données à l'API
        console.log('Données sauvegardées:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* En-tête */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Profil</h1>
                    <p className="text-gray-600">Gérez vos informations personnelles</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Photo de profil et infos de base */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                            {/* Photo de profil */}
                            <div className="flex flex-col items-center mb-6">
                                <div className="relative mb-4">
                                    <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                                        <FaUserCircle className="text-7xl text-gray-400" />
                                    </div>
                                    {isEditing && (
                                        <button className="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
                                            <FaEdit className="text-sm" />
                                        </button>
                                    )}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 text-center mb-1">
                                    {user.name}
                                </h2>
                                {user.verified && (
                                    <div className="flex items-center gap-1 text-green-600 text-sm mb-4">
                                        <FaCheckCircle />
                                        <span>Compte vérifié</span>
                                    </div>
                                )}
                            </div>

                            {/* Date d'inscription */}
                            <div className="border-t border-gray-100 pt-4">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaCalendarAlt />
                                    <div>
                                        <div className="font-medium">Membre depuis</div>
                                        <div>{user.memberSince}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Informations personnelles */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Informations personnelles</h3>
                                {!isEditing ? (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        <FaEdit />
                                        Modifier
                                    </button>
                                ) : (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                setFormData({ ...user });
                                                setIsEditing(false);
                                            }}
                                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            Annuler
                                        </button>
                                        <button
                                            onClick={handleSave}
                                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                        >
                                            <FaSave />
                                            Enregistrer
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-6">
                                {/* Nom et prénom */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom complet
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <FaUserCircle className="text-gray-400" />
                                            <span className="font-medium">{user.name}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Adresse email
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <FaEnvelope className="text-gray-400" />
                                            <span className="font-medium">{user.email}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Téléphone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Numéro de téléphone
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="+212 6 XX XX XX XX"
                                        />
                                    ) : (
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <FaPhoneAlt className="text-gray-400" />
                                            <span className="font-medium">{user.phone}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Localisation */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Ville
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Votre ville"
                                        />
                                    ) : (
                                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            <FaMapMarkerAlt className="text-gray-400" />
                                            <span className="font-medium">{user.location}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Sécurité */}
                                {!isEditing && (
                                    <div className="border-t border-gray-100 pt-6">
                                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <FaLock className="text-gray-400" />
                                            Sécurité du compte
                                        </h4>
                                        <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-left">
                                            <div className="font-medium">Changer le mot de passe</div>
                                            <div className="text-sm text-gray-500">Mettez à jour votre mot de passe régulièrement</div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Section informations supplémentaires (non éditable) */}
                        {!isEditing && (
                            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                                <h4 className="font-bold text-gray-900 text-lg mb-4">À propos de votre compte</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                            <FaCheckCircle className="text-green-500" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">Statut vérifié</div>
                                            <div className="text-sm text-gray-600">Compte authentifié</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                            <FaCalendarAlt className="text-blue-500" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">Ancienneté</div>
                                            <div className="text-sm text-gray-600">{user.memberSince}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;