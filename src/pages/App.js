import React from 'react';
import GlobalNav from '../components/global-nav';

export default class App extends React.Component{

	navigate(){
		this.props.history.pushState(null, "/");
		/* pushState can be replaced with replaceState, doesn't get history arrows */
		/* Can be used as onClick={this.navigate.bind(this)} */
	}

	/*const containerStyle = {
		padding: 1em,
		border: 1px solid #ccc
	};*/
		
	render(){

		const footerStyles = {
			marginTop: "4em"
		}

		return (
		
			<div className="container">
				
				<GlobalNav location={this.props.location} />
				
				
				<div className="mainContent">{this.props.children}</div>


				<footer className="well" style={footerStyles}>Footer info 2016</footer>

			</div>

		);
	}
}