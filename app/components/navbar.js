import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <header className="container row navbar">
        <div className="col-xs-12">
            <h1>
                <img src="../assets/apple-icon.png" style={{ width: '75px', height: '75px' }} alt="" />
            </h1>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </nav>
        </div>
    </header>
)

export default Navbar
