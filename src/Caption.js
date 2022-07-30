import React from 'react';

function Caption ({text}) {
	return (
	<div>
	<span style={{
		color: 'black', 
		fontSize: '30px',
		fontFamily: 'Helvetica',
		fontWeight: '600',
		lineHeight: '30px',
		letterSpacing: '1px'
		}}>
	{text}
	</span>
	</div>)
}

export default Caption;