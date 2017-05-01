import React from 'react';
import { Link } from 'react-router';

export default class GlobalNav extends React.Component{
	render(){
		const { location } = this.props;
		const homepageClass = location.pathname === "/" ? "active" : "";
		const todosClass = location.pathname.match(/^\/todos/) ? "active" : "";
		const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
		const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
		const fluxTodosClass = location.pathname.match(/^\/flux-todos/) ? "active" : "";

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">

					<ul className="nav navbar-nav">
						<li className={homepageClass}><Link to="/">Homepage</Link></li>
						<li className={todosClass}><Link to="todos">Todos</Link></li>
						<li className={archivesClass}><Link to="archives" activeClassName="archivesActive">Archives</Link></li>
						<li className={fluxTodosClass}><Link to="flux-todos">Flux Todos</Link></li>
						<li className={settingsClass}><Link to="settings">Settings</Link></li>
					</ul>

				</div>
			</nav>
		)
	}
}

/*

Another way to check if a certain route is active is to use props.history:

this.props.history.isActive("archives"); <- Will automatically have true or false

*/