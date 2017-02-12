import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
    <div>
        <h1><Link to="/">brand.</Link></h1>
        <nav className="nav-inline">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
        </nav>
    </div>
);

export default Navbar;
