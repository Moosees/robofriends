import React, { Component } from 'react';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';
import CardList from './Components/CardList';
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
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
