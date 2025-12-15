// src/pages/public/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    {/* En-tête */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Politique de Confidentialité
                        </h1>
                        <p className="text-gray-600">
                            Dernière mise à jour : 15 janvier 2024
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="mb-4">
                                Chez Laliquidation.com, nous prenons la protection de vos données personnelles très au sérieux.
                                Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et
                                protégeons vos informations lorsque vous utilisez notre plateforme.
                            </p>
                            <p>
                                En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.
                                Nous vous encourageons à la lire attentivement.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informations que nous collectons</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Informations que vous nous fournissez</h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                                <li>Informations de compte (nom, email, téléphone)</li>
                                <li>Informations de profil (photo, description, localisation)</li>
                                <li>Contenu que vous publiez (vidéos, descriptions de produits)</li>
                                <li>Communications avec notre service client</li>
                                <li>Informations de paiement (traitées de manière sécurisée)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Informations collectées automatiquement</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Données d'utilisation et de navigation</li>
                                <li>Adresse IP et informations sur l'appareil</li>
                                <li>Cookies et technologies similaires</li>
                                <li>Données de localisation (si autorisé)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Utilisation des informations</h2>
                            <p className="mb-4">Nous utilisons vos informations pour :</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Fournir, maintenir et améliorer nos services</li>
                                <li>Personnaliser votre expérience utilisateur</li>
                                <li>Faciliter les transactions entre acheteurs et vendeurs</li>
                                <li>Communiquer avec vous concernant nos services</li>
                                <li>Assurer la sécurité de notre plateforme</li>
                                <li>Respecter nos obligations légales</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Partage des informations</h2>
                            <p className="mb-4">
                                Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations avec :
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Autres utilisateurs (pour faciliter les transactions)</li>
                                <li>Prestataires de services de confiance</li>
                                <li>Autorités légales (si requis par la loi)</li>
                                <li>En cas de fusion ou acquisition</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies et technologies similaires</h2>
                            <p className="mb-4">
                                Nous utilisons des cookies pour :
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Mémoriser vos préférences</li>
                                <li>Analyser l'utilisation de notre site</li>
                                <li>Personnaliser le contenu</li>
                                <li>Améliorer la sécurité</li>
                            </ul>
                            <p className="mt-4">
                                Vous pouvez contrôler les cookies via les paramètres de votre navigateur.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sécurité des données</h2>
                            <p>
                                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées
                                pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Vos droits</h2>
                            <p className="mb-4">Conformément à la loi marocaine 09-08, vous avez le droit de :</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Accéder à vos données personnelles</li>
                                <li>Rectifier les données inexactes</li>
                                <li>Supprimer vos données personnelles</li>
                                <li>Vous opposer au traitement de vos données</li>
                                <li>Limiter l'utilisation de vos données</li>
                                <li>Portabilité de vos données</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Conservation des données</h2>
                            <p>
                                Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services
                                et respecter nos obligations légales. Les données sont supprimées lorsqu'elles ne sont plus nécessaires.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modifications de cette politique</h2>
                            <p>
                                Nous pouvons modifier cette politique de confidentialité. Nous vous informerons de tout changement
                                important via notre plateforme ou par email.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Nous contacter</h2>
                            <p className="mb-2">
                                Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits,
                                contactez notre délégué à la protection des données :
                            </p>
                            <p className="text-blue-600 font-medium">
                                Email : dpo@laliquidation.com<br />
                                Adresse : Casablanca, Maroc
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="font-semibold text-blue-900 mb-2">Respect de la vie privée</h3>
                        <p className="text-blue-800 text-sm">
                            Nous nous engageons à protéger votre vie privée et à traiter vos données avec transparence
                            et respect, conformément à la législation marocaine en vigueur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;