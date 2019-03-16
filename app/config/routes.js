import React from 'react'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'
import Navbar from 'Components/navbar'
import Footer from 'Components/footer'
import Home from 'Views/home'
import About from 'Views/about'
import ScrollTop from 'Components/scrollTop'
import '../styles/main.css'

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
            <ScrollTop />
        </div>
    </Router>
)

export default Routes
