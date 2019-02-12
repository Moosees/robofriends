import React, { Component } from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import './App.css';
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
			<div className="app-container">
				<h1 className="heading-1">RobotFriends</h1>
				<SearchBox changed={this.searchHandler} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
