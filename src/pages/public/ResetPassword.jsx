// src/pages/public/ResetPassword.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaLock, FaArrowLeft, FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
    const navigate = useNavigate();
    const { token } = useParams(); // Pour récupérer le token de l'URL
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Validation en temps réel
        if (name === 'password') {
            if (value.length < 8) {
                setErrors(prev => ({ ...prev, password: 'Le mot de passe doit contenir au moins 8 caractères' }));
            } else {
                setErrors(prev => ({ ...prev, password: '' }));
            }
        }
        
        if (name === 'confirmPassword' || (name === 'password' && formData.confirmPassword)) {
            const confirmValue = name === 'confirmPassword' ? value : formData.confirmPassword;
            if (confirmValue && confirmValue !== (name === 'password' ? value : formData.password)) {
                setErrors(prev => ({ ...prev, confirmPassword: 'Les mots de passe ne correspondent pas' }));
            } else {
                setErrors(prev => ({ ...prev, confirmPassword: '' }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation finale
        if (formData.password.length < 8) {
            setErrors(prev => ({ ...prev, password: 'Le mot de passe doit contenir au moins 8 caractères' }));
            return;
        }
        
        if (formData.password !== formData.confirmPassword) {
            setErrors(prev => ({ ...prev, confirmPassword: 'Les mots de passe ne correspondent pas' }));
            return;
        }
        
        setIsLoading(true);

        // Simulation de réinitialisation
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            
            // Notification
            const toast = document.createElement('div');
            toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out';
            toast.textContent = 'Mot de passe modifié avec succès !';
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
            
            // Redirection après 2 secondes
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 md:py-12 flex items-center justify-center">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="w-full max-w-md">
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 text-center">
                                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <FaCheckCircle className="text-green-500 text-3xl" />
                                </div>
                                
                                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                                    Mot de passe modifié !
                                </h1>
                                
                                <p className="text-gray-600 mb-6">
                                    Votre mot de passe a été réinitialisé avec succès.
                                </p>
                                
                                <p className="text-sm text-gray-500">
                                    Vous allez être redirigé vers la page de connexion...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

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
                                        <FaLock className="text-blue-600 text-3xl" />
                                    </div>
                                </div>
                                
                                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                    Nouveau mot de passe
                                </h1>
                                
                                <p className="text-gray-600">
                                    Choisissez un nouveau mot de passe sécurisé
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Nouveau mot de passe */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nouveau mot de passe
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                            <FaLock />
                                        </div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all ${
                                                errors.password ? 'border-red-500' : 'border-gray-300'
                                            }`}
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
                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                    )}
                                </div>

                                {/* Confirmation */}
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirmer le mot de passe
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                            <FaLock />
                                        </div>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all ${
                                                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                                    )}
                                </div>

                                {/* Critères de sécurité */}
                                <div className="bg-blue-50 rounded-lg p-3">
                                    <p className="text-xs font-medium text-blue-700 mb-2">Votre mot de passe doit :</p>
                                    <ul className="space-y-1">
                                        <li className="flex items-center gap-2 text-xs text-blue-600">
                                            <span className={`w-1.5 h-1.5 rounded-full ${formData.password.length >= 8 ? 'bg-green-500' : 'bg-blue-300'}`}></span>
                                            Contenir au moins 8 caractères
                                        </li>
                                        <li className="flex items-center gap-2 text-xs text-blue-600">
                                            <span className={`w-1.5 h-1.5 rounded-full ${/[A-Z]/.test(formData.password) ? 'bg-green-500' : 'bg-blue-300'}`}></span>
                                            Contenir une majuscule
                                        </li>
                                        <li className="flex items-center gap-2 text-xs text-blue-600">
                                            <span className={`w-1.5 h-1.5 rounded-full ${/[0-9]/.test(formData.password) ? 'bg-green-500' : 'bg-blue-300'}`}></span>
                                            Contenir un chiffre
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading || formData.password !== formData.confirmPassword || formData.password.length < 8}
                                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Réinitialisation...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaLock />
                                            <span>Réinitialiser le mot de passe</span>
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Rappel */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 text-center">
                                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                                        Retour à la connexion
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

export default ResetPassword;