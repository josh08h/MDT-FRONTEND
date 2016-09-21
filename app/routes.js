import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import About from './components/About';
import Referral from './containers/Referral';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={About} />
		<Route path="/about" component={About} />
		<Route path="/Referral" component={Referral} />
	</Route>
);
