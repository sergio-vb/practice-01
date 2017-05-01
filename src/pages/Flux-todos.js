import React from 'react';
import FluxTodo from '../components/Flux-todo';
import fluxTodoStore from '../stores/FluxTodoStore.js';

export default class FluxTodos extends React.Component{

	constructor(){
		super();
		this.state = {
			todos: fluxTodoStore.getAll()
		}
	}

	render(){

		const FluxTodosComponents = this.state.todos.map( (todo) => { return <FluxTodo key={todo.id} {...todo} />});

		return(
			<div>
				<h2>"Hello!!! I'm the Flux Todos Page"</h2>
				<ul>{FluxTodosComponents}</ul>
			</div>
		);
	}
}