import React from 'react';
import {ReactRouter, Router, Route, IndexRoute, browserHistory} from 'react-router';
import Main from '../components/main';
import Home from '../components/home';

var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home}></IndexRoute>
		</Route>
	</Router>
);

module.exports = routes;