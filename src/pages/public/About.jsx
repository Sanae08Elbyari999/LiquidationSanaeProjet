// src/pages/public/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import {
    FaUsers,
    FaVideo,
    FaShoppingCart,
    FaStar,
    FaShieldAlt,
    FaHandshake,
    FaCheckCircle,
    FaQuoteLeft,
    FaArrowRight,
    FaChartLine,
    FaGlobe
} from 'react-icons/fa';

const About = () => {
    const stats = [
        { number: '50,000+', label: 'Utilisateurs actifs', icon: <FaUsers /> },
        { number: '25,000+', label: 'Vidéos publiées', icon: <FaVideo /> },
        { number: '15,000+', label: 'Transactions', icon: <FaShoppingCart /> },
        { number: '95%', label: 'Satisfaction', icon: <FaStar /> }
    ];

    const values = [
        {
            title: 'Innovation',
            description: 'Première plateforme marocaine de vente par vidéo',
            icon: <FaVideo />
        },
        {
            title: 'Transparence',
            description: 'Montrer les produits tels qu\'ils sont vraiment',
            icon: <FaShieldAlt />
        },
        {
            title: 'Confiance',
            description: 'Protection des acheteurs et vendeurs',
            icon: <FaHandshake />
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Simple */}
            <section className="bg-white py-16 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            La première plateforme marocaine qui transforme l'expérience d'achat 
                            avec des vidéos courtes et authentiques.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/register">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="px-6 py-3"
                                >
                                    <span className="flex items-center gap-2">
                                        Rejoindre Laliquidation
                                        <FaArrowRight />
                                    </span>
                                </Button>
                            </Link>
                            <Link to="/category/electronique">
                                <Button
                                    variant="outline"
                                    size="lg"
                                >
                                    <span className="flex items-center gap-2">
                                        Voir les produits
                                        <FaShoppingCart />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistiques - Simple */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notre histoire */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Notre histoire
                        </h2>
                        
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                            <div className="flex items-start gap-4 mb-6">
                                <FaQuoteLeft className="text-blue-500 text-2xl mt-1" />
                                <p className="text-gray-600 text-lg">
                                    <strong className="text-gray-900">Laliquidation</strong> est née d'un constat simple : 
                                    les acheteurs veulent voir les produits avant d'acheter, et les vendeurs 
                                    cherchent des moyens plus engageants pour présenter leurs articles.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1" />
                                    <span className="text-gray-600">
                                        Fondée en 2023, notre plateforme combine l'immédiateté des vidéos 
                                        avec la puissance du commerce électronique.
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1" />
                                    <span className="text-gray-600">
                                        Nous croyons que l'avenir du e-commerce passe par des 
                                        expériences plus authentiques et transparentes.
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaCheckCircle className="text-green-500 mt-1" />
                                    <span className="text-gray-600">
                                        Notre mission : rendre le commerce en ligne plus 
                                        accessible, plus fiable et plus engageant pour tous.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos valeurs */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Nos valeurs
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Des principes qui guident chaque décision
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final - Simple */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Rejoignez Laliquidation
                        </h2>
                        
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Que vous soyez acheteur à la recherche de bonnes affaires 
                            ou vendeur souhaitant développer votre activité.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/register?type=seller">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="px-6 py-3"
                                >
                                    <span className="flex items-center gap-2">
                                        <FaChartLine />
                                        Devenir vendeur
                                    </span>
                                </Button>
                            </Link>
                            <Link to="/register?type=buyer">
                                <Button
                                    variant="outline"
                                    size="lg"
                                >
                                    <span className="flex items-center gap-2">
                                        <FaGlobe />
                                        S'inscrire comme acheteur
                                    </span>
                                </Button>
                            </Link>
                        </div>
                        
                        <p className="text-gray-500 text-sm mt-6">
                            Plus de 50,000 utilisateurs nous font confiance
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;