import React from 'react'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Home from '../views/home'
import About from '../views/about'
import StylesIgnored from '../styles/main.css'

ReactGA.initialize('UA-00000000-0')

const history = createHistory()
history.listen((location) => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
})

const Routes = (
    <Router history={history}>
        <div>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Footer />
        </div>
    </Router>
)

export default Routes
