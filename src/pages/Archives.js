import React from "react";

export default class Archives extends React.Component{
	render(){
		const { query } = this.props.location;
		const { date } = query;

		return (
			<div>
				<h3>Archives content ({this.props.params.article})</h3>
				<p>{date}</p>
			</div>
		)
	}
}