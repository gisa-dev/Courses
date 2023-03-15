import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Piece', 'Fairy Tail']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
		// setCategories(cat => [...cat, 'Dragon Ball']);
	};

	return (
		<>
			{/* Title */}
			<h1>GifExpertApp</h1>

			{/* Input */}

			<AddCategory onNewCategory={(value) => onAddCategory(value)} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};

export default GifExpertApp;
