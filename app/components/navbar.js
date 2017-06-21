import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <header className="container navbar">
        <h1>brand.</h1>
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
        </nav>
    </header>
)

export default Navbar
