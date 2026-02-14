// src/pages/user/Channel.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaVideo,
    FaEye,
    FaThumbsUp,
    FaShoppingCart,
    FaCalendarAlt,
    FaPlus,
    FaChartLine,
    FaBox,
    FaTruck,
    FaCheckCircle,
    FaExclamationTriangle,
    FaDollarSign,
    FaUsers,
    FaStar,
    FaEdit,
    FaTrash
} from 'react-icons/fa';

const Channel = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const channelData = {
        name: "TechStore Maroc",
        description: "Spécialiste en produits électroniques reconditionnés. Tous nos produits sont testés et garantis 6 mois.",
        subscriberCount: 1240,
        videoCount: 23,
        rating: 4.8,
        joinedDate: "Janvier 2023",
        totalSales: 45000,
        monthlyRevenue: 15000,
        conversionRate: "12.5%"
    };

    // Statistiques du dashboard
    const stats = [
        {
            title: "Ventes totales",
            value: "45,000 DH",
            change: "+12%",
            icon: <FaDollarSign className="text-green-500" />,
            bgColor: "bg-green-50",
            borderColor: "border-green-200"
        },
        {
            title: "Commandes en cours",
            value: "8",
            change: "+2",
            icon: <FaBox className="text-blue-500" />,
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            title: "À expédier",
            value: "3",
            change: "-1",
            icon: <FaTruck className="text-orange-500" />,
            bgColor: "bg-orange-50",
            borderColor: "border-orange-200"
        },
        {
            title: "Livrées",
            value: "42",
            change: "+15%",
            icon: <FaCheckCircle className="text-purple-500" />,
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200"
        },
        {
            title: "Abonnés",
            value: "1,240",
            change: "+58",
            icon: <FaUsers className="text-indigo-500" />,
            bgColor: "bg-indigo-50",
            borderColor: "border-indigo-200"
        },
        {
            title: "Note moyenne",
            value: "4.8/5",
            change: "★",
            icon: <FaStar className="text-yellow-500" />,
            bgColor: "bg-yellow-50",
            borderColor: "border-yellow-200"
        }
    ];

    // Commandes récentes
    const recentOrders = [
        {
            id: "CMD-789456",
            customer: "Mohammed A.",
            product: "iPhone 13 Pro Max",
            amount: 4500,
            status: "en-cours",
            statusText: "En cours",
            date: "2024-01-20",
            color: "bg-blue-100 text-blue-800"
        },
        {
            id: "CMD-789457",
            customer: "Fatima Z.",
            product: "AirPods Pro",
            amount: 1200,
            status: "a-expedier",
            statusText: "À expédier",
            date: "2024-01-19",
            color: "bg-orange-100 text-orange-800"
        },
        {
            id: "CMD-789458",
            customer: "Karim B.",
            product: "MacBook Pro M2",
            amount: 9800,
            status: "livree",
            statusText: "Livrée",
            date: "2024-01-18",
            color: "bg-green-100 text-green-800"
        },
        {
            id: "CMD-789459",
            customer: "Amina C.",
            product: "iPad Pro 12.9",
            amount: 6800,
            status: "annulee",
            statusText: "Annulée",
            date: "2024-01-17",
            color: "bg-red-100 text-red-800"
        }
    ];

    // Produits les plus vendus
    const topProducts = [
        {
            id: 1,
            name: "iPhone 13 Pro Max 256GB",
            sales: 15,
            revenue: 67500,
            stock: 8
        },
        {
            id: 2,
            name: "AirPods Pro 2ème génération",
            sales: 12,
            revenue: 14400,
            stock: 15
        },
        {
            id: 3,
            name: "MacBook Pro M2 2023",
            sales: 8,
            revenue: 78400,
            stock: 3
        }
    ];

    // Vidéos produits
    const videos = [
        {
            id: 1,
            title: "iPhone 13 Pro Max 256GB - Comme neuf",
            thumbnail: "https://images.unsplash.com/photo-1632661674596-df8be070a6c5?w=400",
            price: 4500,
            views: 1240,
            likes: 245,
            uploadDate: "Il y a 2 heures",
            sales: 15
        },
        {
            id: 2,
            title: "MacBook Pro M2 2023 - 16GB",
            thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
            price: 9800,
            views: 890,
            likes: 187,
            uploadDate: "Il y a 1 jour",
            sales: 8
        }
    ];

    const getStatusIcon = (status) => {
        switch (status) {
            case 'en-cours': return <FaBox className="text-blue-500" />;
            case 'a-expedier': return <FaTruck className="text-orange-500" />;
            case 'livree': return <FaCheckCircle className="text-green-500" />;
            case 'annulee': return <FaExclamationTriangle className="text-red-500" />;
            default: return <FaBox className="text-gray-500" />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Navigation des onglets */}
                <div className="flex border-b border-gray-200 mb-6">
                    <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`px-6 py-3 font-medium ${activeTab === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        <FaChartLine className="inline mr-2" />
                        Tableau de bord
                    </button>
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`px-6 py-3 font-medium ${activeTab === 'products' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        <FaBox className="inline mr-2" />
                        Mes produits ({videos.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`px-6 py-3 font-medium ${activeTab === 'orders' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        <FaShoppingCart className="inline mr-2" />
                        Commandes ({recentOrders.length})
                    </button>
                </div>

                {/* Contenu selon l'onglet actif */}
                {activeTab === 'dashboard' && (
                    <>
                        {/* Statistiques */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`${stat.bgColor} border ${stat.borderColor} rounded-xl p-6 hover:shadow-md transition-shadow`}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-white rounded-lg shadow-sm">
                                            {stat.icon}
                                        </div>
                                        <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-red-600' : 'text-yellow-600'}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                                    <p className="text-gray-600">{stat.title}</p>
                                </div>
                            ))}
                        </div>

                        {/* Graphiques et commandes récentes */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            {/* Commandes récentes */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">Commandes récentes</h3>
                                    <Link to="/profile/orders" className="text-blue-600 hover:text-blue-800 text-sm">
                                        Voir tout →
                                    </Link>
                                </div>
                                <div className="space-y-4">
                                    {recentOrders.map((order) => (
                                        <div key={order.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-gray-100 rounded-lg">
                                                    {getStatusIcon(order.status)}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{order.id}</p>
                                                    <p className="text-sm text-gray-600">{order.customer}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-gray-900">{order.amount.toLocaleString()} DH</p>
                                                <span className={`text-xs px-2 py-1 rounded-full ${order.color}`}>
                                                    {order.statusText}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Produits les plus vendus */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Produits les plus vendus</h3>
                                <div className="space-y-4">
                                    {topProducts.map((product) => (
                                        <div key={product.id} className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900">{product.name}</p>
                                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                                    <span>{product.sales} ventes</span>
                                                    <span>{product.stock} en stock</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-gray-900">{product.revenue.toLocaleString()} DH</p>
                                                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                                                    <div
                                                        className="h-full bg-green-500"
                                                        style={{ width: `${(product.sales / 20) * 100}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Aperçu rapide des produits */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Derniers produits ajoutés</h3>
                                <Link to="/profile/add-product" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                                    <FaPlus />
                                    Ajouter
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {videos.slice(0, 3).map((video) => (
                                    <div key={video.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="relative">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-40 object-cover"
                                            />
                                            <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                                {video.price.toLocaleString()} DH
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">{video.title}</h4>
                                            <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                                                <span>{video.views} vues</span>
                                                <span>{video.sales} ventes</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="flex-1 py-2 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">
                                                    Voir les ventes
                                                </button>
                                                <Link
                                                    to={`/video/${video.id}`}
                                                    className="px-3 py-2 border border-gray-300 text-gray-700 text-xs rounded hover:bg-gray-50"
                                                >
                                                    Voir
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'products' && (
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Mes produits ({videos.length})</h2>
                            <div className="flex gap-3">
                                <select className="px-4 py-2 border border-gray-300 rounded-lg">
                                    <option>Tous les produits</option>
                                    <option>En stock</option>
                                    <option>Rupture de stock</option>
                                </select>
                                <Link
                                    to="/profile/add-product"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    <FaPlus />
                                    Nouveau produit
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {videos.map((video) => (
                                <div key={video.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="relative">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute top-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                                            {video.price.toLocaleString()} DH
                                        </div>
                                        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                            {video.sales} ventes
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
                                            <Link to={`/video/${video.id}`} className="hover:text-blue-600">
                                                {video.title}
                                            </Link>
                                        </h3>
                                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <FaEye className="text-gray-400" />
                                                    {video.views}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FaThumbsUp className="text-gray-400" />
                                                    {video.likes}
                                                </span>
                                            </div>
                                            <span>{video.uploadDate}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                                <FaShoppingCart className="inline mr-2" />
                                                Vendre
                                            </button>
                                            <div className="flex gap-1">
                                                <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                                                    <FaEdit />
                                                </button>
                                                <button className="px-3 py-2 border border-gray-300 text-red-600 rounded-lg hover:bg-red-50">
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'orders' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">Commandes ({recentOrders.length})</h2>
                            <p className="text-gray-600 mt-2">Gérez toutes les commandes de vos produits</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Commande</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Produit</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Montant</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {recentOrders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4">
                                                <span className="font-medium text-gray-900">{order.id}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-900">{order.customer}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-600">{order.product}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="font-bold text-gray-900">{order.amount.toLocaleString()} DH</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-xs px-3 py-1 rounded-full ${order.color}`}>
                                                    {order.statusText}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-gray-600">{order.date}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                                                        Détails
                                                    </button>
                                                    {order.status === 'a-expedier' && (
                                                        <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">
                                                            Expédier
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Channel;