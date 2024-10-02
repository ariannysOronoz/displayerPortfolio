import React from 'react';
import './VerticalText.css';

export default function VerticalText({ description }){
    return(
        <div className="VerticalText-folder-container">
            <div className="VerticalText-folder-item folder-description">
                {description}
            </div>
        </div>
    )
}