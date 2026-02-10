import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
                        component={Link}
                        to="/" 
                        sx={{ fontWeight: 'bold', color: '#6366f1', letterSpacing: '-1px' , textDecorationColor:'none'}}
                    >
                        Ariannys Oronoz
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Button 
                            component={Link} 
                            to="/" 
                            sx={{ color: '#475569', textTransform: 'none', fontWeight: 500, '&:hover': { color: '#6366f1' } }}
                        >
                            Proyectos
                        </Button>
                        <Button 
                            component={Link} 
                            to="/sobre mi"
                            sx={{ color: '#475569', textTransform: 'none', fontWeight: 500, '&:hover': { color: '#6366f1' } }}
                        >
                            Sobre mí
                        </Button>
                        <Button 
                            variant="contained"
                            component={Link} 
                            to="/contacto" 
                            sx={{ 
                                backgroundColor: '#1e293b', 
                                color: 'white', 
                                textTransform: 'none', 
                                borderRadius: '8px',
                                ml: 1,
                                '&:hover': { backgroundColor: '#475569' } 
                            }}
                        >
                            Contacto
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
