import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaTrash, FaEye, FaShareAlt } from 'react-icons/fa';

const Wishlist = () => {
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
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8">
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
                                        <div className="relative">
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
                                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
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
                                        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                            <FaShoppingCart />
                                            Ajouter tout au panier
                                        </button>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500">
                                    <p className="mb-2">Ajouté le plus récent: {new Date(Math.max(...favorites.map(f => new Date(f.addedDate)))).toLocaleDateString('fr-FR')}</p>
                                    <p>Les produits peuvent changer de prix ou devenir indisponibles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;