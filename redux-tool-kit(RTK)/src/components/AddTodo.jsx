import { useState } from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import { addTodo } from "../features/todos/todosSlice";

export default AddTodo(){
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const addTodoHandler = (event) => {
		event.PreventDefault();
		dispatch(addTodo(text))
		setText('')
	}
	return (
		<form onSubmit={addTodoHandler}>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button>Add todo</button>
		</form>

	)
}