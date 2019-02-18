import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from './Scroll';
import CardList from '../components/CardList';
import { setSearchField, requestRobots } from '../actions';
import './App.css';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		searchHandler: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	};
};

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, searchHandler, robots, isPending } = this.props;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return isPending ? (
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
