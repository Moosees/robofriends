import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from './Scroll';
import CardList from '../components/CardList';
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
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		return !robots.length ? (
			<h1>Loading...</h1>
		) : (
			<div className="app-container">
				<h1 className="heading-1">RoboFriends</h1>
				<SearchBox changed={this.searchHandler} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
