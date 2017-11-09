import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <header className="container row navbar">
        <div className="col-xs-12">
            <h1>brand.</h1>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </nav>
        </div>
    </header>
)

export default Navbar
