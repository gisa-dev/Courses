import {useEffect, useReducer} from 'react';
import {todoReducer} from './todoReducer';
import {TodoAdd} from '../components/TodoAdd';
import {TodoList} from '../components/Todolist';

const initialState = [];

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: 'Add Todo',
			payload: todo,
		};

		dispatch(action);
	};

	return (
		<>
			<h1>TodoApp: 10, Pendientes: 2</h1>
			<hr />
			<div className='row'>
				<div className='col-7'>
					<TodoList todos={todos} />
				</div>

				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
