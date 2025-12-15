// src/components/shared/NotificationDropdown.jsx
import React, { useState } from 'react';

const NotificationDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [notifications] = useState([
        {
            id: 1,
            type: 'new_video',
            message: 'Nouvelle vidéo dans Électronique',
            time: '5 min',
            read: false
        },
        {
            id: 2,
            type: 'price_drop',
            message: 'Prix réduit sur iPhone 13',
            time: '1 h',
            read: false
        },
        {
            id: 3,
            type: 'new_message',
            message: 'Nouveau message de Ahmed',
            time: '2 h',
            read: true
        }
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
                <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 14.5A2.5 2.5 0 0011 12V5a4 4 0 10-8 0v7a2.5 2.5 0 002.5 2.5z" />
                </svg>

                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {unreadCount}
                    </span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            Tout marquer comme lu
                        </button>
                    </div>

                    {/* Notifications list */}
                    <div className="max-h-96 overflow-y-auto">
                        {notifications.length > 0 ? (
                            notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-blue-50' : ''
                                        }`}
                                >
                                    <div className="flex items-start space-x-3">
                                        <div className={`w-2 h-2 rounded-full mt-2 ${notification.read ? 'bg-gray-300' : 'bg-blue-500'
                                            }`}></div>
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-800">{notification.message}</p>
                                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-8 text-center">
                                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5z" />
                                </svg>
                                <p className="text-gray-500 text-sm">Aucune notification</p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-3 border-t border-gray-200">
                        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-2">
                            Voir toutes les notifications
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;