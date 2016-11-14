import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from 'pages/App';
import Homepage from 'pages/Homepage';
import Archives from 'pages/Archives';
import Settings from 'pages/Settings';
import Todos from 'pages/Todos';

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Homepage}></IndexRoute>
			<Route path="todos" component={Todos}></Route>
			<Route path="archives(/:article)" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>, 
document.getElementById('app'));