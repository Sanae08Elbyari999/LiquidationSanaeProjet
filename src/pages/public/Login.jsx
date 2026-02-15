// src/pages/public/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ajoutez useNavigate ici
import Button from '../../components/ui/Button';
import {
    FaEnvelope,
    FaLock,
    FaSignInAlt,
    FaGoogle,
    FaFacebook,
    FaKey,
    FaShieldAlt,
    FaEye,
    FaEyeSlash,
} from 'react-icons/fa';

const Login = () => {
    const navigate = useNavigate(); // Ajoutez cette ligne
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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

        // Simulation de connexion
        setTimeout(() => {
            setIsLoading(false);
            
            // Simuler une connexion réussie
            // Dans une vraie application, vous vérifieriez les credentials avec votre backend
            if (formData.email && formData.password) {
                // Sauvegarder l'état de connexion (optionnel)
                localStorage.setItem('isLoggedIn', 'true');
                if (formData.rememberMe) {
                    localStorage.setItem('rememberedEmail', formData.email);
                }
                
                // Notification de succès
                const toast = document.createElement('div');
                toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out';
                toast.textContent = 'Connexion réussie !';
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3000);
                
                // Redirection vers la page d'accueil
                navigate('/');
            } else {
                // Notification d'erreur
                const toast = document.createElement('div');
                toast.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out';
                toast.textContent = 'Email ou mot de passe incorrect';
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3000);
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 md:py-12 flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    {/* Carte de connexion centrée avec largeur légèrement réduite */}
                    <div className="w-full max-w-xl">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
                            {/* En-tête */}
                            <div className="text-center mb-8">
                                <div className="flex justify-center mb-6">
                                    <div className="relative">
                                        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                            <FaSignInAlt className="text-white text-3xl" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                                            <FaShieldAlt className="text-white text-sm" />
                                        </div>
                                    </div>
                                </div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Laliquidation</span>
                                </h1>
                                <p className="text-gray-600">
                                    Connectez-vous à votre compte
                                </p>
                            </div>

                            {/* Formulaire */}
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        <div className="flex items-center gap-2">
                                            <FaEnvelope className="text-blue-500" />
                                            Adresse email
                                        </div>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                            <FaEnvelope />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            placeholder="votre@email.com"
                                        />
                                    </div>
                                </div>

                                {/* Mot de passe */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        <div className="flex items-center gap-2">
                                            <FaLock className="text-blue-500" />
                                            Mot de passe
                                        </div>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                            <FaLock />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="current-password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>

                                {/* Options */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="rememberMe"
                                            name="rememberMe"
                                            type="checkbox"
                                            checked={formData.rememberMe}
                                            onChange={handleChange}
                                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                                            Se souvenir de moi
                                        </label>
                                    </div>

                                    <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                        <div className="flex items-center gap-1">
                                            <FaKey className="text-sm" />
                                            Mot de passe oublié ?
                                        </div>
                                    </Link>
                                </div>

                                {/* Bouton de connexion */}
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full py-3.5 text-lg font-semibold rounded-xl"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center space-x-3">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Connexion...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center space-x-2">
                                            <FaSignInAlt />
                                            <span>Se connecter</span>
                                        </div>
                                    )}
                                </Button>

                                {/* Séparateur */}
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-3 bg-white text-gray-500 font-medium">Ou continuer avec</span>
                                    </div>
                                </div>

                                {/* Connexion sociale */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all hover:shadow-sm"
                                    >
                                        <FaGoogle className="text-red-500" />
                                        <span className="font-medium text-gray-700">Google</span>
                                    </button>

                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all hover:shadow-sm"
                                    >
                                        <FaFacebook className="text-blue-600" />
                                        <span className="font-medium text-gray-700">Facebook</span>
                                    </button>
                                </div>

                                {/* Lien d'inscription */}
                                <div className="text-center pt-4 border-t border-gray-200">
                                    <p className="text-gray-600">
                                        Nouveau sur Laliquidation ?{' '}
                                        <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                                            Créer un compte
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles pour les animations des notifications */}
            <style jsx>{`
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translateY(-20px); }
                    10% { opacity: 1; transform: translateY(0); }
                    90% { opacity: 1; transform: translateY(0); }
                    100% { opacity: 0; transform: translateY(-20px); }
                }
                .animate-fade-in-out {
                    animation: fadeInOut 3s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Login;