import {useState} from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Piece', 'Fairy Tail']);

	const onAddCategory = () => {
		setCategories([...categories, 'Dragon Ball']);
		// setCategories(cat => [...cat, 'Dragon Ball']);
	};

	return (
		<>
			{/* Title */}
			<h1>GifExpertApp</h1>

			{/* Input */}

			<AddCategory />
			{/* Gif List */}

			<button className="add-button" onClick={onAddCategory}>
				Add
			</button>
			<ol>
				{categories.map((category, index) => (
					<li key={index}>{category}</li>
				))}
				{/* <li>ABC</li> */}
			</ol>
			{/* Gif Item */}
		</>
	);
};

export default GifExpertApp;
