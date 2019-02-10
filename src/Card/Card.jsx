import React from 'react';
import './Card.css';

const Card = () => (
	<div className="card">
		<img src="https://robohash.org/JaneDoe?size=200x200" alt="Jane Doe" />
		<div>
			<h2>Jane Doe</h2>
			<p>jane.doe@email.com</p>
		</div>
	</div>
);

export default Card;
