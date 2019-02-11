import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; // Dummy data

class App extends Component {
	state = {
		robots: robots,
		searchfield: ''
	};

	searchHandler = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		return (
			<div>
				<h1>RobotFriends</h1>
				<SearchBox changed={this.searchHandler} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
