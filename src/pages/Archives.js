import React from "react";
import Article from "../components/Article"

export default class Archives extends React.Component{
	render(){
		const { query } = this.props.location;
		//const { date } = query;

		const articles = [
			"Hello There",
			"Interesting Title",
			"Ola Ke Ase?",
			"Another Test Title"
		].map((element, index) => <Article key={index} title={element}></Article>);

		return (
			<div className="container">
				<h3>Archives content {this.props.params.article}</h3>

				<div className="row">
					{articles}
				</div>
				
			</div>
		)
	}
}