import React from 'react';
import { Container, Grid2, Typography, Box } from '@mui/material';
import VerticalLink from './VerticalLink';

export default function VerticalLinkList() {
    const socialMediaLinks = [
        { image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', title: 'LinkedIn', url: 'https://www.linkedin.com/in/tu-perfil' },
        { image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', title: 'GitHub', url: 'https://github.com/ariannysOronoz' },
        { image: 'https://cdn-icons-png.flaticon.com/512/732/732200.png', title: 'Email', url: 'mailto:ariom0910@gmail.com' },
    ];

    return (
        <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1e293b' }}>
                ¿Hablamos?
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748b', mb: 6 }}>
                Si tienes un proyecto en mente o solo quieres saludar, ¡conéctate conmigo!
            </Typography>
            
            <Grid2 container spacing={4} justifyContent="center">
                {socialMediaLinks.map((link, index) => (
                    <Grid2 item xs={12} sm={4} key={index}>
                        <Box component="a" href={link.url} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                            <VerticalLink image={link.image} title={link.title} />
                        </Box>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
}