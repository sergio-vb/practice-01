import _ from 'lodash';
import React from 'react';
import TodosListItem from './todos-list-item';


export default class TodosList extends React.Component{
	
		/*return _.map( // _.map is a function of the lodash library 
			this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />
		);

		//In ES6 this is equivalent to the followin
		(todo, index) => <TodosListItem key={index} {...todo} />

		function(todo, index){
			return <TodosListItem key={index} task={todo.task} isCompleted={todo.isCompleted} />
		}*/

	renderItems(){

		const props = _.omit(this.props, 'todos');

		let tasks = this.props.todos;
		return tasks.map( (todo, index) => 
			<TodosListItem key={index} {...todo} {...props} /> );

	}

	render(){

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