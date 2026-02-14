// src/pages/user/Settings.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaUser,
    FaBell,
    FaLock,
    FaGlobe,
    FaPalette,
    FaShieldAlt,
    FaCreditCard,
    FaTrash,
    FaSave,
    FaArrowLeft
} from 'react-icons/fa';

const Settings = () => {
    const [settings, setSettings] = useState({
        // Profil
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '+212 6 12 34 56 78',
        location: 'Casablanca, Maroc',
        
        // Notifications
        emailNotifications: true,
        pushNotifications: true,
        marketingEmails: false,
        orderUpdates: true,
        
        // Sécurité
        twoFactorAuth: false,
        loginAlerts: true,
        
        // Apparence
        theme: 'light',
        language: 'fr'
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Sauvegarder les paramètres
        alert('Paramètres sauvegardés avec succès !');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* En-tête */}
                <div className="mb-8">
                    <Link to="/profile" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
                        <FaArrowLeft />
                        Retour au profil
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Paramètres</h1>
                    <p className="text-gray-600">Gérez vos préférences et paramètres de compte</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Onglets de navigation */}
                    <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
                        <a href="#profil" className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium">
                            Profil
                        </a>
                        <a href="#notifications" className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium">
                            Notifications
                        </a>
                        <a href="#securite" className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium">
                            Sécurité
                        </a>
                        <a href="#apparence" className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium">
                            Apparence
                        </a>
                    </div>

                    <div className="space-y-8">
                        {/* Section Profil */}
                        <div id="profil" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <FaUser className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Informations personnelles</h2>
                                    <p className="text-gray-600 text-sm">Mettez à jour vos informations de profil</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={settings.fullName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={settings.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={settings.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Localisation
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={settings.location}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section Notifications */}
                        <div id="notifications" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                    <FaBell className="text-yellow-600 text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Préférences de notification</h2>
                                    <p className="text-gray-600 text-sm">Contrôlez comment et quand vous recevez des notifications</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-gray-900">Notifications email</h3>
                                        <p className="text-gray-600 text-sm">Recevoir des notifications par email</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="emailNotifications"
                                            checked={settings.emailNotifications}
                                            onChange={handleInputChange}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>

                                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-gray-900">Notifications push</h3>
                                        <p className="text-gray-600 text-sm">Recevoir des notifications push</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="pushNotifications"
                                            checked={settings.pushNotifications}
                                            onChange={handleInputChange}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>

                                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-gray-900">Emails marketing</h3>
                                        <p className="text-gray-600 text-sm">Recevoir des offres et promotions</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="marketingEmails"
                                            checked={settings.marketingEmails}
                                            onChange={handleInputChange}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Section Sécurité */}
                        <div id="securite" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                    <FaLock className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Sécurité du compte</h2>
                                    <p className="text-gray-600 text-sm">Protégez votre compte et vos données</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-gray-900">Authentification à deux facteurs</h3>
                                        <p className="text-gray-600 text-sm">Ajoutez une couche de sécurité supplémentaire</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="twoFactorAuth"
                                            checked={settings.twoFactorAuth}
                                            onChange={handleInputChange}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>

                                <div>
                                    <h3 className="font-medium text-gray-900 mb-4">Changer le mot de passe</h3>
                                    <div className="space-y-4">
                                        <input
                                            type="password"
                                            placeholder="Nouveau mot de passe"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Confirmer le mot de passe"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <FaTrash className="text-red-500" />
                                        <div>
                                            <h3 className="font-medium text-red-900">Zone dangereuse</h3>
                                            <p className="text-red-700 text-sm">Supprimer définitivement votre compte</p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                                    >
                                        Supprimer mon compte
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Section Apparence */}
                        <div id="apparence" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <FaPalette className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Apparence</h2>
                                    <p className="text-gray-600 text-sm">Personnalisez l'apparence de votre interface</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Thème
                                    </label>
                                    <select
                                        name="theme"
                                        value={settings.theme}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="light">Clair</option>
                                        <option value="dark">Sombre</option>
                                        <option value="auto">Auto (système)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Langue
                                    </label>
                                    <select
                                        name="language"
                                        value={settings.language}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="fr">Français</option>
                                        <option value="ar">العربية</option>
                                        <option value="en">English</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="mt-8 flex justify-end gap-4">
                        <button
                            type="button"
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                        >
                            <FaSave />
                            Sauvegarder les changements
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Settings;