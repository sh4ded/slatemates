import React from 'react';
import Grid from '@mui/material/Grid';
import Title from './Title.js';
import Subtext from './Subtext.js';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ParentImg from './assets/parent.jpg';

const TitleText = '"It is rare these days to meet a team of teachers who care deeply. Slatemates \'impact on both my kids\' learning needs has been deep. That is why we continue with their tutors every year.."';

function Parent () {
	return (
	<>
	<div style={{
			backgroundColor: '#f7f5f4',
			width: '100%',
  			height: '50px',
  			borderTopLeftRadius: '50%',
  			borderTopRightRadius: '50%'
  		}}>
  		</div>
		<Grid container style={{
			backgroundColor: '#f7f5f4'
		}} sx={{
			flexDirection : {
				xs: 'column-reverse',
				md: 'row'
			},
			paddingRight : {
				xs: '5%',
				md: '0'
			}
		}}>
  			<Grid item style={{
  				display: 'flex', 
  				flexDirection: 'column',
  				paddingLeft: '5%'
  			}} xs={12} md={6}>
  			<Box style={{paddingTop: '5%', paddingBottom: '5%'}}>
  				<Subtext text={'PARENT'}/>
  			</Box>
  				<Typography variant='h3' style={{
  					fontWeight: '700',
  					color: 'blue',
  					lineHeight: '64px'
  				}}>
  				{TitleText}
  				</Typography>
  			<Box style={{paddingTop: '5%', paddingBottom: '5%'}}>
  				<Subtext text={'KHASTHURI SANKARA / Class 12 & 7 / Coimbatore, Tamil Nadu'} />
  			</Box>
  			<Button variant="contained" sx={{
  				backgroundColor: 'darkblue'
  			}}>See Online Tuition in Action</Button>
  			</Grid>
  			<Grid item container xs={12} md={6} style={{
  				display: 'flex',
  				flexDirection: 'column',
  				justifyContent: 'center'
  			}}>
  				<img src={ParentImg} style={{
  					width: '90%', 
  					paddingTop: '10%', 
  					paddingBottom: '10%',
  					paddingLeft: '5%'}}/>
  			</Grid>
		</Grid>
	<div style={{
			backgroundColor: '#f7f5f4',
			width: '100%',
  			height: '50px',
  			borderBottomLeftRadius: '50%',
  			borderBottomRightRadius: '50%'
  		}}>
  	</div>
	</>
	)
}

export default Parent;