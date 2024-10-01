import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ image, title, description }) {
    return (
        <div className="project-card">
            <img className="project-card-image" src={image}alt={`imagen del ${title}`} />
            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
            </div>
        </div>
    );
}
