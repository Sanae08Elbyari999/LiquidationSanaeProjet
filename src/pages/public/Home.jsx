// src/pages/public/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/ui/SearchBar';
import Button from '../../components/ui/Button';
import VideoCard from '../../components/shared/VideoCard';

const Home = () => {
    // Données mockées pour les vidéos
    const featuredVideos = [
        {
            id: 1,
            title: "iPhone 13 Pro Max - Comme neuf",
            thumbnail: "https://images.unsplash.com/photo-1632661674596-618e45e56c53?w=400",
            price: 4500,
            seller: "TechStore",
            duration: "0:45",
            views: 1240,
            location: "Casablanca"
        },
        {
            id: 2,
            title: "Canapé en cuir véritable 3 places",
            thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
            price: 3200,
            seller: "MaisonModerne",
            duration: "0:52",
            views: 890,
            location: "Rabat"
        },
        {
            id: 3,
            title: "Collection de sacs de luxe 2024",
            thumbnail: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
            price: 1800,
            seller: "FashionMaroc",
            duration: "0:38",
            views: 1560,
            location: "Marrakech"
        },
        {
            id: 4,
            title: "BMW X5 2018 - Full options",
            thumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
            price: 285000,
            seller: "AutoPremium",
            duration: "1:00",
            views: 3240,
            location: "Tanger"
        },
        {
            id: 5,
            title: "PlayStation 5 + 3 jeux",
            thumbnail: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400",
            price: 4200,
            seller: "GameZone",
            duration: "0:41",
            views: 2100,
            location: "Fès"
        },
        {
            id: 6,
            title: "Appartement meublé centre ville",
            thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
            price: 850000,
            seller: "ImmoPlus",
            duration: "0:58",
            views: 4300,
            location: "Casablanca"
        }
    ];

    const categories = [
        { name: 'Électronique', icon: '📱', count: '1.2K', slug: 'electronique' },
        { name: 'Meubles', icon: '🛋️', count: '890', slug: 'meubles' },
        { name: 'Mode', icon: '👗', count: '2.1K', slug: 'mode' },
        { name: 'Voitures', icon: '🚗', count: '450', slug: 'voitures' },
        { name: 'Immobilier', icon: '🏠', count: '670', slug: 'immobilier' },
        { name: 'Sports', icon: '⚽', count: '780', slug: 'sports' }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="hero-gradient text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Découvrez des produits
                        <span className="block text-blue-200">par vidéo</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        La première plateforme marocaine de vente par vidéo.
                        Voir avant d'acheter, directement depuis votre smartphone.
                    </p>

                    <div className="max-w-2xl mx-auto mb-8">
                        <SearchBar
                            placeholder="Rechercher un produit, une marque, une catégorie..."
                            className="mb-4"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                            Commencer à vendre
                        </Button>
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                            Comment ça marche ?
                        </Button>
                    </div>
                </div>
            </section>

            {/* Catégories populaires */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Catégories populaires
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explorez nos principales catégories de produits
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category) => (
                            <Link
                                key={category.slug}
                                to={`/category/${category.slug}`}
                                className="category-card group text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300"
                            >
                                <div className="text-4xl mb-3 category-icon transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-500">{category.count} produits</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vidéos en vedette */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Vidéos en vedette
                            </h2>
                            <p className="text-gray-600">
                                Découvrez les produits les plus populaires cette semaine
                            </p>
                        </div>
                        <Link to="/category/tendance">
                            <Button variant="outline">
                                Voir tout
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredVideos.map((video) => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Pourquoi choisir Laliquidation */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Pourquoi choisir Laliquidation ?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🎥</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Voir avant d'acheter</h3>
                            <p className="text-gray-600">
                                Les produits sont présentés en vidéo pour une meilleure appréciation.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🛡️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Achat sécurisé</h3>
                            <p className="text-gray-600">
                                Notre système de médiation protège acheteurs et vendeurs.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚚</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Livraison partout</h3>
                            <p className="text-gray-600">
                                Recevez vos produits partout au Maroc avec nos partenaires.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
