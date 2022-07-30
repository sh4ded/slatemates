import React from 'react';
import Grid from '@mui/material/Grid';
import HeroImage from './assets/hero.jpg';
import Title from './Title.js';
import Subtitle from './Subtitle.js';

function Hero () {
  return (
  <>
  <Grid container>
  <Grid item xs={12} md={6} style={{backgroundColor: 'darkblue'}} >
    <Title />
    <Subtitle />
  </Grid>
  <Grid item xs={12} md={6} >
    <img src={HeroImage} style={{width: '100%'}}/>
  </Grid>
  </Grid>
  </>) 
}

export default Hero;