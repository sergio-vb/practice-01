import React from 'react';

export default class CreateTodo extends React.Component{
	render(){
		return(
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="Enter task here" ref="createTaskInput" />
				<button>Add To Do</button>
			</form>
		)
	}

	handleCreate(e){
		e.preventDefault();
		this.props.createTask(this.refs.createTaskInput.value);
		this.refs.createTaskInput.value = "";
	}
}