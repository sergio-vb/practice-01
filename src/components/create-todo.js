import React from 'react';

export default class CreateTodo extends React.Component{

	render(){
		return (
			<form onSubmit={this.onSubmitCreate.bind(this)}>
				<input type="text" placeholder="Enter task" className="enterTaskInput" ref="enterTaskInput"/>
				<button>Add Task</button>
			</form>

		);
	}

	onSubmitCreate(event){
		event.preventDefault();

		this.props.createTask(this.refs.enterTaskInput.value);

		this.refs.enterTaskInput.value = "";

	}

}