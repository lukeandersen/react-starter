import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { name: 'Bob' }
    }

    componentDidMount() {
        // Do something when loaded
    }

    render() {
        const { name } = this.state
        return (
            <div className="container row">
                <div className="col-xs-12 col-md-8">

                    <h1 className="section-title">Style guide</h1>
                    <p>{name} ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <hr />

                    <h1>Heading one</h1>
                    <h2>Heading two</h2>
                    <h3>Heading three</h3>
                    <h4>Heading four</h4>
                    <p>Lorem ipsum dolor sit amet, <strong>consectetur adipisicing</strong> elit, sed do eiusmod <em>tempor incididunt</em> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <a href="#link">voluptate velit esse</a> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <hr />

                    <h3>Buttons</h3>
                    <button className="btn">Default</button>
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-secondary">Secondary</button>
                    <br /><br />
                    <button className="btn btn-default btn-sm">Small</button>

                    <br /><br /><br />

                    <h3>Forms</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="input-1">Form label <span className="danger">*</span></label>
                            <p className="label-extra">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <input type="text" id="input-1" placeholder="ie. some placeholder text" />
                        </div>
                        <div className="form-group danger-group">
                            <label htmlFor="input-2">Input with error <span className="danger">*</span></label>
                            <p className="label-extra">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <input type="text" id="input-2" />
                            <div className="help-text">Some help text or error message</div>
                        </div>
                        <div className="form-group danger-group">
                            <label htmlFor="input-3">Range slider input</label>
                            <p className="label-extra">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <input className="range-slider" type="range" id="input-3" min="5000" max="50000" step="1000" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-8">Custom input icons</label>
                            <select name="" id="input-8">
                                <option value="Hello">Select something from this list</option>
                                <option value="World">You rock!</option>
                            </select>
                            <input type="search" placeholder="Type your search and press enter" />
                        </div>
                        <div className="form-group">
                            <div className="form-checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div>
                                    <label htmlFor="checkbox">Do you agree with our terms and conditions? <span className="danger">*</span></label>
                                    <p className="label-extra">View our terms and conditions document <a href="/">here</a>.</p>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <p className="label">Select something to do with something</p>
                            <p className="label-extra">Select one of the options below.</p>
                            <label htmlFor="radio-1" name="test" className="form-radio">
                                <input type="radio" name="test" id="radio-1" />
                                <span className="label-extra">Option 1</span>
                            </label>
                            <label htmlFor="radio-2" name="test" className="form-radio">
                                <input type="radio" name="test" id="radio-2" />
                                <span className="label-extra">Option 2</span>
                            </label>
                            <label htmlFor="radio-3" name="test" className="form-radio">
                                <input type="radio" name="test" id="radio-3" />
                                <span className="label-extra">Option 3</span>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="input-5">Got a story to tell?</label>
                            <textarea name="" id="input-5" rows="5" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </div>
                    </form>

                    <br />

                    <h3>Alert</h3>
                    <div className="alert">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id expedita, accusantium blanditiis, aut minima mollitia earum, nostrum nemo quibusdam repudiandae veniam ullam dicta velit quae placeat ex quasi iure possimus.</p>
                        <span className="alert-badge">&times;</span>
                    </div>
                    <div className="alert alert-danger">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id expedita, accusantium blanditiis, aut minima mollitia earum, nostrum nemo quibusdam repudiandae veniam ullam dicta velit quae placeat ex quasi iure possimus.</p>
                        <span className="alert-badge">!</span>
                    </div>
                    <div className="alert alert-success">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id expedita, accusantium blanditiis, aut minima mollitia earum, nostrum nemo quibusdam repudiandae veniam ullam dicta velit quae placeat ex quasi iure possimus.</p>
                        <span className="alert-badge">&#x2713;</span>
                    </div>

                    <br />

                    <h3>Card</h3>
                    <div className="card m-b-1">
                        <h3 className="m-b-1">Need some help?</h3>
                        <p className="h5 text-light">Don’t be afraid, we’re here to help.</p>
                        <h3 className="m-b-0">13 28 83</h3>
                    </div>

                    <br />

                    <h3>Stepper</h3>
                    <div className="stepper">
                        <button className="completed">1</button>
                        <button className="completed">2</button>
                        <button disabled>3</button>
                        <button disabled>4</button>
                        <button disabled>5</button>
                        <span className="progress" style={{ width: '35%' }} />
                    </div>

                    <br /><br /><br /><br />

                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="card m-b-1">
                        <h3 className="m-b-1">Need some help?</h3>
                        <p className="h5 text-light">Don’t be afraid, we’re here to help.</p>
                        <h3 className="m-b-0">13 28 83</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
