import React from 'react';
import './ProjectInfoColumn.css';

export default function ProjectInfoColumn({ image, title, description }) {
    return (
        <div className="project-info-column">
            {/* Container for the project image */}
            <div className="info-column project-image">
                <img src={image} alt="Column image Project" /> 
            </div>
            {/* Container for the project title */}
            <div className="info-column project-title">
                <h2>{title}</h2>
            </div>
             {/* Container for the project description */}
            <div className="info-column project-description">
                <p>{description}</p>
            </div>
        </div>
    );
}
