import {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Piece', 'Fairy Tail']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;

		setCategories([...categories, newCategory]);
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
