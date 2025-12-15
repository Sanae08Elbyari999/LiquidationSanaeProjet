// src/pages/public/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

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
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-2xl">L</span>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Rejoignez Laliquidation</h1>
                    <p className="text-gray-600 mt-2">
                        La première plateforme marocaine de vente par vidéo
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Formulaire */}
                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Type d'utilisateur */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Je souhaite :
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {[
                                            { value: 'buyer', label: 'Acheter', icon: '🛒' },
                                            { value: 'seller', label: 'Vendre', icon: '📹' },
                                            { value: 'affiliate', label: 'Devenir affilié', icon: '📊' }
                                        ].map((type) => (
                                            <label
                                                key={type.value}
                                                className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${formData.userType === type.value
                                                    ? 'border-blue-500 bg-blue-50'
                                                    : 'border-gray-300'
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="userType"
                                                    value={type.value}
                                                    checked={formData.userType === type.value}
                                                    onChange={handleChange}
                                                    className="sr-only"
                                                />
                                                <div className="flex w-full items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="text-2xl mr-3">{type.icon}</div>
                                                        <div className="text-sm">
                                                            <div className="font-medium text-gray-900">{type.label}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Informations personnelles */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                            Prénom
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                            Nom
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Adresse email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Numéro de téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="+212 6 XX XX XX XX"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Mot de passe
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                            Confirmer le mot de passe
                                        </label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="acceptTerms"
                                        name="acceptTerms"
                                        type="checkbox"
                                        checked={formData.acceptTerms}
                                        onChange={handleChange}
                                        required
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-900">
                                        J'accepte les{' '}
                                        <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                                            conditions d'utilisation
                                        </Link>{' '}
                                        et la{' '}
                                        <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                                            politique de confidentialité
                                        </Link>
                                    </label>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    disabled={isLoading || !formData.acceptTerms}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="loader-spinner w-4 h-4 border-white"></div>
                                            <span>Création du compte...</span>
                                        </div>
                                    ) : (
                                        'Créer mon compte'
                                    )}
                                </Button>

                                <div className="text-center">
                                    <p className="text-sm text-gray-600">
                                        Déjà un compte ?{' '}
                                        <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                                            Se connecter
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>

                        {/* Informations côté */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white">
                            <div className="h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-6">Pourquoi nous rejoindre ?</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-lg">🎥</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Vendez par vidéo</h4>
                                            <p className="text-blue-100 text-sm">
                                                Montrez vos produits en action avec des vidéos courtes et engageantes
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-lg">🛡️</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Paiement sécurisé</h4>
                                            <p className="text-blue-100 text-sm">
                                                Notre système de médiation protège acheteurs et vendeurs
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-lg">📧</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Email professionnel</h4>
                                            <p className="text-blue-100 text-sm">
                                                Obtenez une adresse email @laliquidation.com pour votre activité
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-lg">💰</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Devenez affilié</h4>
                                            <p className="text-blue-100 text-sm">
                                                Gagnez des commissions en promouvant les produits des autres vendeurs
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
                                    <p className="text-sm text-blue-100">
                                        <strong>Plus de 50,000</strong> utilisaires nous font déjà confiance
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

export default Register;