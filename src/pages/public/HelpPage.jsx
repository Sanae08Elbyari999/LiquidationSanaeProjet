// src/pages/public/HelpPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    FaQuestionCircle,
    FaShoppingBag,
    FaTruck,
    FaCreditCard,
    FaTimesCircle,
    FaExchangeAlt,
    FaWhatsapp,
    FaArrowLeft,
    FaHome,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaShieldAlt,
    FaCheckCircle
} from 'react-icons/fa';

const HelpPage = () => {
    const { section } = useParams();

    // Données pour chaque section d'aide
    const helpData = {
        assistance: {
            title: "Centre d'assistance",
            icon: <FaQuestionCircle className="text-blue-500 text-3xl" />,
            description: "Trouvez rapidement des réponses à vos questions les plus fréquentes",
            content: [
                {
                    title: "Comment créer un compte ?",
                    answer: "Cliquez sur 'Se connecter' puis 'Créer un compte'. Remplissez le formulaire avec vos informations personnelles."
                },
                {
                    title: "Comment contacter un vendeur ?",
                    answer: "Sur la page du produit, cliquez sur 'Contacter le vendeur' pour envoyer un message direct."
                },
                {
                    title: "Comment signaler un problème ?",
                    answer: "Utilisez notre formulaire de contact ou envoyez-nous un email à support@laliquidation.com"
                }
            ],
            contactInfo: {
                email: "assistance@laliquidation.com",
                phone: "+212 5 XX XX XX XX",
                hours: "Lundi au Vendredi: 9h-18h"
            }
        },
        commande: {
            title: "Passer une commande",
            icon: <FaShoppingBag className="text-blue-500 text-3xl" />,
            description: "Guide complet pour commander sur notre plateforme",
            steps: [
                "Recherchez le produit que vous souhaitez acheter",
                "Cliquez sur 'Acheter maintenant' sur la page du produit",
                "Remplissez vos informations de livraison",
                "Choisissez votre mode de paiement préféré",
                "Confirmez votre commande"
            ],
            tips: [
                "Vérifiez toujours les informations du vendeur avant d'acheter",
                "Lisez attentivement la description du produit",
                "Regardez la vidéo du produit pour voir son état réel"
            ]
        },
        suivi: {
            title: "Suivre votre colis",
            icon: <FaTruck className="text-blue-500 text-3xl" />,
            description: "Localisez votre commande en temps réel",
            instructions: [
                "Connectez-vous à votre compte",
                "Allez dans 'Mes achats'",
                "Cliquez sur la commande que vous souhaitez suivre",
                "Le numéro de suivi et le statut s'afficheront"
            ],
            statuses: [
                { label: "En préparation", color: "bg-blue-100 text-blue-800" },
                { label: "Expédié", color: "bg-yellow-100 text-yellow-800" },
                { label: "En transit", color: "bg-orange-100 text-orange-800" },
                { label: "Livré", color: "bg-green-100 text-green-800" }
            ]
        },
        paiements: {
            title: "Méthodes de paiement",
            icon: <FaCreditCard className="text-blue-500 text-3xl" />,
            description: "CB, PayPal, virement et autres méthodes sécurisées",
            methods: [
                {
                    name: "Carte Bancaire",
                    icon: <FaCreditCard className="text-blue-600" />,
                    description: "Visa, Mastercard, CMI"
                },
                {
                    name: "PayPal",
                    icon: <FaShieldAlt className="text-blue-400" />,
                    description: "Paiement sécurisé via PayPal"
                },
                {
                    name: "Virement bancaire",
                    icon: <FaCheckCircle className="text-green-600" />,
                    description: "Transfert direct vers notre compte"
                }
            ],
            security: "Tous les paiements sont 100% sécurisés et cryptés"
        },
        annulation: {
            title: "Annuler des commandes",
            icon: <FaTimesCircle className="text-red-500 text-3xl" />,
            description: "Procédure d'annulation et remboursement",
            conditions: [
                "Annulation possible dans les 24h suivant la commande",
                "Remboursement sous 7 à 10 jours ouvrés",
                "Frais d'annulation: 0 DH (gratuit)",
                "Contactez le service client pour toute demande"
            ],
            process: [
                "Connectez-vous à votre compte",
                "Allez dans 'Mes achats'",
                "Sélectionnez la commande à annuler",
                "Cliquez sur 'Annuler la commande'",
                "Suivez les instructions"
            ]
        },
        retour: {
            title: "Faire un retour",
            icon: <FaExchangeAlt className="text-orange-500 text-3xl" />,
            description: "Comment retourner un article",
            policy: "Retour gratuit sous 30 jours pour les articles neufs",
            steps: [
                "Contactez le vendeur dans les 7 jours",
                "Obtenez l'autorisation de retour",
                "Emballez soigneusement l'article",
                "Utilisez l'étiquette de retour fournie",
                "Déposez le colis au point relais"
            ],
            conditions: [
                "Article doit être dans son état d'origine",
                "Tous les accessoires doivent être inclus",
                "L'emballage d'origine est recommandé"
            ]
        },
        whatsapp: {
            title: "WhatsApp",
            icon: <FaWhatsapp className="text-green-500 text-3xl" />,
            description: "Contactez-nous sur WhatsApp",
            number: "+212 6 XX XX XX XX",
            hours: "Disponible 7j/7 de 8h à 22h",
            services: [
                "Support technique",
                "Suivi de commande",
                "Questions sur les produits",
                "Problèmes de paiement",
                "Réclamations"
            ],
            quickAction: "Cliquez pour démarrer une conversation"
        }
    };

    const data = helpData[section] || helpData.assistance;

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Navigation */}
                <div className="mb-8">
                    <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
                        <FaArrowLeft />
                        Retour à l'accueil
                    </Link>
                    <div className="flex items-center gap-4">
                        {data.icon}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
                            <p className="text-gray-600 mt-2">{data.description}</p>
                        </div>
                    </div>
                </div>

                {/* Contenu selon la section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                    
                    {/* Section Centre d'assistance */}
                    {section === 'assistance' && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
                                <div className="space-y-4">
                                    {data.content.map((item, index) => (
                                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                                            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-700">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                                <h3 className="font-bold text-blue-900 text-lg mb-4">Contactez-nous</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex items-center gap-3">
                                        <FaEnvelope className="text-blue-500" />
                                        <div>
                                            <p className="font-medium text-gray-900">Email</p>
                                            <p className="text-gray-600 text-sm">{data.contactInfo.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaPhone className="text-blue-500" />
                                        <div>
                                            <p className="font-medium text-gray-900">Téléphone</p>
                                            <p className="text-gray-600 text-sm">{data.contactInfo.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaClock className="text-blue-500" />
                                        <div>
                                            <p className="font-medium text-gray-900">Horaires</p>
                                            <p className="text-gray-600 text-sm">{data.contactInfo.hours}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section Commande */}
                    {section === 'commande' && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Étapes pour commander</h2>
                                <div className="space-y-3">
                                    {data.steps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 pt-1">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                                <h3 className="font-bold text-yellow-900 text-lg mb-4">Conseils importants</h3>
                                <ul className="space-y-2">
                                    {data.tips.map((tip, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <FaCheckCircle className="text-green-500 mt-1" />
                                            <span className="text-gray-700">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Section Suivi */}
                    {section === 'suivi' && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Comment suivre votre colis</h2>
                                <div className="space-y-3">
                                    {data.instructions.map((instruction, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 pt-1">{instruction}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Statuts possibles</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {data.statuses.map((status, index) => (
                                        <div key={index} className={`px-4 py-3 rounded-lg ${status.color}`}>
                                            <span className="font-medium">{status.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section Paiements */}
                    {section === 'paiements' && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Méthodes disponibles</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {data.methods.map((method, index) => (
                                        <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center">
                                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                                                {method.icon}
                                            </div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">{method.name}</h3>
                                            <p className="text-gray-600 text-sm">{method.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                                <div className="flex items-center gap-4">
                                    <FaShieldAlt className="text-green-500 text-2xl" />
                                    <div>
                                        <h3 className="font-bold text-green-900 text-lg mb-1">Sécurité garantie</h3>
                                        <p className="text-green-800">{data.security}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section Annulation */}
                    {section === 'annulation' && (
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Conditions d'annulation</h2>
                                <div className="space-y-3">
                                    {data.conditions.map((condition, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                                            <FaTimesCircle className="text-red-500 mt-1" />
                                            <span className="text-gray-700">{condition}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Procédure d'annulation</h3>
                                <div className="space-y-3">
                                    {data.process.map((step, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 pt-1">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section Retour */}
                    {section === 'retour' && (
                        <div className="space-y-8">
                            <div className="p-6 bg-orange-50 rounded-xl border border-orange-200">
                                <h3 className="font-bold text-orange-900 text-lg mb-2">Notre politique de retour</h3>
                                <p className="text-orange-800">{data.policy}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Étapes pour retourner un article</h3>
                                <div className="space-y-3">
                                    {data.steps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-700 pt-1">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Conditions de retour</h3>
                                <div className="space-y-2">
                                    {data.conditions.map((condition, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <FaCheckCircle className="text-green-500 mt-1" />
                                            <span className="text-gray-700">{condition}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section WhatsApp */}
                    {section === 'whatsapp' && (
                        <div className="space-y-8">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FaWhatsapp className="text-green-500 text-4xl" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">{data.title}</h2>
                                <p className="text-gray-600 mb-6">{data.description}</p>
                                
                                <div className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                                    <a href={`https://wa.me/${data.number.replace(/\s/g, '')}`} className="flex items-center gap-2">
                                        <FaWhatsapp />
                                        <span>Démarrer la conversation</span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Informations de contact</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <p className="font-medium text-gray-900 mb-1">Numéro WhatsApp</p>
                                        <p className="text-gray-600">{data.number}</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg">
                                        <p className="font-medium text-gray-900 mb-1">Horaires</p>
                                        <p className="text-gray-600">{data.hours}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Services disponibles via WhatsApp</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {data.services.map((service, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                            <FaCheckCircle className="text-green-500" />
                                            <span className="text-gray-700">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Lien vers l'accueil */}
                    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800">
                            <FaHome />
                            Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;