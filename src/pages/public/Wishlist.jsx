// src/pages/public/Wishlist.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaTrash, FaEye } from 'react-icons/fa';

const Wishlist = () => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([
        {
            id: 2,
            title: "Samsung Galaxy S23 Ultra 512GB - Neuf sous blister",
            price: 5200,
            originalPrice: 6000,
            discount: 15,
            image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
            seller: "MobileExpert",
            rating: 4.7,
            stock: "En stock",
            addedDate: "2024-01-20"
        },
        {
            id: 3,
            title: "iPad Pro 12.9 M2 128GB - Parfait état",
            price: 6800,
            originalPrice: 8500,
            discount: 20,
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
            seller: "AppleStore",
            rating: 4.9,
            stock: "Derniers articles",
            addedDate: "2024-01-18"
        }
    ]);

    const removeFromWishlist = (id) => {
        setFavorites(favorites.filter(item => item.id !== id));
        // Notification discrète
        const toast = document.createElement('div');
        toast.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out';
        toast.textContent = 'Produit retiré des favoris';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    };

    const handleAddToCart = (item) => {
        // Récupérer le panier existant
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
        
        // Vérifier si le produit existe déjà
        const existingItem = existingCart.find(i => i.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            existingCart.push({
                id: item.id,
                name: item.title,
                price: item.price,
                quantity: 1,
                image: item.image,
                stock: item.stock
            });
        }
        
        // Sauvegarder dans localStorage
        localStorage.setItem('cart', JSON.stringify(existingCart));
        
        // Notification de succès
        const toast = document.createElement('div');
        toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out';
        toast.textContent = `${item.title} a été ajouté au panier`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);

        // Rediriger vers le panier après un court délai
        setTimeout(() => {
            navigate('/cart');
        }, 1500);
    };

    const handleAddAllToCart = () => {
        if (favorites.length === 0) return;
        
        // Récupérer le panier existant
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
        
        // Ajouter tous les favoris
        favorites.forEach(item => {
            const existingItem = existingCart.find(i => i.id === item.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                existingCart.push({
                    id: item.id,
                    name: item.title,
                    price: item.price,
                    quantity: 1,
                    image: item.image,
                    stock: item.stock
                });
            }
        });
        
        // Sauvegarder dans localStorage
        localStorage.setItem('cart', JSON.stringify(existingCart));
        
        // Notification de succès
        const toast = document.createElement('div');
        toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out';
        toast.textContent = `${favorites.length} produit(s) ajouté(s) au panier`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
        
        // Rediriger vers le panier après un délai
        setTimeout(() => {
            navigate('/cart');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Mes favoris</h1>
                    <p className="text-gray-600">
                        {favorites.length} produit{favorites.length > 1 ? 's' : ''} sauvegardé{favorites.length > 1 ? 's' : ''}
                    </p>
                </div>

                {favorites.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                            <FaHeart className="text-gray-400 text-3xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Votre liste de favoris est vide</h2>
                        <p className="text-gray-600 mb-8">Ajoutez des produits que vous aimez pour les retrouver facilement ici.</p>
                        <Link
                            to="/"
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Découvrir des produits
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-4">
                            {favorites.map((item) => (
                                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="relative flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full sm:w-48 h-48 object-cover rounded-lg"
                                            />
                                            {item.discount && (
                                                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                    -{item.discount}%
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                                                        <Link to={`/video/${item.id}`} className="hover:text-blue-600">
                                                            {item.title}
                                                        </Link>
                                                    </h3>
                                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                                        <span className="flex items-center gap-1">
                                                            <FaHeart className="text-red-500" />
                                                            {item.rating}/5
                                                        </span>
                                                        <span>{item.seller}</span>
                                                        <span className={`px-2 py-1 rounded-full text-xs ${item.stock === 'En stock' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                            {item.stock}
                                                        </span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => removeFromWishlist(item.id)}
                                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                                    title="Retirer des favoris"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <div>
                                                    <div className="text-2xl font-bold text-gray-900">{item.price.toLocaleString()} DH</div>
                                                    {item.originalPrice && (
                                                        <div className="text-sm text-gray-500 line-through">
                                                            {item.originalPrice.toLocaleString()} DH
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex gap-2">
                                                    <button 
                                                        onClick={() => handleAddToCart(item)}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                                                    >
                                                        <FaShoppingCart />
                                                        Ajouter au panier
                                                    </button>
                                                    <Link
                                                        to={`/video/${item.id}`}
                                                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                                                    >
                                                        <FaEye />
                                                        Voir
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                                <h3 className="font-semibold text-gray-900 text-lg mb-4">Résumé</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Total des produits</span>
                                        <span>{favorites.length}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Articles en stock</span>
                                        <span>{favorites.filter(f => f.stock === 'En stock').length}</span>
                                    </div>
                                    <div className="pt-3 border-t">
                                        <button 
                                            onClick={handleAddAllToCart}
                                            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <FaShoppingCart />
                                            Ajouter tout au panier
                                        </button>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <p className="mb-2">
                                        <span className="font-medium">Ajouté le plus récent:</span> {new Date(Math.max(...favorites.map(f => new Date(f.addedDate)))).toLocaleDateString('fr-FR')}
                                    </p>
                                    <p>Les produits peuvent changer de prix ou devenir indisponibles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
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

export default Wishlist;