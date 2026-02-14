// src/pages/public/Contact.jsx
import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import {
    FaEnvelope,
    FaPhone,
    FaCommentDots,
    FaClock,
    FaCheckCircle,
    FaArrowRight,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaQuestionCircle
} from 'react-icons/fa';

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
            icon: <FaEnvelope className="text-blue-600" />,
            title: 'Email',
            description: 'Nous répondons sous 24h',
            contact: 'support@laliquidation.com',
            bgColor: 'bg-blue-50'
        },
        {
            icon: <FaPhone className="text-blue-600" />,
            title: 'Téléphone',
            description: 'Lun-Ven, 9h-18h',
            contact: '+212 5 XX XX XX XX',
            bgColor: 'bg-green-50'
        },
        {
            icon: <FaCommentDots className="text-blue-600" />,
            title: 'Chat direct',
            description: 'Assistance instantanée',
            contact: 'Disponible sur l\'app',
            bgColor: 'bg-purple-50'
        }
    ];

    const faqs = [
        {
            question: 'Comment devenir vendeur ?',
            answer: 'Créez un compte et complétez votre profil vendeur pour commencer.'
        },
        {
            question: 'Le système de médiation est-il gratuit ?',
            answer: 'Oui, notre service de médiation est entièrement gratuit.'
        },
        {
            question: 'Comment fonctionne l\'affiliation ?',
            answer: 'Gagnez des commissions en promouvant des produits via vos liens.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                        <FaCommentDots className="text-blue-600 text-2xl" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        Contactez-nous
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Une question, un problème ou une suggestion ? 
                        Notre équipe est là pour vous aider.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne gauche - Méthodes de contact */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-xl border border-gray-200 p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-5">
                                Nos canaux de contact
                            </h2>

                            <div className="space-y-4">
                                {contactMethods.map((method, index) => (
                                    <div key={index} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className={`w-10 h-10 ${method.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                            {method.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium text-gray-900 text-sm">{method.title}</h3>
                                            <p className="text-gray-500 text-xs mb-1">{method.description}</p>
                                            <p className="text-blue-600 text-xs font-medium truncate">{method.contact}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Horaires */}
                        <div className="bg-white rounded-xl border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <FaClock className="text-gray-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900">Horaires d'ouverture</h3>
                            </div>
                            
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Lundi - Vendredi</span>
                                    <span className="font-medium text-gray-900">9h - 18h</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Samedi</span>
                                    <span className="font-medium text-gray-900">10h - 16h</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-600">Dimanche</span>
                                    <span className="text-gray-400">Fermé</span>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-green-50 rounded-xl border border-green-200 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                    <FaWhatsapp className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                                    <p className="text-xs text-gray-600">Réponse instantanée</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">+212 6 XX XX XX XX</p>
                            <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                                Démarrer la conversation
                            </button>
                        </div>
                    </div>

                    {/* Colonne droite - Formulaire */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <FaEnvelope className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Envoyez-nous un message
                                    </h2>
                                    <p className="text-gray-600 text-sm">
                                        Nous vous répondrons dans les plus brefs délais
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Nom complet <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                                            placeholder="Votre nom"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                                            placeholder="votre@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Sujet de votre demande
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm bg-white"
                                    >
                                        <option value="general">Question générale</option>
                                        <option value="technical">Problème technique</option>
                                        <option value="billing">Facturation</option>
                                        <option value="partnership">Partenariat</option>
                                        <option value="report">Signaler un problème</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Objet <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                                        placeholder="Objet de votre message"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm resize-none"
                                        placeholder="Décrivez votre demande en détail..."
                                    ></textarea>
                                </div>

                                <div className="flex items-center gap-2 pt-2">
                                    <FaCheckCircle className="text-green-500" />
                                    <span className="text-xs text-gray-500">
                                        Nous nous engageons à répondre sous 24h
                                    </span>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full py-3 text-sm font-medium"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Envoyer le message
                                        <FaArrowRight />
                                    </span>
                                </Button>
                            </form>
                        </div>

                        {/* FAQ */}
                        <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <FaQuestionCircle className="text-gray-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900">
                                    Questions fréquentes
                                </h3>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                        <h4 className="font-medium text-gray-900 text-sm mb-1.5">
                                            {faq.question}
                                        </h4>
                                        <p className="text-gray-600 text-xs">
                                            {faq.answer}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pied de page */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500">
                        Vous pouvez aussi nous contacter via notre{' '}
                        <a href="/help" className="text-blue-600 hover:underline">
                            centre d'aide
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;