import {useState} from 'react';

const AddCategory = ({onNewCategory}) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({target}) => {
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		const newInputValue = inputValue.trim();

		if (newInputValue === '') return;
		onNewCategory(newInputValue);
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Search gifs"
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

export default AddCategory;
