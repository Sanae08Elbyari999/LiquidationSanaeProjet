// src/pages/public/Checkout.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    FaArrowLeft, 
    FaLock, 
    FaTruck, 
    FaCreditCard, 
    FaCheckCircle,
    FaMapMarkerAlt,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaCity,
    FaHome,
    FaCalendarAlt,
    FaCcVisa,
    FaCcMastercard,
    FaPaypal,
    FaShieldAlt,
    FaSpinner
} from 'react-icons/fa';

const Checkout = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card');
    
    // Données du panier (simulées)
    const cartItems = [
        {
            id: 1,
            name: "Sumsung galaxy 256GB",
            price: 4500,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400"
        },
        {
            id: 2,
            name: "AirPods Pro 2ème génération",
            price: 1200,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400"
        }
    ];

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shippingFee = 30;
    const total = subtotal + shippingFee;

    // États pour les formulaires
    const [shippingInfo, setShippingInfo] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: 'Maroc'
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo(prev => ({ ...prev, [name]: value }));
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleShippingSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        setStep(3);
    };

    const handlePlaceOrder = () => {
        setLoading(true);
        // Simuler le traitement de la commande
        setTimeout(() => {
            setLoading(false);
            navigate('/order-confirmation');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* En-tête */}
                <div className="mb-8">
                    <Link to="/cart" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4">
                        <FaArrowLeft />
                        Retour au panier
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Finaliser votre commande</h1>
                    <p className="text-gray-600">
                        {cartItems.length} article{cartItems.length > 1 ? 's' : ''} · Total: {total.toLocaleString()} DH
                    </p>
                </div>

                {/* Étapes */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center">
                        {[1, 2, 3].map((stepNumber) => (
                            <React.Fragment key={stepNumber}>
                                <div className={`flex flex-col items-center ${stepNumber <= step ? 'text-blue-600' : 'text-gray-400'}`}>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                        stepNumber < step ? 'bg-green-500 text-white' : 
                                        stepNumber === step ? 'bg-blue-600 text-white' : 'bg-gray-200'
                                    }`}>
                                        {stepNumber < step ? <FaCheckCircle /> : stepNumber}
                                    </div>
                                    <span className="text-sm mt-2">
                                        {stepNumber === 1 && 'Livraison'}
                                        {stepNumber === 2 && 'Paiement'}
                                        {stepNumber === 3 && 'Confirmation'}
                                    </span>
                                </div>
                                {stepNumber < 3 && (
                                    <div className={`w-20 h-1 mx-2 ${stepNumber < step ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne principale - Formulaire */}
                    <div className="lg:col-span-2">
                        {/* Étape 1: Livraison */}
                        {step === 1 && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <FaTruck className="text-blue-500" />
                                    Adresse de livraison
                                </h2>

                                <form onSubmit={handleShippingSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Nom complet *
                                            </label>
                                            <div className="relative">
                                                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={shippingInfo.fullName}
                                                    onChange={handleShippingChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Email *
                                            </label>
                                            <div className="relative">
                                                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={shippingInfo.email}
                                                    onChange={handleShippingChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Téléphone *
                                        </label>
                                        <div className="relative">
                                            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={shippingInfo.phone}
                                                onChange={handleShippingChange}
                                                required
                                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="+212 6 XX XX XX XX"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Adresse *
                                        </label>
                                        <div className="relative">
                                            <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                name="address"
                                                value={shippingInfo.address}
                                                onChange={handleShippingChange}
                                                required
                                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="123 Rue Mohammed V"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Ville *
                                            </label>
                                            <div className="relative">
                                                <FaCity className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={shippingInfo.city}
                                                    onChange={handleShippingChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="Casablanca"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Code postal
                                            </label>
                                            <input
                                                type="text"
                                                name="postalCode"
                                                value={shippingInfo.postalCode}
                                                onChange={handleShippingChange}
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="20000"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Pays
                                            </label>
                                            <select
                                                name="country"
                                                value={shippingInfo.country}
                                                onChange={handleShippingChange}
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option value="Maroc">Maroc</option>
                                                <option value="France">France</option>
                                                <option value="Espagne">Espagne</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t">
                                        <button
                                            type="submit"
                                            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                                        >
                                            Continuer vers le paiement
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Étape 2: Paiement */}
                        {step === 2 && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <FaCreditCard className="text-blue-500" />
                                    Méthode de paiement
                                </h2>

                                {/* Options de paiement */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('card')}
                                        className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-all ${
                                            paymentMethod === 'card' 
                                                ? 'border-blue-500 bg-blue-50' 
                                                : 'border-gray-200 hover:border-blue-300'
                                        }`}
                                    >
                                        <FaCreditCard className={`text-2xl ${paymentMethod === 'card' ? 'text-blue-500' : 'text-gray-400'}`} />
                                        <span className="font-medium">Carte bancaire</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('paypal')}
                                        className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-all ${
                                            paymentMethod === 'paypal' 
                                                ? 'border-blue-500 bg-blue-50' 
                                                : 'border-gray-200 hover:border-blue-300'
                                        }`}
                                    >
                                        <FaPaypal className={`text-2xl ${paymentMethod === 'paypal' ? 'text-blue-500' : 'text-gray-400'}`} />
                                        <span className="font-medium">PayPal</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setPaymentMethod('cash')}
                                        className={`p-4 border rounded-lg flex flex-col items-center gap-2 transition-all ${
                                            paymentMethod === 'cash' 
                                                ? 'border-blue-500 bg-blue-50' 
                                                : 'border-gray-200 hover:border-blue-300'
                                        }`}
                                    >
                                        <FaTruck className={`text-2xl ${paymentMethod === 'cash' ? 'text-blue-500' : 'text-gray-400'}`} />
                                        <span className="font-medium">Paiement à la livraison</span>
                                    </button>
                                </div>

                                {paymentMethod === 'card' && (
                                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Numéro de carte *
                                            </label>
                                            <div className="relative">
                                                <FaCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="cardNumber"
                                                    value={paymentInfo.cardNumber}
                                                    onChange={handlePaymentChange}
                                                    required
                                                    maxLength="19"
                                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="1234 5678 9012 3456"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Nom sur la carte *
                                            </label>
                                            <input
                                                type="text"
                                                name="cardName"
                                                value={paymentInfo.cardName}
                                                onChange={handlePaymentChange}
                                                required
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="JOHN DOE"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    Date d'expiration *
                                                </label>
                                                <div className="relative">
                                                    <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="expiryDate"
                                                        value={paymentInfo.expiryDate}
                                                        onChange={handlePaymentChange}
                                                        required
                                                        maxLength="5"
                                                        placeholder="MM/AA"
                                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                                    CVV *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="cvv"
                                                    value={paymentInfo.cvv}
                                                    onChange={handlePaymentChange}
                                                    required
                                                    maxLength="3"
                                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="123"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t flex justify-between">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                                            >
                                                Retour
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                                            >
                                                Continuer
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {paymentMethod === 'paypal' && (
                                    <div className="text-center py-8">
                                        <FaPaypal className="text-6xl text-blue-500 mx-auto mb-4" />
                                        <p className="text-gray-600 mb-6">
                                            Vous serez redirigé vers PayPal pour finaliser votre paiement.
                                        </p>
                                        <div className="flex justify-between">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                                            >
                                                Retour
                                            </button>
                                            <button
                                                onClick={() => setStep(3)}
                                                className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                                            >
                                                Continuer vers PayPal
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {paymentMethod === 'cash' && (
                                    <div className="text-center py-8">
                                        <FaTruck className="text-6xl text-green-500 mx-auto mb-4" />
                                        <p className="text-gray-600 mb-2">
                                            Vous paierez à la livraison en espèces ou par carte.
                                        </p>
                                        <p className="text-sm text-gray-500 mb-6">
                                            Frais supplémentaires: 0 DH
                                        </p>
                                        <div className="flex justify-between">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                                            >
                                                Retour
                                            </button>
                                            <button
                                                onClick={() => setStep(3)}
                                                className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                                            >
                                                Continuer
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Étape 3: Confirmation */}
                        {step === 3 && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FaCheckCircle className="text-green-500 text-3xl" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        Vérifiez votre commande
                                    </h2>
                                    <p className="text-gray-600">
                                        Assurez-vous que toutes les informations sont correctes
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {/* Résumé livraison */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                            <FaTruck className="text-blue-500" />
                                            Adresse de livraison
                                        </h3>
                                        <p className="text-gray-700">{shippingInfo.fullName}</p>
                                        <p className="text-gray-600 text-sm">{shippingInfo.address}</p>
                                        <p className="text-gray-600 text-sm">{shippingInfo.city}, {shippingInfo.postalCode}</p>
                                        <p className="text-gray-600 text-sm">{shippingInfo.country}</p>
                                        <p className="text-gray-600 text-sm mt-2">{shippingInfo.phone}</p>
                                        <p className="text-gray-600 text-sm">{shippingInfo.email}</p>
                                    </div>

                                    {/* Résumé paiement */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                            <FaCreditCard className="text-blue-500" />
                                            Méthode de paiement
                                        </h3>
                                        {paymentMethod === 'card' && (
                                            <>
                                                <p className="text-gray-700">Carte bancaire</p>
                                                <p className="text-gray-600 text-sm">
                                                    **** **** **** {paymentInfo.cardNumber?.slice(-4)}
                                                </p>
                                            </>
                                        )}
                                        {paymentMethod === 'paypal' && (
                                            <p className="text-gray-700">PayPal</p>
                                        )}
                                        {paymentMethod === 'cash' && (
                                            <p className="text-gray-700">Paiement à la livraison</p>
                                        )}
                                    </div>

                                    {/* Liste des articles */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-gray-900 mb-3">Articles</h3>
                                        <div className="space-y-3">
                                            {cartItems.map((item) => (
                                                <div key={item.id} className="flex justify-between items-center">
                                                    <div className="flex items-center gap-3">
                                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                                        <div>
                                                            <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                                                            <p className="text-xs text-gray-500">Quantité: {item.quantity}</p>
                                                        </div>
                                                    </div>
                                                    <p className="font-medium text-gray-900">
                                                        {(item.price * item.quantity).toLocaleString()} DH
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Total */}
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between text-gray-600 mb-2">
                                            <span>Sous-total</span>
                                            <span>{subtotal.toLocaleString()} DH</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600 mb-2">
                                            <span>Livraison</span>
                                            <span>{shippingFee.toLocaleString()} DH</span>
                                        </div>
                                        <div className="flex justify-between font-bold text-gray-900 text-lg mt-2 pt-2 border-t">
                                            <span>Total</span>
                                            <span>{total.toLocaleString()} DH</span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex justify-between gap-4 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setStep(2)}
                                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex-1"
                                        >
                                            Retour
                                        </button>
                                        <button
                                            onClick={handlePlaceOrder}
                                            disabled={loading}
                                            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex-1 flex items-center justify-center gap-2 font-semibold disabled:opacity-50"
                                        >
                                            {loading ? (
                                                <>
                                                    <FaSpinner className="animate-spin" />
                                                    Traitement...
                                                </>
                                            ) : (
                                                <>
                                                    <FaLock />
                                                    Confirmer la commande
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Colonne droite - Résumé */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                            <h3 className="font-semibold text-gray-900 text-lg mb-4">Résumé</h3>
                            
                            <div className="space-y-4 mb-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-600">{item.quantity}x</span>
                                            <span className="text-gray-800 truncate max-w-[120px]">{item.name}</span>
                                        </div>
                                        <span className="font-medium text-gray-900">
                                            {(item.price * item.quantity).toLocaleString()} DH
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4 space-y-2">
                                <div className="flex justify-between text-gray-600">
                                    <span>Sous-total</span>
                                    <span>{subtotal.toLocaleString()} DH</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Livraison</span>
                                    <span>{shippingFee.toLocaleString()} DH</span>
                                </div>
                                <div className="flex justify-between font-bold text-gray-900 text-lg pt-2 border-t">
                                    <span>Total</span>
                                    <span>{total.toLocaleString()} DH</span>
                                </div>
                            </div>

                            <div className="mt-6 text-xs text-gray-500 space-y-2">
                                <p className="flex items-center gap-2">
                                    <FaShieldAlt className="text-green-500" />
                                    Paiement 100% sécurisé
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaCheckCircle className="text-green-500" />
                                    Garantie de remboursement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;