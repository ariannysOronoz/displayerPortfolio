import React from 'react';
import VerticalLink from './VerticalLink';
import './VerticalLinkList.css';

export default function VerticalLinkList() {
    const socialMediaLinks = [
        { 
            image: 'ruta/a/imagen/linkedin.png', 
            title: 'LinkedIn', 
            url: 'https://www.linkedin.com/in/tu-perfil' 
        },
        { 
            image: 'ruta/a/imagen/github.png', 
            title: 'GitHub', 
            url: 'https://github.com/ariannysOronoz' 
        },
        { 
            image: 'ruta/a/imagen/email.png', 
            title: 'Email', 
            url: 'mailto:ariom0910@gmail.com' 
        },
    ];
    return (
        <div className="socialMediaLinks">
            {socialMediaLinks.map((link, index) => (
                <a 
                href={link.url} 
                key={index} 
                target="_blank" 
                rel="noopener noreferrer">
                    <VerticalLink 
                    image={link.image} 
                    title={link.title} 
                    />
                </a>
            ))}
        </div>
    );
}
