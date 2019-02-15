import React from 'react';

const style = {
	overflowY: 'scroll',
	border: '5px solid #333',
	height: '70vh',
	width: '100%',
	backgroundColor: '#109e99'
};

const Scroll = (props) => <div style={style}>{props.children}</div>;

export default Scroll;
