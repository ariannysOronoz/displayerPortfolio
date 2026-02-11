import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Grid2, Typography, Button, Box, Paper, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import projectData from "../../projectData";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);


  useEffect(() => {
    const foundProject = projectData.find(p => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  if (!project) return <Typography>Cargando...</Typography>;

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Botón para volver */}
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate(-1)}
        sx={{ mb: 4, color: '#64748b' }}
      >
        Volver a Proyectos
      </Button>

      <Grid2 container spacing={6}>
        {/* Columna Izquierda: Imagen */}
        <Grid2 item xs={12} md={7}>
          <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </Paper>
        </Grid2>

        {/* Columna Derecha: Información */}
        <Grid2 item xs={12} md={5}>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1e293b' }}>
              {project.title}
            </Typography>
            
            <Divider sx={{ mb: 3, width: '60px', height: '4px', bgcolor: '#6366f1', borderRadius: 1 }} />
            
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 4 }}>
              {project.description}
            </Typography>

            <Box sx={{ mt: 'auto' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: '#1e293b' }}>
                Tecnologías utilizadas:
              </Typography>
              {/* Aquí podrías mapear chips de tecnologías más adelante */}
              <Typography variant="body2" color="text.secondary">
                React • Material UI • React Router
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}