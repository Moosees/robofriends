import React from 'react';
import Card from './Card';
import './CardList.css';

const App = ({ robots }) => {
	const cardArray = robots.map((robot) => (
		<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
	));
	return <div className="card-container">{cardArray}</div>;
};

export default App;
