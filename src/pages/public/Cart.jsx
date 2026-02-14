import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaShoppingCart, FaArrowLeft, FaLock } from 'react-icons/fa';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Sumsung  galaxy 256GB",
            price: 4500,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
            stock: "En stock",
            delivery: "Livraison sous 24h"
        },
        {
            id: 2,
            name: "AirPods Pro 2ème génération",
            price: 1200,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400",
            stock: "En stock",
            delivery: "Livraison sous 48h"
        }
    ]);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingFee = 30;
    const total = subtotal + shippingFee;

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <p className="text-gray-600">
                        {cartItems.length} article{cartItems.length > 1 ? 's' : ''} dans votre panier
                    </p>
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                            <FaShoppingCart className="text-gray-400 text-3xl" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Votre panier est vide</h2>
                        <p className="text-gray-600 mb-8">Ajoutez des produits pour les acheter.</p>
                        <Link
                            to="/"
                            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Découvrir des produits
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="p-6 border-b border-gray-100 last:border-b-0">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full md:w-40 h-40 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 text-lg mb-2">
                                                            <Link to={`/video/${item.id}`} className="hover:text-blue-600">
                                                                {item.name}
                                                            </Link>
                                                        </h3>
                                                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                                            <span className={`px-2 py-1 rounded-full ${item.stock === 'En stock' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                                {item.stock}
                                                            </span>
                                                            <span>{item.delivery}</span>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>

                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center border border-gray-300 rounded-lg">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="px-3 py-2 text-gray-600 hover:text-gray-900"
                                                            >
                                                                <FaMinus />
                                                            </button>
                                                            <span className="px-4 py-2 border-x border-gray-300 min-w-12 text-center">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="px-3 py-2 text-gray-600 hover:text-gray-900"
                                                            >
                                                                <FaPlus />
                                                            </button>
                                                        </div>
                                                        <div className="text-2xl font-bold text-gray-900">
                                                            {(item.price * item.quantity).toLocaleString()} DH
                                                        </div>
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {item.price.toLocaleString()} DH × {item.quantity}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6">
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                                >
                                    <FaArrowLeft />
                                    Continuer mes achats
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                                <h3 className="font-semibold text-gray-900 text-lg mb-6">Résumé de la commande</h3>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Sous-total</span>
                                        <span className="font-semibold">{subtotal.toLocaleString()} DH</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Livraison</span>
                                        <span>{shippingFee.toLocaleString()} DH</span>
                                    </div>
                                    <div className="pt-4 border-t">
                                        <div className="flex justify-between text-gray-900 font-bold text-lg">
                                            <span>Total</span>
                                            <span>{total.toLocaleString()} DH</span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2">TVA incluse</p>
                                    </div>
                                </div>

                                <button className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 text-lg font-semibold mb-4">
                                    <FaLock />
                                    Procéder au paiement
                                </button>

                                <div className="text-sm text-gray-500 space-y-3">
                                    <p className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>Paiement 100% sécurisé</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>Livraison garantie</span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>Retour gratuit sous 30 jours</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;