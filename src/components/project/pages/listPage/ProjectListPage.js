import React from 'react';
import { Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProjectCard from "../../components/card/ProjectCard";
import './ProjectListPage.css';

export default function ProjectListPage() {
  const navigate = useNavigate();
  
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
      image: 'https://example.com/image2.jpg',
      title: 'Projeto 2',
      description: 'Descrição do Projeto 2',
      footerLink: '/details/2',
    },
    {
      id: 3,
      image: 'https://example.com/image3.jpg',
      title: 'Projeto 3',
      description: 'Descrição do Projeto 3',
      footerLink: '/details/3',
    },
    {
      id: 4,
      image: 'https://example.com/image4.jpg',
      title: 'Projeto 4',
      description: 'Descrição do Projeto 4',
      footerLink: '/details/4',
    },
    {
      id: 5,
      image: 'https://example.com/image5.jpg',
      title: 'Projeto 5',
      description: 'Descrição do Projeto 5',
      footerLink: '/details/5',
    },
    {
      id: 6,
      image: 'https://example.com/image6.jpg',
      title: 'Projeto 6',
      description: 'Descrição do Projeto 6',
      footerLink: '/details/6',
    }
  ];
  
  const handleProjectClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="project-page-container">
      <Grid2 container spacing={5}> 
        {projectData.map((data) => (
          <Grid2 
            item 
            xs={12} sm={6} md={4}
            key={data.id} 
            onClick={() => handleProjectClick(data.id)}
          >
            <ProjectCard
              image={data.image}
              title={data.title}
              description={data.description}
            />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
}