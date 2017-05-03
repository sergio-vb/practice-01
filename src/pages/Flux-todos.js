import React from 'react';
import FluxTodo from '../components/Flux-todo';
import fluxTodoStore from '../stores/FluxTodoStore';
import * as FluxTodoActions from '../actions/FluxTodoActions';

export default class FluxTodos extends React.Component{

	constructor(){
		super();
		this.state = {
			todos: fluxTodoStore.getAll()
		}
	}

	componentWillMount(){ //Great place to add event listeners
		fluxTodoStore.on("change", () => {
			this.setState({
				todos: fluxTodoStore.getAll()
			});
		});
	}

	createTodo(){
		console.log("Flux-todos tried to dispatch an action to create a todo");
		FluxTodoActions.createTodo(Date.now());
	}

	render(){

		const FluxTodosComponents = this.state.todos.map( (todo) => { return <FluxTodo key={todo.id} {...todo} />});

		return(
			<div>
				<h2>Hello!!! Im the Flux Todos Page</h2>
				<input type="text"/> <button onClick={this.createTodo}>Add To-Do</button>
				<ul>{FluxTodosComponents}</ul>
			</div>
		);
	}
}

/*
Flux setting-up steps:
1) The component pulls the initial info from the store
2) Component listens to the store to update whenever it changes
3) Adding a dispatcher to receive actions and register the store to the dispatcher


*/