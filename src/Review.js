import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import './App.css';

function Review () {
	return (
	<>
		<Grid container style={{
			backgroundColor: 'white',
		 	textAlign: 'center', 
		 	justifyContent: 'space-between', 
		 	alignItems: 'center', 
		 	padding: '3% 15% 3% 15%'
		 	 }}>
  			<Grid item xs={6} md={4} style={{display: 'flex', justifyContent: 'flex-start'}}>
  				<ReviewText text={'40000+ Tutoring hours'} />
  			</Grid>
  			<Grid item container xs={6} md={4} style={{display: 'flex',
  			flexDirection: 'column'
  		}}>
  			<Box className='popup'>
  			<Typography variant="body1" style={{
  					fontWeight: '700',
  					fontSize: '24px',
  					lineHeight: '30px'
  				}}>
  				5-star
  				<span>  
  				<i>
  				<span style={{color: 'rgb(66, 133, 244)'}}> G </span> 
  				<span style={{ color: 'rgb(234, 67, 53)' }}>o </span> 
  				<span style={{ color: 'rgb(251, 188, 4)' }}>o </span> 
  				<span style={{ color: 'rgb(66, 133, 244)' }}>g </span> 
  				<span style={{ color: 'rgb(52, 168, 94)' }}>l </span> 
  				<span style={{ color: 'rgb(234, 67, 53)' }}>e </span>
  				</i>
  				  Reviews
  				</span> 
  		</Typography>
  		</Box>
  		<Box style={{color: 'orange'}}>
  				<StarIcon color="inherit"/>
  				<StarIcon color="inherit"/>
  				<StarIcon color="inherit"/>
  				<StarIcon color="inherit"/>
  				<StarIcon color="inherit"/>
  		</Box>
  			</Grid>
  			<Grid item xs={0} md={4} sx={{display: {xs: 'none', md: 'flex'} }} style={{ maxWidth: '25%', flexBasis: '25%' }}>
  				<ReviewText text={'Trusted by 3000+ Students'} />
  			</Grid>
		</Grid>
	</>
	)
}

function ReviewText ({text}) {
	return (
		<Typography variant="body1" style={{
  					fontWeight: '700',
  					fontSize: '24px',
  					lineHeight: '30px'
  				}}>
  				{text}
  		</Typography>
		)
}

export default Review;