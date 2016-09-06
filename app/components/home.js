import React, { Component } from 'react';
import DemoImage from '../assets/apple-touch-icon.png';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { name: 'Bob' };
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		// Do something when loaded
	}

	handleSearch(event) {
		event.preventDefault();
		if (this.refs.search.value !== null) {
			this.setState({ name: this.refs.search.value });
		}
	}

	render() {
		const { name } = this.state;

		return (
			<div className="text-center">
				<h1>React Starter <small>Client</small></h1>

				<h2>Name: {name}</h2>

				{/* Example form with action */}
				<form className="search" onSubmit={this.handleSearch}>
					<input ref="search" type="search" placeholder="Search" />
					<button type="submit">Search</button>
				</form>

				{/* Example image with file-loader */}
				<br />
				<img src={DemoImage} alt="Black box" />
			</div>
		);
	}
}

export default Home;
