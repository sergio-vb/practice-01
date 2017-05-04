import dispatcher from "../dispatcher";

export function createTodo(text){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text
	});
}
export function deleteTodo(id){
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id
	});
}
export function reloadTodos(){
	dispatcher.dispatch({
		type: "FETCH_TODOS"
	});

	setTimeout(function(){ //Imitates fetching data from service
		dispatcher.dispatch({
			type: "RECEIVE_TODOS",
			todos: [
				{
					id: 1234567,
					text: "Study React and Flux Again",
					completed: false
				},
				{
					id: 3254761,
					text: "Study Angular Again",
					completed: false
				},
				{
					id: 8475892,
					text: "Study ES7",
					completed: true
				}
			]
		});

		if (false){ //Possible error handling
			dispatcher.dispatch({
				type: "FETCH_TODOS_ERROR"
			});
		}
		
	}, 1000);
}