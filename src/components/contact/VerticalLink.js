import React from 'react';
import './VerticalLink.css';

export default function VerticalLink ({ image, title}){
    return(
        <div className="VerticalLink-folder-container">
            <div className="VerticalLink-folder-item folder-image">
            <img src={image} alt={title} /> 
            </div>
            <div className="VerticalLink-folder-item folder-footer">
                <h1>{title}</h1>
            </div>
        </div>
    )
};