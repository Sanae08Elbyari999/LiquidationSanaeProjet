// src/components/shared/VideoCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const VideoCard = ({ video }) => {
    return (
        <div className="video-card bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
            {/* Thumbnail */}
            <div className="relative">
                <Link to={`/video/${video.id}`}>
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover video-thumbnail"
                    />
                </Link>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                </div>
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    EN DIRECT
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <Link to={`/video/${video.id}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        {video.title}
                    </h3>
                </Link>

                <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-green-600">{video.price.toLocaleString()} DH</span>
                    <span className="text-sm text-gray-500">{video.views.toLocaleString()} vues</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>Par {video.seller}</span>
                    <span>{video.location}</span>
                </div>

                <div className="flex space-x-2">
                    <Button variant="primary" size="sm" className="flex-1">
                        Voir détails
                    </Button>
                    <Button variant="outline" size="sm">
                        💖
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;