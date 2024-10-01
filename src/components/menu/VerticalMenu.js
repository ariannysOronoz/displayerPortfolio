import React from 'react';
import './VerticalMenu.css';

export default function VerticalMenu({ image, title }) {
    return (
        <div className="menu-card">
            <div className="menu-card-body">
                <div className="menu-card-image">
                    <img src={image} alt={title} /> {/* Muestra la imagen */}
                </div>
                <div className="menu-card-title">
                    {title}
                </div>
            </div>
        </div>
    );
}
