// src/components/ui/Loader.jsx
import React from 'react';

const Loader = ({ size = 'md', text = "Chargement..." }) => {
    const sizes = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className={`loader-spinner ${sizes[size]}`}></div>
            {text && (
                <p className="mt-2 text-sm text-gray-600">{text}</p>
            )}
        </div>
    );
};

export default Loader;