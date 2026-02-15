// src/pages/public/ForgotPassword.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaArrowLeft, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulation d'envoi d'email
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            
            // Afficher une notification
            const toast = document.createElement('div');
            toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out';
            toast.textContent = 'Email de récupération envoyé !';
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 md:py-12 flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="w-full max-w-md">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
                            {/* Bouton retour */}
                            <Link 
                                to="/login" 
                                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
                            >
                                <FaArrowLeft className="text-sm" />
                                Retour à la connexion
                            </Link>

                            {/* En-tête */}
                            <div className="text-center mb-8">
                                <div className="flex justify-center mb-6">
                                    <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                                        {isSubmitted ? (
                                            <FaCheckCircle className="text-green-500 text-3xl" />
                                        ) : (
                                            <FaEnvelope className="text-blue-600 text-3xl" />
                                        )}
                                    </div>
                                </div>
                                
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                    {isSubmitted ? 'Email envoyé !' : 'Mot de passe oublié ?'}
                                </h1>
                                
                                <p className="text-gray-600">
                                    {isSubmitted 
                                        ? `Un email de récupération a été envoyé à ${email}`
                                        : 'Entrez votre adresse email pour recevoir un lien de réinitialisation'
                                    }
                                </p>
                            </div>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
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
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                placeholder="votre@email.com"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Envoi en cours...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane />
                                                <span>Envoyer le lien</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className="space-y-4">
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-700">
                                        <p className="font-medium mb-2">📧 Vérifiez votre boîte email</p>
                                        <p>Nous avons envoyé un lien de réinitialisation à l'adresse :</p>
                                        <p className="font-bold mt-2">{email}</p>
                                    </div>

                                    <p className="text-xs text-gray-500 text-center">
                                        Vous n'avez pas reçu l'email ? Vérifiez vos spams ou{' '}
                                        <button 
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            réessayez
                                        </button>
                                    </p>
                                </div>
                            )}

                            {/* Rappel */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 text-center">
                                    Vous vous souvenez de votre mot de passe ?{' '}
                                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                                        Se connecter
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles pour les animations */}
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

export default ForgotPassword;