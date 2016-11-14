import React from 'react';
import GlobalNav from '../components/global-nav';

export default class App extends React.Component{

	navigate(){
		this.props.history.pushState(null, "/");
		/* pushState can be replaced with replaceState, doesn't get history arrows */
		/* Can be used as onClick={this.navigate.bind(this)} */
	}
	render(){
		return (
		
			<div className="container">
				
				<GlobalNav location={this.props.location} />
				
				
				<div>{this.props.children}</div>


				<footer className="well">Footer info 2016</footer>

			</div>

		);
	}
}