import React from 'react';
import Grid from '@mui/material/Grid';
import HeroImage from './assets/hero.jpg';
import Title from './Title.js';
import Subtitle from './Subtitle.js';
import Typography from '@mui/material/Typography';


const HeroText = 'One-to-one online tuitions from home';
const SubtitleText = 'Keep your child’s studies on track with interactive online tuition';

function Hero () {
  return (
  <>
  <Grid container >
  <Grid item xs={12} md={6} sx={{
    display: 'flex', 
    justifyContent: 'center', 
    backgroundColor: 'darkblue', 
    flexDirection: 'column',
    height: {
      xs: '400px',
      md: 'auto'
    },
    textAlign: {
      xs: 'center',
      md: 'left'
    },
    paddingLeft: {
      xs: '5%'
    },
    paddingRight: {
      xs: '5%',
      md: '0'
    }
  }} >
    <Typography variant='h3' style={{
            fontWeight: '700',
            color: 'pink',
            fontSize: '60px',
            lineHeight: '64px'
          }}>
          {HeroText}
          </Typography>
    <Typography variant='h4' sx={{
      maxWidth: {
        xs: '100%',
        md: '75%'
      }
    }} style={{
      marginTop: '10px',
      color: 'white',
      lineHeight: '40px',
      fontWeight: '500',
      fontSize: '28px'
    }}>
      {SubtitleText}
    </Typography>
  </Grid>
  <Grid item xs={12} md={6} sx={{display: {xs: 'none', md: 'flex'} }}>
    <img src={HeroImage} style={{width: '100%', height: '100%'}}/>
  </Grid>
  </Grid>
  </>) 
}

export default Hero;