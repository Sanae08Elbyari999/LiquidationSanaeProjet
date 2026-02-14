// src/pages/user/MesAchats.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaShoppingBag,
    FaTruck,
    FaCheckCircle,
    FaClock,
    FaStar,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaSearch,
    FaEye,
    FaWhatsapp,
    FaPhoneAlt,
    FaBoxOpen,
    FaShoppingCart
} from 'react-icons/fa';

const MesAchats = () => {
    const [filter, setFilter] = useState('all'); 
    const [searchTerm, setSearchTerm] = useState('');

    // Données mockées des achats
    const achats = [
        {
            id: 1,
            orderNumber: "CMD-2024-00123",
            product: {
                name: "iPhone 13 Pro Max 256GB",
                thumbnail: "https://images.unsplash.com/photo-1632661674596-618e45e56c53?w=300",
                price: 4500,
                seller: "TechStore Maroc"
            },
            date: "2024-01-15",
            status: "delivered", 
            deliveryDate: "2024-01-18",
            trackingNumber: "TRK789456123",
            quantity: 1,
            total: 4500,
            sellerContact: "+212 6 12 34 56 78",
            rating: 4,
            review: "Produit en excellent état, livraison rapide"
        },
        {
            id: 2,
            orderNumber: "CMD-2024-00124",
            product: {
                name: "Canapé en cuir véritable 3 places",
                thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300",
                price: 3200,
                seller: "MaisonModerne"
            },
            date: "2024-01-10",
            status: "pending",
            deliveryDate: "2024-01-25",
            trackingNumber: "TRK123456789",
            quantity: 1,
            total: 3200,
            sellerContact: "+212 6 98 76 54 32"
        },
        {
            id: 3,
            orderNumber: "CMD-2024-00125",
            product: {
                name: "MacBook Pro M2 2023 - 16GB",
                thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300",
                price: 8900,
                seller: "AppleStore"
            },
            date: "2024-01-05",
            status: "delivered",
            deliveryDate: "2024-01-08",
            trackingNumber: "TRK456123789",
            quantity: 1,
            total: 8900,
            sellerContact: "+212 6 55 44 33 22",
            rating: 5,
            review: "Parfait, comme neuf. Livraison express!"
        },
        {
            id: 4,
            orderNumber: "CMD-2024-00126",
            product: {
                name: "PlayStation 5 + 3 jeux",
                thumbnail: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=300",
                price: 4200,
                seller: "GameZone"
            },
            date: "2023-12-20",
            status: "cancelled",
            deliveryDate: null,
            trackingNumber: null,
            quantity: 1,
            total: 4200,
            sellerContact: "+212 6 77 88 99 00"
        }
    ];

    // Filtrer les achats
    const filteredAchats = achats.filter(achat => {
        const matchesSearch = achat.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            achat.orderNumber.toLowerCase().includes(searchTerm.toLowerCase());

        if (filter === 'all') return matchesSearch;
        if (filter === 'delivered') return matchesSearch && achat.status === 'delivered';
        if (filter === 'pending') return matchesSearch && achat.status === 'pending';
        if (filter === 'cancelled') return matchesSearch && achat.status === 'cancelled';
        return matchesSearch;
    });

    const getStatusInfo = (status) => {
        switch (status) {
            case 'delivered':
                return {
                    text: 'Livré',
                    color: 'bg-green-100 text-green-800',
                    icon: <FaCheckCircle className="text-green-500" />,
                    badge: 'success'
                };
            case 'pending':
                return {
                    text: 'En cours',
                    color: 'bg-yellow-100 text-yellow-800',
                    icon: <FaClock className="text-yellow-500" />,
                    badge: 'warning'
                };
            case 'cancelled':
                return {
                    text: 'Annulé',
                    color: 'bg-red-100 text-red-800',
                    icon: <FaBoxOpen className="text-red-500" />,
                    badge: 'error'
                };
            default:
                return {
                    text: 'Inconnu',
                    color: 'bg-gray-100 text-gray-800',
                    icon: <FaClock className="text-gray-500" />,
                    badge: 'default'
                };
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Contrôles de filtre */}
                <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-gray-200">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-xl font-bold text-gray-900">
                                Mes commandes ({filteredAchats.length})
                            </h2>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Recherche */}
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Rechercher une commande..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Filtres */}
                            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                                {[
                                    { value: 'all', label: 'Tous' },
                                    { value: 'delivered', label: 'Livrés' },
                                    { value: 'pending', label: 'En cours' },
                                    { value: 'cancelled', label: 'Annulés' }
                                ].map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => setFilter(option.value)}
                                        className={`px-4 py-2 rounded-md transition-colors ${filter === option.value ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-700 hover:text-blue-600'}`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Liste des achats */}
                {filteredAchats.length > 0 ? (
                    <div className="space-y-6">
                        {filteredAchats.map((achat) => {
                            const statusInfo = getStatusInfo(achat.status);

                            return (
                                <div key={achat.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                                    {/* En-tête de commande */}
                                    <div className="p-6 border-b border-gray-100">
                                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="font-bold text-gray-900">{achat.orderNumber}</div>
                                                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${statusInfo.color}`}>
                                                        {statusInfo.icon}
                                                        {statusInfo.text}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                                    <div className="flex items-center gap-2">
                                                        <FaCalendarAlt />
                                                        <span>Commandé le {formatDate(achat.date)}</span>
                                                    </div>
                                                    {achat.deliveryDate && (
                                                        <div className="flex items-center gap-2">
                                                            <FaTruck />
                                                            <span>Livré le {formatDate(achat.deliveryDate)}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-gray-900">{achat.total.toLocaleString()} DH</div>
                                                <div className="text-sm text-gray-600">Quantité: {achat.quantity}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Détails du produit */}
                                    <div className="p-6">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            {/* Image du produit */}
                                            <div className="md:w-1/4">
                                                <img
                                                    src={achat.product.thumbnail}
                                                    alt={achat.product.name}
                                                    className="w-full h-48 object-cover rounded-xl"
                                                />
                                            </div>

                                            {/* Infos produit */}
                                            <div className="md:w-2/4">
                                                <h3 className="font-bold text-gray-900 text-lg mb-2">
                                                    {achat.product.name}
                                                </h3>
                                                <div className="space-y-2 mb-4">
                                                    <div className="flex items-center gap-2 text-gray-700">
                                                        <FaShoppingCart />
                                                        <span className="font-medium">Vendeur:</span>
                                                        <span>{achat.product.seller}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-700">
                                                        <FaMapMarkerAlt />
                                                        <span className="font-medium">Contact:</span>
                                                        <span>{achat.sellerContact}</span>
                                                    </div>
                                                    {achat.trackingNumber && (
                                                        <div className="flex items-center gap-2 text-gray-700">
                                                            <FaTruck />
                                                            <span className="font-medium">N° de suivi:</span>
                                                            <span className="font-mono">{achat.trackingNumber}</span>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Avis */}
                                                {achat.rating && (
                                                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <div className="flex items-center gap-1">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <FaStar key={i} className={`text-sm ${i < achat.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                                                                ))}
                                                            </div>
                                                            <span className="font-medium">{achat.rating}/5</span>
                                                        </div>
                                                        <p className="text-gray-700 text-sm">{achat.review}</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Actions */}
                                            <div className="md:w-1/4">
                                                <div className="space-y-3">
                                                    {achat.status === 'delivered' && (
                                                        <>
                                                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                                                <FaStar />
                                                                Noter l'achat
                                                            </button>
                                                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                                                                <FaEye />
                                                                Voir le produit
                                                            </button>
                                                        </>
                                                    )}

                                                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                                                        <FaWhatsapp />
                                                        Contacter le vendeur
                                                    </button>

                                                    {achat.status === 'pending' && (
                                                        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                                                            <FaPhoneAlt />
                                                            Suivre la commande
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                        <div className="inline-flex flex-col items-center space-y-6 max-w-md mx-auto">
                            <FaBoxOpen className="text-6xl text-gray-300" />
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Aucun achat trouvé
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {searchTerm || filter !== 'all'
                                        ? "Aucune commande ne correspond à vos critères"
                                        : "Vous n'avez pas encore effectué d'achats"}
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Link
                                    to="/"
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    Parcourir les produits
                                </Link>
                                {(searchTerm || filter !== 'all') && (
                                    <button
                                        onClick={() => {
                                            setSearchTerm('');
                                            setFilter('all');
                                        }}
                                        className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                                    >
                                        Réinitialiser les filtres
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MesAchats;