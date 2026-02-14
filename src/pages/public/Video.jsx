// src/pages/public/Video.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

import {
    FaPlay,
    FaPause,
    FaHeart,
    FaRegHeart,
    FaShareAlt,
    FaShoppingCart,
    FaTruck,
    FaShieldAlt,
    FaChevronRight,
    FaCheckCircle,
    FaMapMarkerAlt,
    FaTag,
    FaStar,
    FaPhoneAlt,
    FaWhatsapp,
    FaClock,
    FaVolumeUp,
    FaVolumeMute
} from 'react-icons/fa';

const Video = () => {
    const { id } = useParams();
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const videoRef = useRef(null);

    // Initialiser la vidéo avec son désactivé
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => {
                console.log("Autoplay avec son désactivé a échoué:", e);
                videoRef.current.muted = true;
                videoRef.current.play().catch(console.error);
            });
        }
    }, []);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleMuteToggle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    // Données mockées pour la vidéo
    const videoData = {
        id: 1,
        title: "iPhone 13 Pro Max 256GB - Comme neuf, garantie restante",
        description: "iPhone 13 Pro Max en excellent état, acheté il y a 8 mois. Livré avec facture d'achat, garantie Apple jusqu'à décembre 2024. Accessoires inclus: câble USB-C, adaptateur 20W. Écran et coque arrière protégés depuis le premier jour.\n\nCaractéristiques techniques :\n• Écran Super Retina XDR 6.7\"\n• Processeur A15 Bionic\n• Triple caméra 12MP avec mode Nuit\n• Compatible 5G\n• iOS 17 installé\n\nL'iPhone est en parfait état, aucune rayure sur l'écran ou la coque. La batterie conserve 92% de sa capacité d'origine. Livré dans sa boîte d'origine avec tous les accessoires.",
        price: 4500,
        originalPrice: 6000,
        discount: 25,
        location: "Casablanca, Maarif",
        category: "Électronique / Smartphones",
        duration: "0:45",
        views: 1240,
        likes: 245,
        uploadDate: "2024-01-15",
        condition: "Comme neuf",
        delivery: true,
        deliveryFee: 30,
        warranty: "4 mois",
        seller: {
            id: 1,
            name: "TechStore Maroc",
            avatar: "",
            rating: 4.8,
            reviewCount: 124,
            location: "Casablanca",
            memberSince: "2023",
            responseRate: 95,
            videosCount: 23,
            salesCount: 89,
            responseTime: "Moins de 30 minutes",
            description: "Spécialiste en produits électroniques reconditionnés. Tous nos produits sont testés et garantis 6 mois. Service client disponible 7j/7.",
            verified: true
        },
        features: [
            { text: "État: Comme neuf" },
            { text: "Capacité: 256GB" },
            { text: "Couleur: Bleu sierra" },
            { text: "Batterie: 92% santé" },
            { text: "Garantie: 4 mois restants" },
            { text: "Boîte d'origine incluse" }
        ]
    };

    const relatedVideos = [
        {
            id: 2,
            title: "Samsung Galaxy S23 Ultra 512GB",
            thumbnail: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w-300",
            price: 5200,
            seller: "MobileExpert",
            duration: "0:38",
            views: 890,
            discount: 15
        },
        {
            id: 3,
            title: "iPad Pro 12.9 M2 128GB",
            thumbnail: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w-300",
            price: 6800,
            seller: "AppleStore",
            duration: "0:52",
            views: 670,
            discount: 20
        }
    ];

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: videoData.title,
                text: `Découvrez ce produit sur Laliquidation: ${videoData.title}`,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Lien copié !');
        }
    };

    const truncatedDescription = videoData.description.length > 200
        ? videoData.description.substring(0, 200) + '...'
        : videoData.description;

    return (
        <div className="min-h-screen bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne principale */}
                    <div className="lg:col-span-2">
                        {/* Player vidéo */}
                        <div className="bg-black rounded-xl overflow-hidden mb-6">
                            <div className="aspect-video relative">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                                </video>

                                {/* Contrôles */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        onClick={handlePlayPause}
                                        className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30"
                                    >
                                        {isPlaying ? (
                                            <FaPause className="text-white text-lg" />
                                        ) : (
                                            <FaPlay className="text-white text-lg ml-1" />
                                        )}
                                    </button>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                                        <FaClock className="text-white/80 text-xs" />
                                        <span className="text-white text-xs">{videoData.duration}</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleMuteToggle}
                                            className="p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80"
                                        >
                                            {isMuted ? (
                                                <FaVolumeMute className="text-white text-sm" />
                                            ) : (
                                                <FaVolumeUp className="text-white text-sm" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {isMuted && (
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                        <span className="text-white text-xs">Son désactivé</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Informations produit */}
                        <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                            {videoData.category}
                                        </span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                            {videoData.condition}
                                        </span>
                                    </div>
                                    <h1 className="text-2xl font-bold text-gray-900 mb-3">{videoData.title}</h1>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow-400" />
                                            <span>{videoData.likes} avis</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleLike}
                                        className={`p-2.5 rounded-lg transition-colors ${isLiked ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                    >
                                        {isLiked ? <FaHeart /> : <FaRegHeart />}
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="p-2.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    >
                                        <FaShareAlt />
                                    </button>
                                </div>
                            </div>

{/* Prix */}
<div className="mb-6 p-5 bg-white rounded-xl border border-blue-100">
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
            <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl font-bold text-gray-900">{videoData.price.toLocaleString()} DH</span>
                {videoData.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{videoData.originalPrice.toLocaleString()} DH</span>
                )}
                {videoData.discount && (
                    <span className="px-1.5 py-0.5 bg-red-100 text-red-600 text-xs font-medium rounded">
                        -{videoData.discount}%
                    </span>
                )}
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-gray-400" />
                    <span>{videoData.location}</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                    <FaTruck className="text-gray-400" />
                    <span>{videoData.deliveryFee} DH livraison</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                    <FaShieldAlt className="text-gray-400" />
                    <span>Garantie {videoData.warranty}</span>
                </div>
            </div>
        </div>
        
        <div className="flex items-center gap-2 lg:flex-col lg:items-end">
            <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium text-gray-700">En stock</span>
            </div>
            <span className="text-xs text-gray-400">Livraison sous 24h</span>
        </div>
    </div>
</div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {showFullDescription ? videoData.description : truncatedDescription}
                                </p>
                                {videoData.description.length > 200 && (
                                    <button
                                        onClick={() => setShowFullDescription(!showFullDescription)}
                                        className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                                    >
                                        {showFullDescription ? 'Voir moins' : 'Lire la suite'}
                                        <FaChevronRight className={`text-xs ${showFullDescription ? 'rotate-90' : ''}`} />
                                    </button>
                                )}
                            </div>

                            {/* Caractéristiques */}
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <FaTag className="text-blue-600 text-sm" />
                                    Caractéristiques
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                    {videoData.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                            <span className="text-sm text-gray-700">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <Button variant="primary" size="lg" className="w-full py-3 rounded-lg mb-4">
                                <span className="flex items-center justify-center gap-2">
                                    <FaShoppingCart />
                                    Acheter maintenant
                                </span>
                            </Button>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                <button className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100">
                                    <FaWhatsapp className="text-gray-600 text-lg mb-1" />
                                    <span className="text-xs">WhatsApp</span>
                                </button>
                                <button className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100">
                                    <FaPhoneAlt className="text-gray-600 text-lg mb-1" />
                                    <span className="text-xs">Appeler</span>
                                </button>
                                <button className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100">
                                    <FaTruck className="text-gray-600 text-lg mb-1" />
                                    <span className="text-xs">Livraison</span>
                                </button>
                                <button className="flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100">
                                    <FaShieldAlt className="text-gray-600 text-lg mb-1" />
                                    <span className="text-xs">Garantie</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Produits similaires */}
                        <div className="bg-white rounded-xl p-5 border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-gray-900">Produits similaires</h3>
                                <Link to="/category/electronique" className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                                    Voir tout
                                    <FaChevronRight className="text-xs" />
                                </Link>
                            </div>
                            <div className="space-y-3">
                                {relatedVideos.map((video) => (
                                    <Link
                                        key={video.id}
                                        to={`/video/${video.id}`}
                                        className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100"
                                    >
                                        <div className="relative flex-shrink-0">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-16 h-12 object-cover rounded"
                                            />
                                            <div className="absolute bottom-0.5 right-0.5 bg-black/70 text-white text-[10px] px-1 py-0.5 rounded">
                                                {video.duration}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-gray-900 text-xs mb-1 line-clamp-2">
                                                {video.title}
                                            </h4>
                                            <div className="text-green-600 font-bold text-xs">
                                                {video.price.toLocaleString()} DH
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                      {/* Sécurité */}
                        <div className="bg-blue-50/30 rounded-xl p-5 border border-blue-100">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaShieldAlt className="text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Achat sécurisé</h4>
                                    <ul className="space-y-1.5">
                                        <li className="flex items-start gap-1.5 text-xs text-gray-600">
                                            <FaCheckCircle className="text-blue-400 mt-0.5 flex-shrink-0" />
                                            <span>Paiement protégé</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 text-xs text-gray-600">
                                            <FaCheckCircle className="text-blue-400 mt-0.5 flex-shrink-0" />
                                            <span>Argent reçu après réception</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 text-xs text-gray-600">
                                            <FaCheckCircle className="text-blue-400 mt-0.5 flex-shrink-0" />
                                            <span>Assistance 24h/24</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                         {/* Garantie */}
                        <div className="bg-blue-50/30 rounded-xl p-5 border border-blue-100">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaCheckCircle className="text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Notre garantie</h4>
                                    <ul className="space-y-1.5">
                                        <li className="flex items-start gap-1.5 text-xs text-gray-600">
                                            <span className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                            <span>Produit testé et vérifié</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 text-xs text-gray-600">
                                            <span className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                            <span>Photos et description exactes</span>
                                        </li>
                                        <li className="flex items-start gap-1.5 text-xs text-gray-600">
                                            <span className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                            <span>Vendeur vérifié</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;