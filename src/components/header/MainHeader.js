import React from 'react';
import HorizontalHeader from './HorizontalHeader';
import './MainHeader.css';



export default function MainPage() {
    const headerItems = [
        { id: 1, 
          title: 'Ariannys Oronoz'
        } 
    ];

    return (
        <div className="Main-header-container">
            {/* topo */}
            <div className="header-list">
                {headerItems.map(item => (
                    <HorizontalHeader title={item.title} />
                ))}
            </div>
        </div>
    );
};
