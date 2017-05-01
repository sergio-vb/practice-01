import React from 'react';

export default class FluxTodo extends React.Component{
	render(){

		const completedStyles = {
			textDecoration: "line-through"
		}
		return (
			<li style={this.props.completed ? completedStyles : {}}>{this.props.text}</li>
		);
	}
}