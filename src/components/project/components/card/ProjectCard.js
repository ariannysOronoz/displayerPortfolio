import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';

export default function ProjectCard({ image, title, description }) {
  const projectUrl = "https://ariannysoronoz.github.io/CatPhotoApp/";
  const catAppImage = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800";
    return (
        <Card 
      sx={{ 
        height: '100%', 
        borderRadius: 4, 
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)', 
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 30px rgba(0,0,0,0.12)', 
        },
      }}
    >
      <CardActionArea 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'stretch', 
        }}
        >

        {/* Contenedor de la imagen */}
        <Box sx={{ width: '100%', height: '200px', overflow: 'hidden' }}>
          <img 
            src={image && image.startsWith('http') ? image : catAppImage} 
            alt={title}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', // Esto hace que la imagen llene el recuadro sin deformarse
              display: 'block'
            }}
            onError={(e) => { e.target.src = catAppImage; }}
          />
          </Box>
        

        {/* Contenido de la tarjeta */}
        <CardContent sx={{ flexGrow: 1, width: '100%' }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div" 
            sx={{ fontWeight: 700, color: '#1e293b' }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#64748b',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    );
}
