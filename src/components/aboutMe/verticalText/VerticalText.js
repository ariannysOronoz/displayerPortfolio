import React from 'react';
import { Box, Typography } from '@mui/material';

export default function VerticalText({ description }){
    return(
        <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: '#1e293b' }}>
                Sobre mí
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, fontSize: '1.1rem' }}>
                {description}
            </Typography>
        </Box>
    );
}