// src/pages/public/Contact.jsx
import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Fonctionnalité de contact à implémenter');
    };

    const contactMethods = [
        {
            icon: '📧',
            title: 'Email',
            description: 'Nous répondons sous 24 heures',
            contact: 'support@laliquidation.com'
        },
        {
            icon: '📞',
            title: 'Téléphone',
            description: 'Du lundi au vendredi, 9h-18h',
            contact: '+212 5 XX XX XX XX'
        },
        {
            icon: '💬',
            title: 'Chat en direct',
            description: 'Assistance instantanée',
            contact: 'Disponible sur l\'application'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Une question, un problème ou une suggestion ? Notre équipe est là pour vous aider.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Méthodes de contact */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Nos canaux de contact</h2>

                            <div className="space-y-6">
                                {contactMethods.map((method, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{method.title}</h3>
                                            <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                                            <p className="text-blue-600 font-medium">{method.contact}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Informations supplémentaires */}
                            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-2">Heures d'ouverture</h4>
                                <div className="text-sm text-blue-800 space-y-1">
                                    <div className="flex justify-between">
                                        <span>Lundi - Vendredi:</span>
                                        <span>9h00 - 18h00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Samedi:</span>
                                        <span>10h00 - 16h00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Dimanche:</span>
                                        <span>Fermé</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Envoyez-nous un message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom complet *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Votre nom complet"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Adresse email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="votre@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                        Catégorie de demande
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="general">Question générale</option>
                                        <option value="technical">Problème technique</option>
                                        <option value="billing">Question de facturation</option>
                                        <option value="partnership">Demande de partenariat</option>
                                        <option value="report">Signaler un problème</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Objet *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Objet de votre message"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
                                        placeholder="Décrivez votre demande en détail..."
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                >
                                    Envoyer le message
                                </Button>

                                <p className="text-sm text-gray-500 text-center">
                                    * Champs obligatoires. Nous nous engageons à répondre à toutes les demandes sous 24 heures.
                                </p>
                            </form>
                        </div>

                        {/* FAQ rapide */}
                        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions fréquentes</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900">Comment devenir vendeur sur Laliquidation ?</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Créez un compte, complétez votre profil vendeur et commencez à uploader des vidéos de vos produits.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Le système de médiation est-il gratuit ?</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Oui, notre service de médiation entre acheteurs et vendeurs est entièrement gratuit.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Comment fonctionne le programme d'affiliation ?</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Les affiliés gagnent des commissions en promouvant les produits des vendeurs via des liens de tracking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;