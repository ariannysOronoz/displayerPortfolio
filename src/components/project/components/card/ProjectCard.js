import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';

export default function ProjectCard({ image, title, description }) {
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
      <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {/* Contenedor de la imagen */}
        <CardMedia
          component="img"
          height="180"
          image={image || 'https://via.placeholder.com/400x200?text=Sin+Imagen'} 
          alt={title}
          sx={{ 
            objectFit: 'cover',
            backgroundColor: '#f1f5f9' 
          }}
        />

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
