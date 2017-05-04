import React from 'react';
import FluxTodo from '../components/Flux-todo';
import fluxTodoStore from '../stores/FluxTodoStore';
import * as FluxTodoActions from '../actions/FluxTodoActions';

export default class FluxTodos extends React.Component{

	constructor(){
		super();
		this.getStoreState = this.getStoreState.bind(this);
		this.state = {
			todos: fluxTodoStore.getAll(),
			loading: false
		}
	}

	getStoreState(){
		if(fluxTodoStore.getLoadingState()){
			this.setState({
				loading: true
			})
		}else{
			this.setState({
				todos: fluxTodoStore.getAll(),
				loading: false
			});
		}
	}

	componentWillMount(){ //Great place to add event listeners
		fluxTodoStore.on("change", this.getStoreState);
	}
	componentWillUnmount(){
		fluxTodoStore.removeListener("change", this.getStoreState);
	}

	createTodo(){
		FluxTodoActions.createTodo(Date.now());
	}

	reloadTodos(){
		FluxTodoActions.reloadTodos();
	}

	render(){

		const FluxTodosComponents = this.state.todos.map( (todo) => { return <FluxTodo key={todo.id} {...todo} />});
		let mainContent = null;

		if (this.state.loading){
			mainContent = <p>Todos are loading, please wait.</p>
		}else{
			mainContent = <ul>{FluxTodosComponents}</ul>
		}

		return(
			<div>
				<h2>Hello!!! Im the Flux Todos Page</h2>
				<input type="text"/> <button onClick={this.reloadTodos}>Reload Todos</button>

				{mainContent}

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