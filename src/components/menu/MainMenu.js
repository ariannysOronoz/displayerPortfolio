import React from 'react';
import { Link } from 'react-router-dom';
import VerticalMenu from './VerticalMenu';
import home from '../assets/home.png';
import contact from '../assets/contact.png';
import aboutme from '../assets/aboutme.png';
import './MainMenu.css';

export default function MainMenu() {
    const menuItems = [
        { id: 1, image: home , title: 'Home', path: '/' }, // Cambia la ruta a tu imagen
        { id: 2, image: aboutme, title: 'About', path: '/sobre mi' }, // Cambia la ruta a tu imagen
        { id: 3, image: contact, title: 'Contact', path: '/contacto' } // Cambia la ruta a tu imagen
    ];

    return (
        <div className="sidebar-menu-container">
            <ul className="menu-items-list">
                {menuItems.map(item => (
                    <li 
                    key={item.id} 
                    className="menu-item"
                    >
                        <Link to={item.path}>
                            <VerticalMenu 
                                key={item.id} 
                                image={item.image} // Pasa la imagen
                                title={item.title} 
                            />
                        </Link>   
                    </li>
                ))}
            </ul>
        </div>
    );
};
