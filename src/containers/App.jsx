import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from './Scroll';
import CardList from '../components/CardList';
import { setSearchField } from '../actions';
import './App.css';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchField
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		searchHandler: (event) => dispatch(setSearchField(event.target.value))
	};
};

class App extends Component {
	state = {
		robots: []
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	render() {
		const { robots } = this.state;
		const { searchField, searchHandler } = this.props;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return !robots.length ? (
			<h1>Loading...</h1>
		) : (
			<div className="app-container">
				<h1 className="heading-1">RoboFriends</h1>
				<SearchBox changed={searchHandler} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
