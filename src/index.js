import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from 'components/App';
import App2 from 'components/App2';

render(
	<Router history={hashHistory}>
		<Route path="/" component={App2}></Route>
	</Router>, 
document.getElementById('app'));