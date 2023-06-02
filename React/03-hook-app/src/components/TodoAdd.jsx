import React, {useState} from 'react';
import useForm from '../hooks/useForm';

export const TodoAdd = ({handleNewTodo}) => {
	const {description, onInputChange, onResetForm} = useForm({
		description: '',
	});

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (description.length <= 1) return;

		const newTodo = {
			description,
			done: false,
			id: new Date().getTime(),
		};

		handleNewTodo(newTodo);
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				placeholder="Que hay que hacer?"
				className="form-control"
				name="description"
				value={description}
				onChange={onInputChange}
			/>
			<button type="submit" className="btn btn-outline-primary mt-2 w-100">
				Agregar
			</button>
		</form>
	);
};
