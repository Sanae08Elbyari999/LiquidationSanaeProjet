// src/components/shared/LanguageSwitcher.jsx
import React, { useState } from 'react';

const LanguageSwitcher = () => {
    const [currentLanguage, setCurrentLanguage] = useState('fr');
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'ar', name: 'العربية', flag: '🇲🇦' },
        { code: 'en', name: 'English', flag: '🇺🇸' }
    ];

    const currentLang = languages.find(lang => lang.code === currentLanguage);

    const handleLanguageChange = (langCode) => {
        setCurrentLanguage(langCode);
        setIsOpen(false);
        // Stocker dans localStorage
        localStorage.setItem('preferred-language', langCode);
        // Ici on pourrait déclencher un changement de langue global
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
                <span className="text-lg">{currentLang.flag}</span>
                <span className="hidden sm:block text-sm font-medium">{currentLang.code.toUpperCase()}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${currentLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                }`}
                        >
                            <span className="text-lg">{language.flag}</span>
                            <span className="flex-1 font-medium">{language.name}</span>
                            {currentLanguage === language.code && (
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;