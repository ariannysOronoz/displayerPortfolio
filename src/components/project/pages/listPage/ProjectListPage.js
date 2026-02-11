import React from 'react';
import { Grid2 as Grid, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import projectData from "../../projectData";
import ProjectCard from '../../components/card/ProjectCard';

export default function ProjectListPage() {
  
  const navigate = useNavigate();
  const handleProjectClick = (id) => {
    navigate(`/details/${id}`);
  };  
  

  return (
      <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
          Mis Proyectos
        </Typography>
        <Typography color="text.secondary">
          Explora mis trabajos más recientes
        </Typography>
      </Box>
      
      <Grid container spacing={5}> 
        {projectData.map((data) => (
          <Grid
            item 
            size= {{xs:12, sm:6, md:4 }}// Usando la prop 'size' de Grid2
            key={data.id} 
            onClick={() => handleProjectClick(data.id)}
            sx={{ cursor: 'pointer' }}
          >
            <ProjectCard
              image={data.image}
              title={data.title}
              description={data.description}
            />
          </Grid>
        ))}
      </Grid>
      </Container>
  );
}