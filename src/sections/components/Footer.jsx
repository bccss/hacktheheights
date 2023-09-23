// Footer.js
import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      bgcolor="#33396F" 
      py={3}
      px={3} 
      sx={{
        color: 'white'
      }}
      id="Contact"
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h6">
            &copy; {new Date().getFullYear()} Hack-the-Heights
          </Typography>
        </Grid>
        <Grid item>
        <Link href="https://www.facebook.com/bostoncollegecss/" color="inherit" sx={{ mx: 1 }}>
            <Facebook 
                color="inherit"
                sx={{
                    fontSize: {
                        xs: '1.5rem', 
                        md: '2rem',  
                        lg: '2.5rem' 
                    }
                }}
            />
        </Link>
        <Link href="https://twitter.com/bccssociety/" color="inherit" sx={{ mx: 1 }}>
            <Twitter 
                color="inherit"
                sx={{
                    fontSize: {
                        xs: '1.5rem', 
                        md: '2rem',  
                        lg: '2.5rem' 
                    }
                }}
            />
        </Link>
        <Link href="https://www.instagram.com/bccssociety/" color="inherit" sx={{ mx: 1 }}>
            <Instagram 
                color="inherit"
                sx={{
                    fontSize: {
                        xs: '1.5rem', 
                        md: '2rem',  
                        lg: '2.5rem' 
                    }
                }}
            />
        </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
