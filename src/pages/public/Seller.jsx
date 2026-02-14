// src/pages/public/Seller.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../../components/shared/UserProfile';
import VideoCard from '../../components/video/VideoCard';

const Seller = () => {
    const { id } = useParams();

    // Données mockées du vendeur
    const sellerData = {
        id: 1,
        name: "TechStore Maroc",
        avatar: "",
        rating: 4.8,
        reviewCount: 124,
        location: "Casablanca",
        memberSince: "Janvier 2023",
        responseRate: 95,
        videosCount: 23,
        salesCount: 89,
        description: "Spécialiste en produits électroniques reconditionnés depuis 2023. Nous proposons des smartphones, tablettes et accessoires soigneusement testés et garantis. Tous nos produits bénéficient d'une garantie de 6 mois et sont livrés avec leurs accessoires d'origine.",
        stats: {
            totalSales: 89,
            positiveReviews: 98,
            responseTime: "2 heures",
            followerCount: 456
        }
    };

    const sellerVideos = [
        {
            id: 1,
            title: "iPhone 13 Pro Max 256GB - Comme neuf",
            thumbnail: "https://images.unsplash.com/photo-1632661674596-618e45e56c53?w=400",
            price: 4500,
            seller: "TechStore Maroc",
            duration: "0:45",
            views: 1240,
            location: "Casablanca"
        },
        {
            id: 2,
            title: "MacBook Air M1 2020 - 8GB/256GB",
            thumbnail: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
            price: 6500,
            seller: "TechStore Maroc",
            duration: "0:52",
            views: 890,
            location: "Casablanca"
        },
        {
            id: 3,
            title: "Samsung Galaxy Watch 6 Classic",
            thumbnail: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
            price: 1200,
            seller: "TechStore Maroc",
            duration: "0:38",
            views: 560,
            location: "Casablanca"
        },
        {
            id: 4,
            title: "AirPods Pro 2ème génération",
            thumbnail: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400",
            price: 900,
            seller: "TechStore Maroc",
            duration: "0:41",
            views: 780,
            location: "Casablanca"
        },
        {
            id: 5,
            title: "iPad Mini 6 64GB WiFi",
            thumbnail: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
            price: 3200,
            seller: "TechStore Maroc",
            duration: "0:47",
            views: 430,
            location: "Casablanca"
        },
        {
            id: 6,
            title: "Magic Keyboard pour iPad Pro",
            thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25856cd63?w=400",
            price: 1100,
            seller: "TechStore Maroc",
            duration: "0:35",
            views: 290,
            location: "Casablanca"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar avec profil */}
                    <div className="lg:col-span-1">
                        <UserProfile user={sellerData} showContactButton={true} />

                        {/* Statistiques détaillées */}
                        <div className="bg-white rounded-xl p-6 mt-6 border border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-4">Statistiques</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Ventes totales</span>
                                    <span className="font-semibold">{sellerData.stats.totalSales}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Avis positifs</span>
                                    <span className="font-semibold text-green-600">{sellerData.stats.positiveReviews}%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Temps de réponse</span>
                                    <span className="font-semibold">{sellerData.stats.responseTime}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Abonnés</span>
                                    <span className="font-semibold">{sellerData.stats.followerCount}</span>
                                </div>
                            </div>
                        </div>

                        {/* Informations vendeur */}
                        <div className="bg-white rounded-xl p-6 mt-6 border border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-3">Informations</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Membre depuis</span>
                                    <span className="font-medium">{sellerData.memberSince}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Localisation</span>
                                    <span className="font-medium">{sellerData.location}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Taux de réponse</span>
                                    <span className="font-medium text-green-600">{sellerData.responseRate}%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contenu principal */}
                    <div className="lg:col-span-3">
                        {/* En-tête */}
                        <div className="bg-white rounded-xl p-6 mb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">Boutique de {sellerData.name}</h1>
                                    <p className="text-gray-600 mt-2">{sellerData.description}</p>
                                </div>
                                <div className="flex space-x-3 mt-4 sm:mt-0">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                                        Suivre
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                                        Partager
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Filtres */}
                        <div className="bg-white rounded-xl p-4 mb-6">
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="font-medium text-gray-700">Filtrer par:</span>
                                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                    <option>Tous les produits</option>
                                    <option>En promotion</option>
                                    <option>Nouveautés</option>
                                    <option>Plus populaires</option>
                                </select>
                                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                    <option>Trier par: Pertinence</option>
                                    <option>Prix: Croissant</option>
                                    <option>Prix: Décroissant</option>
                                    <option>Plus récents</option>
                                    <option>Plus vus</option>
                                </select>
                            </div>
                        </div>

                        {/* Grille de vidéos */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                                Produits ({sellerVideos.length})
                            </h2>

                            {sellerVideos.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {sellerVideos.map((video) => (
                                        <VideoCard key={video.id} video={video} />
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-xl p-12 text-center">
                                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-3xl">📹</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucune vidéo pour le moment</h3>
                                    <p className="text-gray-600">Ce vendeur n'a pas encore publié de vidéos.</p>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {sellerVideos.length > 0 && (
                            <div className="flex justify-center mt-8">
                                <nav className="flex items-center space-x-2">
                                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50">
                                        Précédent
                                    </button>
                                    <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
                                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">3</button>
                                    <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50">
                                        Suivant
                                    </button>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seller;