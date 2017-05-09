import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Home from '../views/home'
import About from '../views/about'
import StylesIgnored from '../styles/main.css'

const Routes = (
    <Router>
        <div>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Footer />
        </div>
    </Router>
)

export default Routes
