import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


export default function VerticalInformation({ image, name, location, cvLink }){
    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 2 }}>
            <Avatar 
                src={image} 
                alt={name} 
                sx={{ width: 180, height: 180, border: '4px solid white', boxShadow: 3 }} 
            />
            <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b' }}>{name}</Typography>
                <Typography variant="body2" sx={{ color: '#64748b' }}>{location}</Typography>
            </Box>
            <Button 
                variant="outlined" 
                startIcon={<DownloadIcon />}
                href={cvLink}
                download
                sx={{ borderRadius: '20px', textTransform: 'none', fontWeight: 600 }}
            >
                Descargar CV
            </Button>
        </Box>
    )
}