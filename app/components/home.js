import React, { Component } from 'react';
import DemoImage from '../assets/images/apple-touch-icon.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Bob' };
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        // Do something when loaded
    }

    handleInput(e) {
        this.setState({ name: e.target.value });
    }

    handleSearch(e) {
        e.preventDefault();
        // Do something with form data in state
    }

    render() {
        const { name } = this.state;

        return (
            <div className="text-center">
                <h1>React Starter <small>Client</small></h1>

                <h2>Name: {name}</h2>

                {/* Example form with action */}
                <form className="search" onSubmit={this.handleSearch}>
                    <input onChange={this.handleInput} type="search" placeholder="Search" />
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
