import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectInfoColumn from '../../components/infoDetails/column/ProjectInfoColumn';
import ProjectFilterMenu from '../../menu/menu/ProjectFilterMenu';
import './ProjectDetailsPage.css';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  const projectData = [
    {
      id: 1,
      image: 'https://example.com/image1.jpg',
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      footerLink: '/details/1',
    },
    {
      id: 2,
      image: 'https://example.com/image1.jpg',
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      footerLink: '/details/2',
    },
    {
      id: 3,
      image: 'https://example.com/image1.jpg',
      title: 'Projeto 3',
      description: 'Descrição do Projeto 3',
      footerLink: '/details/3',
    },
    {
      id: 4,
      image: 'https://example.com/image1.jpg',
      title: 'Projeto 4',
      description: 'Descrição do Projeto 4',
      footerLink: '/details/4',
    },
    {
      id: 5,
      image: 'https://example.com/image1.jpg',
      title: 'Projeto 5',
      description: 'Descrição do Projeto 5',
      footerLink: '/details/5',
    }
  ];

  useEffect(() => {
    const foundProject = projectData.find(p => p.id === parseInt(id));
    setProject(foundProject);
    console.log('Proyecto encontrado:', foundProject);
  }, [id]);

  const handleProjectSelect = (id) => {
    const foundProject = projectData.find(p => p.id === id);
    setProject(foundProject);
  };

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="project-details-container">
      <ProjectInfoColumn 
        image={project.image}
        title={project.title}
        description={project.description}
      />
      <ProjectFilterMenu 
        onProjectSelect={handleProjectSelect}
      />
    </div>
  );
}
