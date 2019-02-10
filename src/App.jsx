import React from 'react';
import Card from './Card/Card';
import { robots } from './robots';

const App = () => {
	const cardComponent = robots.map(robot => (
		<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
	));
	return <div>{cardComponent}</div>;
};

export default App;
