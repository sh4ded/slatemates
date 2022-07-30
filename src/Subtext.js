import React from 'react';
import Typography from '@mui/material/Typography';

function Subtext ({text}) {
	return (
	<Typography variant='h5' style={{
  					fontWeight: '500'
  				}}>
  	{text}
  	</Typography>
	)
}

export default Subtext;