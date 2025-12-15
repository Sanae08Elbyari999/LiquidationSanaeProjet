// src/pages/public/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
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

        // Simulation de connexion
        setTimeout(() => {
            setIsLoading(false);
            alert('Fonctionnalité de connexion à implémenter');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">L</span>
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                    Connectez-vous à votre compte
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Ou{' '}
                    <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                        créez un nouveau compte
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Adresse email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="votre@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mot de passe
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Votre mot de passe"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    name="rememberMe"
                                    type="checkbox"
                                    checked={formData.rememberMe}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                                    Se souvenir de moi
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Mot de passe oublié ?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="loader-spinner w-4 h-4 border-white"></div>
                                        <span>Connexion...</span>
                                    </div>
                                ) : (
                                    'Se connecter'
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Se connecter avec Google</span>
                                <span>Google</span>
                            </button>

                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Se connecter avec Facebook</span>
                                <span>Facebook</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 bg-blue-50 rounded-lg p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <span className="text-blue-400">💡</span>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-blue-800">
                                    Nouveau sur Laliquidation ?
                                </h3>
                                <div className="mt-2 text-sm text-blue-700">
                                    <p>
                                        Créez un compte pour commencer à vendre vos produits en vidéo ou devenir affilié.
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <Link
                                        to="/register"
                                        className="text-sm font-medium text-blue-800 hover:text-blue-900"
                                    >
                                        Créer un compte <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
