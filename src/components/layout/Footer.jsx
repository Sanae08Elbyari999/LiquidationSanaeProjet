// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaTiktok,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaShieldAlt,
    FaCreditCard,
    FaTruck,
    FaHeadset,
    FaCrown
} from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Brand & Logo */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <img
                                src={logo}
                                alt="Laliquidation Logo"
                                className="w-12 h-12 object-contain"
                            />
                            <div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                                    Laliquidation
                                </span>
                                <span className="block text-sm text-blue-300 font-medium">Marketplace Marocain</span>
                            </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Découvrez des produits d'exception et connectez-vous directement
                            avec les meilleurs vendeurs certifiés.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <div className="flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-lg">
                                <FaShieldAlt className="text-green-400" />
                                <span className="text-sm text-gray-300">Achat sécurisé</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-lg">
                                <FaCreditCard className="text-blue-400" />
                                <span className="text-sm text-gray-300">Paiement 3D Secure</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-800/50 px-3 py-2 rounded-lg">
                                <FaTruck className="text-purple-400" />
                                <span className="text-sm text-gray-300">Livraison</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Luxe */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 w-8 h-1 rounded-full mr-3"></span>
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Accueil', path: '/' },
                                { name: 'Vendeurs Certifiés', path: '/certified-sellers' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
                                    >
                                        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Premium */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
                            <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-1 rounded-full mr-3"></span>
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Authentification Produits', path: '/authentication' },
                                { name: 'Livraison Sur Mesure', path: '/delivery' },
                                { name: 'Service Après-Vente', path: '/vip-support' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
                                    >
                                        <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800 flex items-center">
                            <span className="bg-gradient-to-r from-pink-500 to-orange-500 w-8 h-1 rounded-full mr-3"></span>
                            Contact
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="p-2 bg-blue-900/30 rounded-lg">
                                    <FaHeadset className="text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Support 24/7</h4>
                                    <p className="text-sm text-gray-400">+212 522-XX-XX-XX</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="p-2 bg-purple-900/30 rounded-lg">
                                    <FaWhatsapp className="text-green-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">WhatsApp</h4>
                                    <p className="text-sm text-gray-400">+212 6XX-XX-XX-XX</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="p-2 bg-pink-900/30 rounded-lg">
                                    <FaEnvelope className="text-pink-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white">Email Concierge</h4>
                                    <p className="text-sm text-gray-400">marketplace@laliquidation.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media & Newsletter */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        {/* Social Icons */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">Suivez notre univers</h4>
                            <div className="flex justify-center lg:justify-start space-x-4">
                                {[
                                    { icon: <FaInstagram />, color: 'from-purple-600 to-pink-600', label: 'Instagram' },
                                    { icon: <FaFacebookF />, color: 'from-blue-600 to-blue-800', label: 'Facebook' },
                                    { icon: <FaTwitter />, color: 'from-sky-500 to-blue-500', label: 'Twitter' },
                                    { icon: <FaLinkedinIn />, color: 'from-blue-700 to-blue-900', label: 'LinkedIn' },
                                    { icon: <FaYoutube />, color: 'from-red-600 to-red-800', label: 'YouTube' },
                                    { icon: <FaTiktok />, color: 'from-gray-800 to-black', label: 'TikTok' }
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href="#"
                                        className={`group p-3 rounded-xl bg-gradient-to-br ${social.color} hover:scale-110 transition-transform duration-300 shadow-lg`}
                                        aria-label={social.label}
                                    >
                                        <span className="text-white text-lg">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="lg:w-1/3">
                            <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">Newsletter Exclusive</h4>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Votre email pour des offres VIP"
                                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                                />
                                <button className="absolute right-2 top-2 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-all">
                                    S'abonner
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center lg:text-left">
                                Recevez en avant-première nos collections et événements exclusifs
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-gray-500 text-xs mt-1">
                                Une trés bonne expérience aux clients exigeants
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { name: 'Confidentialité', path: '/privacy' },
                                { name: 'Conditions', path: '/terms' },
                                { name: 'Cookies', path: '/cookies' },
                                { name: 'Mentions légales', path: '/legal' }
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="text-gray-400 hover:text-white text-sm transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center space-x-3">
                            <span className="text-gray-400 text-sm flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                Fes • Maroc 🇲🇦
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;