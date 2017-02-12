import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from '../components/main';
import Home from '../views/home';
import About from '../views/about';

const routes = (
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
        </Route>
    </Router>
);

module.exports = routes;
