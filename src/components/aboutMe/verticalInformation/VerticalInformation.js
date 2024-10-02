import React from 'react';
import './VerticalInformation.css';

export default function VerticalInformation({ image, name, location, cvLink }){
    return(
        <div className="VerticalInformation-folder-container">
            <div className="VerticalInformation-folder-item folder-image">
                <img src={image} alt="profile picture" />
            </div>
            <div className="VerticalInformation-folder-item folder-title">
                {name}
            </div>
            <div className="VerticalInformation-folder-item folder-description">
                {location}
            </div>
            <div className="VerticalInformation-folder-item folder-footer">
                <a href={cvLink} download>Descargar CV</a>
            </div>
        </div>
    )
}