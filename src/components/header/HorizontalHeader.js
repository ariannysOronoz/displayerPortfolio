import React from 'react';
import './HorizontalHeader.css';

export default function HorizontalHeader({ title }) {
    return (
        <div className="header-container">
            <div className="title-wrapper">
                <h1 className="header-title">{title}</h1>
            </div>
        </div>
    );
};