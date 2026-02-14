// src/pages/user/CreateChannel.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaVideo,
    FaUpload,
    FaCamera,
    FaTag,
    FaMapMarkerAlt,
    FaDollarSign,
    FaInfoCircle,
    FaCheckCircle,
    FaArrowLeft
} from 'react-icons/fa';

const CreateChannel = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        channelName: '',
        description: '',
        category: '',
        location: '',
        videoFile: null,
        videoUrl: '',
        videoTitle: '',
        videoDescription: '',
        price: '',
        originalPrice: '',
        discount: '',
        condition: 'comme-neuf',
        stock: 'en-stock',
        warranty: '',
        deliveryFee: '',
        productImage: null,
        features: ['', '', '']
    });

    const categories = [
        { id: 'femme', name: 'Mode Femme' },
        { id: 'homme', name: 'Mode Homme' },
        { id: 'electronique', name: 'Électronique' },
        { id: 'meubles', name: 'Meubles & Déco' },
        { id: 'vehicules', name: 'Véhicules' },
        { id: 'cuisine', name: 'Cuisine' },
        { id: 'sport', name: 'Sport & Loisirs' },
        { id: 'beaute', name: 'Beauté & Santé' },
        { id: 'maison', name: 'Maison & Jardin' },
        { id: 'autres', name: 'Autres' }
    ];

    const conditions = [
        { id: 'neuf', name: 'Neuf', description: 'Produit neuf sous emballage' },
        { id: 'comme-neuf', name: 'Comme neuf', description: 'Très peu utilisé, état impeccable' },
        { id: 'bon-etat', name: 'Bon état', description: 'Signes d\'utilisation légers' },
        { id: 'acceptable', name: 'État acceptable', description: 'Fonctionnel mais usé' }
    ];

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = [...formData.features];
        newFeatures[index] = value;
        setFormData(prev => ({
            ...prev,
            features: newFeatures
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        localStorage.setItem('channelCreated', 'true');
        alert('Votre chaîne et votre vidéo ont été créées avec succès !');
        navigate('/profile/channel');
    };

    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 100 * 1024 * 1024) { // 100MB max
                alert('Le fichier vidéo ne doit pas dépasser 100MB');
                return;
            }
            if (!file.type.includes('video/')) {
                alert('Veuillez sélectionner un fichier vidéo valide');
                return;
            }
            setFormData(prev => ({ ...prev, videoFile: file }));
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB max
                alert('L\'image ne doit pas dépasser 5MB');
                return;
            }
            setFormData(prev => ({ ...prev, productImage: file }));
        }
    };

    const nextStep = () => {
        if (step === 1 && (!formData.channelName || !formData.description)) {
            alert('Veuillez remplir le nom et la description de la chaîne');
            return;
        }
        if (step === 2 && !formData.videoFile && !formData.videoUrl) {
            alert('Veuillez ajouter une vidéo ou une URL de vidéo');
            return;
        }
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* En-tête */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
                    >
                        <FaArrowLeft />
                        Retour
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Créer votre chaîne</h1>
                    <p className="text-gray-600">
                        Créez votre chaîne de vente et ajoutez votre premier produit en vidéo
                    </p>
                </div>

                {/* Étapes */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center">
                        {[1, 2, 3].map((stepNumber) => (
                            <React.Fragment key={stepNumber}>
                                <div className={`flex flex-col items-center ${stepNumber <= step ? 'text-blue-600' : 'text-gray-400'}`}>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stepNumber <= step ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                                        {stepNumber < step ? <FaCheckCircle /> : stepNumber}
                                    </div>
                                    <span className="text-sm mt-2">
                                        {stepNumber === 1 && 'Chaîne'}
                                        {stepNumber === 2 && 'Vidéo'}
                                        {stepNumber === 3 && 'Produit'}
                                    </span>
                                </div>
                                {stepNumber < 3 && (
                                    <div className={`w-20 h-1 mx-2 ${stepNumber < step ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                    {/* Étape 1: Informations de la chaîne */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                                <FaVideo className="text-blue-500" />
                                Informations de votre chaîne
                            </h2>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nom de la chaîne *
                                </label>
                                <input
                                    type="text"
                                    name="channelName"
                                    value={formData.channelName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Ex: TechStore Maroc"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description de la chaîne *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Décrivez votre chaîne (spécialité, mission, valeurs...)"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Catégorie principale
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">Sélectionnez une catégorie</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Localisation
                                </label>
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-gray-400" />
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Ex: Casablanca, Maarif"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Étape 2: Vidéo du produit */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                                <FaUpload className="text-blue-500" />
                                Ajouter votre vidéo produit
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Téléchargement de vidéo */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Télécharger une vidéo *
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                                        <input
                                            type="file"
                                            id="video-upload"
                                            accept="video/*"
                                            onChange={handleVideoUpload}
                                            className="hidden"
                                        />
                                        <label htmlFor="video-upload" className="cursor-pointer">
                                            <FaUpload className="text-4xl text-gray-400 mx-auto mb-3" />
                                            <p className="text-gray-600 mb-2">Cliquez pour télécharger</p>
                                            <p className="text-sm text-gray-500">
                                                Formats: MP4, AVI, MOV (max. 100MB)
                                            </p>
                                        </label>
                                        {formData.videoFile && (
                                            <div className="mt-4 p-3 bg-green-50 rounded-lg">
                                                <p className="text-green-700 font-medium">
                                                    ✓ {formData.videoFile.name}
                                                </p>
                                                <p className="text-sm text-green-600">
                                                    {(formData.videoFile.size / (1024 * 1024)).toFixed(2)} MB
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* OU URL de vidéo */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        OU Lien vidéo (YouTube, Vimeo...)
                                    </label>
                                    <input
                                        type="url"
                                        name="videoUrl"
                                        value={formData.videoUrl}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="https://youtube.com/watch?v=..."
                                    />
                                    <p className="text-sm text-gray-500 mt-2">
                                        Vous pouvez utiliser un lien existant
                                    </p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Titre de la vidéo *
                                </label>
                                <input
                                    type="text"
                                    name="videoTitle"
                                    value={formData.videoTitle}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Ex: iPhone 13 Pro Max 256GB - Comme neuf, garantie restante"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description de la vidéo *
                                </label>
                                <textarea
                                    name="videoDescription"
                                    value={formData.videoDescription}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Décrivez votre produit en détail..."
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {/* Étape 3: Informations du produit */}
                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                                <FaTag className="text-blue-500" />
                                Informations du produit
                            </h2>

                            {/* Prix */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Prix (DH) *
                                    </label>
                                    <div className="flex items-center gap-2">
                                        <FaDollarSign className="text-gray-400" />
                                        <input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="4500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Prix original
                                    </label>
                                    <input
                                        type="number"
                                        name="originalPrice"
                                        value={formData.originalPrice}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="6000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Réduction (%)
                                    </label>
                                    <input
                                        type="number"
                                        name="discount"
                                        value={formData.discount}
                                        onChange={handleInputChange}
                                        min="0"
                                        max="100"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="25"
                                    />
                                </div>
                            </div>

                            {/* État et stock */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        État du produit *
                                    </label>
                                    <select
                                        name="condition"
                                        value={formData.condition}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        {conditions.map(cond => (
                                            <option key={cond.id} value={cond.id}>
                                                {cond.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Stock *
                                    </label>
                                    <select
                                        name="stock"
                                        value={formData.stock}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="en-stock">En stock</option>
                                        <option value="limite">Stock limité</option>
                                        <option value="rupture">Rupture de stock</option>
                                    </select>
                                </div>
                            </div>

                            {/* Image produit */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Image du produit *
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                                    <input
                                        type="file"
                                        id="image-upload"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <label htmlFor="image-upload" className="cursor-pointer">
                                        <FaCamera className="text-4xl text-gray-400 mx-auto mb-3" />
                                        <p className="text-gray-600 mb-2">
                                            {formData.productImage ? 'Changer l\'image' : 'Ajouter une image'}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Formats: JPG, PNG (max. 5MB)
                                        </p>
                                    </label>
                                    {formData.productImage && (
                                        <div className="mt-4">
                                            <img
                                                src={URL.createObjectURL(formData.productImage)}
                                                alt="Aperçu"
                                                className="max-w-xs mx-auto rounded-lg"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Caractéristiques */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Caractéristiques principales
                                </label>
                                <div className="space-y-3">
                                    {formData.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <span className="text-gray-500">{index + 1}.</span>
                                            <input
                                                type="text"
                                                value={feature}
                                                onChange={(e) => handleFeatureChange(index, e.target.value)}
                                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder={`Caractéristique ${index + 1} (ex: État: Comme neuf)`}
                                            />
                                            {index > 2 && (
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const newFeatures = [...formData.features];
                                                        newFeatures.splice(index, 1);
                                                        setFormData(prev => ({ ...prev, features: newFeatures }));
                                                    }}
                                                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                                                >
                                                    Supprimer
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => setFormData(prev => ({
                                            ...prev,
                                            features: [...prev.features, '']
                                        }))}
                                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                                    >
                                        + Ajouter une caractéristique
                                    </button>
                                </div>
                            </div>

                            {/* Garantie et livraison */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Garantie
                                    </label>
                                    <input
                                        type="text"
                                        name="warranty"
                                        value={formData.warranty}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Ex: 4 mois"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Frais de livraison (DH)
                                    </label>
                                    <input
                                        type="number"
                                        name="deliveryFee"
                                        value={formData.deliveryFee}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="30"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Boutons de navigation */}
                    <div className="flex justify-between pt-8 border-t border-gray-200">
                        {step > 1 ? (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Précédent
                            </button>
                        ) : (
                            <div></div>
                        )}

                        {step < 3 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Continuer
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                            >
                                <FaCheckCircle />
                                Publier la chaîne et la vidéo
                            </button>
                        )}
                    </div>
                </form>

                {/* Informations importantes */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <FaInfoCircle className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-blue-900 text-lg mb-2">
                                Conseils pour réussir votre chaîne
                            </h3>
                            <ul className="space-y-2 text-blue-800">
                                <li>✓ Utilisez une vidéo de haute qualité qui montre bien le produit</li>
                                <li>✓ Prenez des photos sous différents angles</li>
                                <li>✓ Soyez précis dans la description et les caractéristiques</li>
                                <li>✓ Fixez un prix compétitif</li>
                                <li>✓ Répondez rapidement aux questions des acheteurs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateChannel;