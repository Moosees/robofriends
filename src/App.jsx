import React, { Component } from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';
import './App.css';

class App extends Component {
	state = {
		robots: [],
		searchfield: ''
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	searchHandler = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		if (this.state.robots.length === 0) {
			return <h1 className="heading-1">Loading...</h1>;
		} else {
			return (
				<div className="app-container">
					<h1 className="heading-1">RoboFriends</h1>
					<SearchBox changed={this.searchHandler} />
					<CardList robots={filteredRobots} />
				</div>
			);
		}
	}
}

export default App;
