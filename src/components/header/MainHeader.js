import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';


export default function MainPage() {
    return (
        <AppBar position="sticky" 
        sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)', 
            color: 'black', 
            boxShadow: 'none', 
            borderBottom: '1px solid #f1f5f9' 
            }}
        >
            <Container maxWidth="lg">
                <Toolbar sx={{ justifyContent: 'space-between', padding: '10px 0' }}>
                  
                    <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ fontWeight: 'bold', color: '#6366f1', letterSpacing: '-1px' }}
                    >
                        Ariannys Oronoz
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <Typography sx={{ cursor: 'pointer', '&:hover': { color: '#6366f1' } }}>Proyectos</Typography>
                        <Typography sx={{ cursor: 'pointer', '&:hover': { color: '#6366f1' } }}>Sobre mí</Typography>
                        <Typography sx={{ cursor: 'pointer', '&:hover': { color: '#6366f1' } }}>Contacto</Typography>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
