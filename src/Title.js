import React from 'react';

function Title ({text, color, fontSize, lineHeight}) {
	return (
	<div>
	<span style={{
		color: color, 
		fontSize: fontSize, 
		fontWeight: '900', 
		fontFamily: "'Roboto', sans-serif",
		letterSpacing: '1px',
		lineHeight: lineHeight
	}}>
	{text}
	</span>
	</div>)
}

export default Title;