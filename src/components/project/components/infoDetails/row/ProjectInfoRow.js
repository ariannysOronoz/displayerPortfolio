import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectInfoRow.css';

export default function ProjectInfoRow({ image, title, description, footer }) {
    return (
        <div className="project-info-row">
            <div className="info-row folder-image">
                <img src={image} alt={`Imagen del proyecto: ${title}`} />
            </div>
            <div className="horizontal-information">
                <div className="info-row folder-title">
                    <h3>{title}</h3>
                </div>
                <div className="info-row folder-description">
                    <p>{description}</p>
                </div>
                <div className="info-row folder-footer">
                    <Link to={footer} className="project-link">
                        Ver detalles
                    </Link>
                </div>
            </div>
        </div>
    );
}
