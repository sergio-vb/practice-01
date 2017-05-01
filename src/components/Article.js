import React from 'react';

export default class Article extends React.Component{

	render(){
		return (
			<article className="col-md-4 col-sm-6">
				<h3>{this.props.title}</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum veniam accusamus aperiam aliquid quia maxime officia, molestiae mollitia optio assumenda reprehenderit voluptatem quaerat ab esse fugit explicabo, ducimus beatae quasi.</p>
				<a className="btn btn-default">Read More</a>
			</article>
		)
	}
}