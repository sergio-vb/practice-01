import React from 'react';

export default class ErrorDisplay extends React.Component{

	render(){

		if (this.props.error){

			return(
				<span className="error">{this.props.error}</span>
			);

		}else{
			return(null);
		}

	}

}