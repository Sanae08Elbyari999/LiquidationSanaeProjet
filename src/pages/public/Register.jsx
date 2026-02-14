// src/pages/public/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import {
    FaVideo,
    FaShieldAlt,
    FaEnvelope,
    FaUserPlus,
    FaUsers,
    FaCheckCircle,
    FaUser,
    FaLock,
    FaPhoneAlt,
    FaEnvelopeOpen,
    FaStore,
    FaHandshake,
    FaChartLine
} from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        userType: 'buyer',
        acceptTerms: false
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulation d'inscription
        setTimeout(() => {
            setIsLoading(false);
            alert('Fonctionnalité d\'inscription à implémenter');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 md:py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* En-tête */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <FaUserPlus className="text-white text-3xl" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                                <FaCheckCircle className="text-white text-sm" />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Rejoignez <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Laliquidation</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        La première plateforme marocaine de vente par vidéo - Vendez et achetez en toute confiance
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne gauche - Formulaire */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            {/* Type d'utilisateur */}
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Vous êtes :</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, userType: 'buyer' }))}
                                        className={`p-4 rounded-xl border-2 transition-all ${formData.userType === 'buyer' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-3 rounded-lg ${formData.userType === 'buyer' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                                                <FaUser className="text-xl" />
                                            </div>
                                            <div className="text-left">
                                                <h3 className="font-bold text-gray-900">Acheteur</h3>
                                                <p className="text-sm text-gray-600">Je veux acheter des produits</p>
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, userType: 'seller' }))}
                                        className={`p-4 rounded-xl border-2 transition-all ${formData.userType === 'seller' ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-3 rounded-lg ${formData.userType === 'seller' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>
                                                <FaStore className="text-xl" />
                                            </div>
                                            <div className="text-left">
                                                <h3 className="font-bold text-gray-900">Vendeur</h3>
                                                <p className="text-sm text-gray-600">Je veux vendre mes produits</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Formulaire */}
                            <div className="p-6 md:p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Informations personnelles */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <FaUser className="text-blue-500" />
                                            Informations personnelles
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Prénom
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                    placeholder="Votre prénom"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Nom
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                    placeholder="Votre nom"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <FaEnvelopeOpen className="text-blue-500" />
                                            Coordonnées
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Adresse email
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                        <FaEnvelope />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                        placeholder="votre@email.com"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Numéro de téléphone
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                        <FaPhoneAlt />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                        placeholder="+212 6 XX XX XX XX"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                            <FaLock className="text-blue-500" />
                                            Sécurité
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Mot de passe
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                        <FaLock />
                                                    </div>
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                                <p className="text-xs text-gray-500 mt-2">Minimum 8 caractères</p>
                                            </div>
                                            <div>
                                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Confirmer le mot de passe
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                        <FaLock />
                                                    </div>
                                                    <input
                                                        type="password"
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        value={formData.confirmPassword}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start p-4 bg-blue-50 rounded-xl border border-blue-200">
                                        <input
                                            id="acceptTerms"
                                            name="acceptTerms"
                                            type="checkbox"
                                            checked={formData.acceptTerms}
                                            onChange={handleChange}
                                            required
                                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                                        />
                                        <label htmlFor="acceptTerms" className="ml-3 block text-sm text-gray-900">
                                            <span className="font-medium">Je confirme avoir lu et accepté</span> les{' '}
                                            <Link to="/terms" className="text-blue-600 hover:text-blue-800 font-medium">
                                                conditions d'utilisation
                                            </Link>{' '}
                                            et la{' '}
                                            <Link to="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">
                                                politique de confidentialité
                                            </Link>{' '}
                                            de Laliquidation.
                                        </label>
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        className="w-full py-4 text-lg font-semibold rounded-xl"
                                        disabled={isLoading || !formData.acceptTerms}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center space-x-3">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Création du compte...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center space-x-2">
                                                <FaUserPlus />
                                                <span>Créer mon compte {formData.userType === 'seller' ? 'de vendeur' : ''}</span>
                                            </div>
                                        )}
                                    </Button>

                                    <div className="text-center pt-4 border-t border-gray-200">
                                        <p className="text-gray-600">
                                            Déjà un compte ?{' '}
                                            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                                                Se connecter
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Colonne droite - Avantages */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Avantages */}
                            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <FaCheckCircle className="text-green-300" />
                                    Pourquoi nous rejoindre ?
                                </h3>

                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <FaVideo className="text-white text-xl" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Vendez par vidéo</h4>
                                            <p className="text-blue-100 text-sm">
                                                Montrez vos produits en action avec des vidéos courtes et engageantes
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <FaShieldAlt className="text-white text-xl" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Paiement 100% sécurisé</h4>
                                            <p className="text-blue-100 text-sm">
                                                Notre système protège acheteurs et vendeurs
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <FaEnvelope className="text-white text-xl" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Email professionnel</h4>
                                            <p className="text-blue-100 text-sm">
                                                Adresse @laliquidation.com pour votre activité
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                                <FaChartLine className="text-white text-xl" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">Devenez affilié</h4>
                                            <p className="text-blue-100 text-sm">
                                                Gagnez des commissions en promouvant des produits
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-lg font-bold">50,000+</p>
                                            <p className="text-sm text-blue-100">Utilisateurs actifs</p>
                                        </div>
                                        <div className="flex -space-x-2">
                                            <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-blue-600"></div>
                                            <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-blue-600"></div>
                                            <div className="w-8 h-8 bg-pink-400 rounded-full border-2 border-blue-600"></div>
                                            <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-blue-600 flex items-center justify-center">
                                                <FaUsers className="text-white text-xs" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pour les vendeurs */}
                            {formData.userType === 'seller' && (
                                <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 text-white shadow-xl">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <FaStore className="text-yellow-300" />
                                        Avantages vendeurs
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3">
                                            <FaHandshake className="text-green-300" />
                                            <span>Commission réduite les 3 premiers mois</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaCheckCircle className="text-green-300" />
                                            <span>Support dédié 7j/7</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaChartLine className="text-green-300" />
                                            <span>Analytics de vente détaillées</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <FaShieldAlt className="text-green-300" />
                                            <span>Protection contre les fraudes</span>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            {/* Garantie */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                            <FaShieldAlt className="text-blue-600 text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">Garantie Laliquidation</h4>
                                        <p className="text-gray-600 text-sm">
                                            Votre satisfaction est notre priorité. Nous offrons une protection complète sur tous les achats.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;