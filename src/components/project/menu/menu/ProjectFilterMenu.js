import React from 'react';
import ProjectInfoRow from '../../components/infoDetails/row/ProjectInfoRow';
import './ProjectFilterMenu.css';

export default function ProjectFilterMenu({ onProjectSelect }) {
    const handleClick = (id) => {
        console.log('Proyecto seleccionado:', id);
        onProjectSelect(id);
    };

    const menuItems = [
        {
            id: 1,
            image: 'https://example.com/image1.jpg',
            title: 'Projeto row 1',
            description: 'Descrição do Projeto 1',
            footerLink: '/details/1',
        },
        {
            id: 2,
            image: 'https://example.com/image2.jpg',
            title: 'Projeto row 2',
            description: 'Descrição do Projeto 2',
            footerLink: '/details/2',
        },
        {
            id: 3,
            image: 'https://example.com/image3.jpg',
            title: 'Projeto row 3',
            description: 'Descrição do Projeto 3',
            footerLink: '/details/3',
        },
        {
            id: 4,
            image: 'https://example.com/image4.jpg',
            title: 'Projetorow 4',
            description: 'Descrição do Projeto 4',
            footerLink: '/details/4',
        },
        {
            id: 5,
            image: 'https://example.com/image5.jpg',
            title: 'Projet row 5',
            description: 'Descrição do Projeto 5',
            footerLink: '/details/5',
        },
    ];

    return (
        <div className="menu-project">
            <ul className="menu-items-list">
                {menuItems.map(item => (
                    <li 
                      key={item.id} 
                      onClick={() => handleClick(item.id)}
                    >
                        <ProjectInfoRow 
                          image={item.image} 
                          title={item.title}  
                          description={item.description}
                          footer={item.footer} 
                        />  
                    </li>
                ))}
            </ul>
        </div>
    );
}
