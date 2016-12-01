/* Dispatches something */

import dispatcher from "dispatcher";

/*Old way:
export default {
	createTodo: function(){}
}*/
/* ES 6: */
export function createTodo(text){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}

export function deleteTodo(id){
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id,
	});
}

export function reloadTodos(){
	// axios("http://someurl.com/somedataendpoint").then((data) => {
	// 	console.log("got the data!", data);
	// })

	dispatcher.dispatch({
		type: "FETCH_TODOS"
	});
	//Pretend ajax operation:
	setTimeout(() => {
		dispatcher.dispatch({
			type: "RECEIVE_TODOS", 
			todos: [
				{
					id: 113468547,
					text: "Go Shopping Again",
					complete: false
				},
				{
					id: 235681559,
					text: "Eat food",
					complete: true
				}
			]
		});
		if (false){ //If something goes wrong, pretend
			dispatcher.dispatch({
				type: "FETCH_TODOS_ERROR"
			});
		}
	}, 1000)
}