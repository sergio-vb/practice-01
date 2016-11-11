import React from 'react';
import _ from 'lodash';
import TodosListItem from './todos-list-item';


export default class TodosList extends React.Component{
	
	renderItems(){

		//console.log('todos-list props:', this.props);
		const props = _.omit(this.props, 'todos');

		let todos = this.props.todos;
		return todos.map( (todo, index) => <TodosListItem key={index} {...todo} {...props} /> );

	}

	render(){

		//console.log(this.props);

		return(
			<table>
				<thead>
					<tr>
						<th>Task</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}













/*return _.map( // _.map is a function of the lodash library 
	this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />
);

//In ES6 the following line is equivalent to the function below:

(todo, index) => <TodosListItem key={index} {...todo} />

function(todo, index){
	return <TodosListItem key={index} task={todo.task} isCompleted={todo.isCompleted} />
}*/