import React from 'react';
import './VerticalInformation.css';

export default function VerticalInformation(){
    return(
        <div className="VerticalInformation-folder-container">
            <div className="VerticalInformation-folder-item folder-image"></div>
            <div className="VerticalInformation-folder-item folder-title"></div>
            <div className="VerticalInformation-folder-item folder-description"></div>
            <div className="VerticalInformation-folder-item folder-footer"></div>
        </div>
    )
}