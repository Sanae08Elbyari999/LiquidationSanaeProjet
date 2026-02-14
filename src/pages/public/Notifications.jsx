import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaCheck, FaTrash, FaEnvelope, FaTruck, FaTag, FaCheckCircle } from 'react-icons/fa';

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Votre commande a été expédiée",
            message: "Votre iPhone 13 Pro Max est en route vers votre adresse. Numéro de suivi: TRK-789456123",
            time: "Il y a 2 heures",
            read: false,
            type: "shipping",
            icon: <FaTruck className="text-blue-500" />
        },
        {
            id: 2,
            title: "Réduction spéciale",
            message: "20% de réduction sur tous les smartphones cette semaine seulement!",
            time: "Il y a 1 jour",
            read: false,
            type: "promotion",
            icon: <FaTag className="text-red-500" />
        },
        {
            id: 3,
            title: "Votre offre a été acceptée",
            message: "Le vendeur a accepté votre offre de 1200 DH pour les AirPods Pro",
            time: "Il y a 2 jours",
            read: true,
            type: "offer",
            icon: <FaCheckCircle className="text-green-500" />
        },
        {
            id: 4,
            title: "Nouveau message",
            message: "Le vendeur TechStore a répondu à votre question concernant l'iPhone",
            time: "Il y a 3 jours",
            read: true,
            type: "message",
            icon: <FaEnvelope className="text-purple-500" />
        }
    ]);

    const markAsRead = (id) => {
        setNotifications(notifications.map(notif =>
            notif.id === id ? { ...notif, read: true } : notif
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(notif => ({ ...notif, read: true })));
    };

    const deleteNotification = (id) => {
        setNotifications(notifications.filter(notif => notif.id !== id));
    };

    const deleteAllRead = () => {
        setNotifications(notifications.filter(notif => !notif.read));
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-3">
                        <button
                            onClick={markAllAsRead}
                            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2"
                        >
                            <FaCheck />
                            Tout marquer comme lu
                        </button>
                        <button
                            onClick={deleteAllRead}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                        >
                            <FaTrash />
                            Supprimer les lues
                        </button>
                    </div>
                </div>

                {notifications.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                            <FaBell className="text-gray-400 text-3xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Aucune notification</h2>
                        <p className="text-gray-600 mb-8">Vous n'avez pas encore de notifications.</p>
                        <Link
                            to="/"
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Parcourir les produits
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`p-6 border-b border-gray-100 last:border-b-0 ${!notification.read ? 'bg-blue-50' : ''}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${!notification.read ? 'bg-blue-100' : 'bg-gray-100'}`}>
                                            {notification.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                                                    {notification.title}
                                                </h3>
                                                <p className="text-gray-600 mb-2">{notification.message}</p>
                                                <span className="text-sm text-gray-500">{notification.time}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                {!notification.read && (
                                                    <button
                                                        onClick={() => markAsRead(notification.id)}
                                                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
                                                        title="Marquer comme lu"
                                                    >
                                                        <FaCheck />
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => deleteNotification(notification.id)}
                                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                                    title="Supprimer"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                            <FaBell className="text-white text-2xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 text-lg mb-1">Gérer vos préférences de notification</h3>
                            <p className="text-gray-600">
                                Choisissez les types de notifications que vous souhaitez recevoir par email ou par push.
                            </p>
                        </div>
                        <div className="ml-auto">
                            <Link
                                to="/settings/notifications"
                                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Paramétrer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;