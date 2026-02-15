// src/pages/public/OrderConfirmation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaShoppingBag, FaHome, FaPrint, FaEnvelope } from 'react-icons/fa';

const OrderConfirmation = () => {
    // Générer un numéro de commande aléatoire
    const orderNumber = 'CMD-' + Math.floor(100000 + Math.random() * 900000);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaCheckCircle className="text-green-500 text-4xl" />
                    </div>
                    
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        Commande confirmée !
                    </h1>
                    
                    <p className="text-gray-600 mb-6">
                        Merci pour votre commande. Un email de confirmation vous a été envoyé.
                    </p>

                    <div className="bg-blue-50 rounded-xl p-6 mb-8">
                        <p className="text-sm text-gray-600 mb-2">Numéro de commande</p>
                        <p className="text-2xl font-bold text-blue-600">{orderNumber}</p>
                    </div>

                    <div className="space-y-4 mb-8 text-left">
                        <div className="flex items-start gap-3">
                            <FaEnvelope className="text-blue-500 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Confirmation par email</h3>
                                <p className="text-sm text-gray-600">
                                    Vous recevrez un email avec tous les détails de votre commande.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <FaShoppingBag className="text-blue-500 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Suivi de commande</h3>
                                <p className="text-sm text-gray-600">
                                    Vous pouvez suivre votre commande dans "Mes achats".
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/profile/orders"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <FaShoppingBag />
                            Suivre ma commande
                        </Link>
                        <Link
                            to="/"
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                        >
                            <FaHome />
                            Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;