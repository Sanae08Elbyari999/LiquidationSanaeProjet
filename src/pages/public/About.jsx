// src/pages/public/About.jsx
import React from 'react';
import Button from '../../components/ui/Button';

const About = () => {
    const stats = [
        { number: '50,000+', label: 'Utilisateurs actifs' },
        { number: '25,000+', label: 'Vidéos publiées' },
        { number: '15,000+', label: 'Transactions réussies' },
        { number: '95%', label: 'Satisfaction clients' }
    ];

    const team = [
        {
            name: 'Ahmed Benali',
            role: 'Fondateur & CEO',
            description: '15 ans d\'expérience dans le e-commerce et les marketplaces digitales',
            avatar: '👨‍💼'
        },
        {
            name: 'Fatima Zahra',
            role: 'Responsable Technique',
            description: 'Expert en développement de plateformes et solutions de paiement',
            avatar: '👩‍💻'
        },
        {
            name: 'Mehdi El Amrani',
            role: 'Responsable Marketing',
            description: 'Spécialiste en growth marketing et acquisition utilisateurs',
            avatar: '👨‍🎨'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Notre Mission
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                        Révolutionner le commerce en ligne au Maroc en permettant à chacun de vendre
                        et d'acheter des produits via des vidéos courtes et engageantes.
                    </p>
                </div>
            </section>

            {/* Notre histoire */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre Histoire</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="text-lg leading-relaxed mb-6">
                                <strong>Laliquidation.com</strong> est née d'un constat simple : au Maroc,
                                les acheteurs veulent voir les produits avant d'acheter, et les vendeurs
                                cherchent des moyens plus engageants pour présenter leurs articles.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                Fondée en 2023, notre plateforme combine l'immédiateté et le visuel des
                                stories vidéo avec la puissance du commerce électronique. Nous croyons
                                fermement que l'avenir du e-commerce passe par des expériences plus
                                authentiques et transparentes.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Aujourd'hui, nous sommes fiers de connecter des milliers de vendeurs
                                et d'acheteurs à travers tout le Maroc, en offrant une alternative
                                moderne et sécurisée aux plateformes de commerce traditionnelles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chiffres clés */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        Notre Impact en Chiffres
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notre équipe */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        Rencontrez Notre Équipe
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                                    {member.avatar}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nos valeurs */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        Nos Valeurs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Transparence</h3>
                            <p className="text-gray-600">
                                Nous croyons en la puissance de la vidéo pour montrer les produits
                                tels qu'ils sont vraiment, sans surprises.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Confiance</h3>
                            <p className="text-gray-600">
                                Notre système de médiation et de paiement sécurisé protège
                                acheteurs et vendeurs à chaque transaction.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                            <p className="text-gray-600">
                                Nous repoussons constamment les limites du e-commerce pour
                                offrir des expériences d'achat uniques.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Prêt à nous rejoindre ?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Que vous soyez acheteur, vendeur ou affilié, il y a une place pour vous
                        dans notre communauté.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white hover:text-blue-600"
                        >
                            Commencer à vendre
                        </Button>
                        <Button
                            variant="primary"
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-blue-50"
                        >
                            Découvrir les produits
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;