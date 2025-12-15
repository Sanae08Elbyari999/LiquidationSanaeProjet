// src/components/ui/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({
    placeholder = "Rechercher des produits...",
    onSearch,
    className = ""
}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className={`relative ${className}`}>
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                {query && (
                    <button
                        type="button"
                        onClick={() => setQuery('')}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                        <svg
                            className="w-5 h-5 text-gray-400 hover:text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                )}
            </div>
            <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 hidden"
            >
                Rechercher
            </button>
        </form>
    );
};

export default SearchBar;