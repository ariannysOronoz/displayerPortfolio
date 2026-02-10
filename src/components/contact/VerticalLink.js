import React from 'react';
import { Paper, Typography, Box, Avatar } from '@mui/material';

export default function VerticalLink({ image, title }) {
    return (
        <Paper 
            elevation={0} 
            sx={{ 
                p: 3, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: 2,
                borderRadius: 4,
                border: '1px solid #f1f5f9',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                    borderColor: '#6366f1'
                }
            }}
        >
            <Avatar 
                src={image} 
                alt={title} 
                variant="rounded"
                sx={{ width: 60, height: 60, bgcolor: '#f8fafc', p: 1 }} 
            />
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b' }}>
                {title}
            </Typography>
        </Paper>
    );
}