// src/pages/public/Terms.jsx
import React from 'react';

const Terms = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    {/* En-tête */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Conditions Générales d'Utilisation
                        </h1>
                        <p className="text-gray-600">
                            Dernière mise à jour : 15 janvier 2024
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 1 - Objet</h2>
                            <p>
                                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir
                                les règles d'utilisation de la plateforme Laliquidation.com, service de vidéo-commerce
                                permettant la mise en relation d'acheteurs et de vendeurs via des vidéos de produits.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 2 - Acceptation des CGU</h2>
                            <p className="mb-4">
                                L'accès et l'utilisation de la plateforme impliquent l'acceptation sans réserve
                                des présentes CGU. L'utilisateur reconnaît avoir pris connaissance de ces conditions
                                et s'engage à les respecter.
                            </p>
                            <p>
                                En cas de non-acceptation des CGU, l'utilisateur est tenu de ne pas accéder au service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 3 - Description du service</h2>
                            <p className="mb-4">
                                Laliquidation.com est une plateforme de mise en relation permettant :
                            </p>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                                <li>La publication de vidéos de produits par des vendeurs</li>
                                <li>La consultation de vidéos produits par des acheteurs</li>
                                <li>La communication directe entre acheteurs et vendeurs</li>
                                <li>Un système de médiation gratuit pour sécuriser les transactions</li>
                                <li>Un programme d'affiliation pour les marketeurs</li>
                            </ul>
                            <p>
                                La plateforme agit comme un intermédiaire technique et ne participe pas directement
                                aux transactions commerciales entre utilisateurs.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 4 - Inscription et compte</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Conditions d'inscription</h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                                <li>Être âgé d'au moins 18 ans</li>
                                <li>Disposer de la capacité juridique de contracter</li>
                                <li>Fournir des informations exactes et complètes</li>
                                <li>Utiliser une adresse email valide</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Responsabilités de l'utilisateur</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Garder ses identifiants confidentiels</li>
                                <li>Informez-nous de toute utilisation non autorisée</li>
                                <li>Assurer la véracité des informations fournies</li>
                                <li>Mettre à jour ses informations personnelles</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 5 - Règles de conduite</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Contenu interdit</h3>
                            <p className="mb-3">Il est interdit de publier du contenu :</p>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                                <li>Contrefait ou violant des droits de propriété intellectuelle</li>
                                <li>Diffamatoire, injurieux ou discriminatoire</li>
                                <li>Pornographique ou à caractère sexuel explicite</li>
                                <li>Promouvant des activités illégales</li>
                                <li>Contenant des informations fausses ou trompeuses</li>
                                <li>Portant atteinte à la vie privée d'autrui</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Produits interdits</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Armes et produits dangereux</li>
                                <li>Drogues et substances illicites</li>
                                <li>Produits contrefaits</li>
                                <li>Animaux vivants (sauf autorisation)</li>
                                <li>Produits réglementés (médicaments, etc.)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 6 - Transactions commerciales</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Responsabilités des vendeurs</h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                                <li>Décrire précisément les produits vendus</li>
                                <li>Honorer les engagements de livraison</li>
                                <li>Respecter le droit de rétractation</li>
                                <li>Fournir une facture pour chaque vente</li>
                                <li>Respecter les garanties légales</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Responsabilités des acheteurs</h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                                <li>Payer le prix convenu</li>
                                <li>Vérifier le produit à réception</li>
                                <li>Respecter les délais de rétractation</li>
                                <li>Communiquer clairement avec le vendeur</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Médiation</h3>
                            <p>
                                Laliquidation.com offre un service gratuit de médiation en cas de litige entre acheteurs
                                et vendeurs. Notre équipe intervient pour trouver une solution équitable.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 7 - Propriété intellectuelle</h2>
                            <p className="mb-4">
                                La plateforme Laliquidation.com et son contenu (design, logo, code source) sont
                                la propriété exclusive de Laliquidation SARL.
                            </p>
                            <p>
                                Les utilisateurs conservent leurs droits de propriété intellectuelle sur le contenu
                                qu'ils publient, mais accordent à Laliquidation.com une licence mondiale non exclusive
                                pour l'utilisation, l'affichage et la distribution de ce contenu sur la plateforme.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 8 - Limitation de responsabilité</h2>
                            <p className="mb-4">
                                Laliquidation.com agit en tant qu'intermédiaire technique et n'est pas partie aux
                                transactions commerciales entre utilisateurs. En conséquence :
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Nous ne garantissons pas l'authenticité des produits vendus</li>
                                <li>Nous ne vérifions pas l'identité des utilisateurs</li>
                                <li>Nous ne sommes pas responsables des litiges entre utilisateurs</li>
                                <li>Nous déclinons toute responsabilité pour les dommages indirects</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 9 - Suspension et résiliation</h2>
                            <p className="mb-4">
                                Nous nous réservons le droit de suspendre ou résilier un compte en cas de :
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Violation des présentes CGU</li>
                                <li>Comportement frauduleux ou abusif</li>
                                <li>Publication de contenu interdit</li>
                                <li>Activité illégale</li>
                                <li>Non-respect répété des engagements</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 10 - Modifications des CGU</h2>
                            <p>
                                Nous nous réservons le droit de modifier les présentes CGU à tout moment.
                                Les utilisateurs seront informés des modifications par email ou via la plateforme.
                                L'utilisation continue du service vaut acceptation des nouvelles conditions.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 11 - Droit applicable et juridiction</h2>
                            <p className="mb-4">
                                Les présentes CGU sont régies par le droit marocain. En cas de litige,
                                les tribunaux de Casablanca sont seuls compétents.
                            </p>
                            <p>
                                Conformément aux dispositions de la loi marocaine 31-08, tout consommateur peut
                                recourir à un médiateur de la consommation en cas de litige avec un professionnel.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Article 12 - Contact</h2>
                            <p className="mb-2">
                                Pour toute question concernant les présentes CGU :
                            </p>
                            <p className="text-blue-600 font-medium">
                                Email : legal@laliquidation.com<br />
                                Adresse : Casablanca, Maroc<br />
                                Téléphone : +212 5 XX XX XX XX
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
                        <h3 className="font-semibold text-orange-900 mb-2">⚠️ Important</h3>
                        <p className="text-orange-800 text-sm">
                            Ces conditions générales d'utilisation constituent un contrat juridiquement contraignant
                            entre vous et Laliquidation.com. Nous vous recommandons de les lire attentivement et
                            de les conserver.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;