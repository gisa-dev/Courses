import {useState} from 'react';

const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Piece']);

	console.log(categories);

	return (
		<>
			{/* Title */}
			<h1>GifExpertApp</h1>

			{/* Input */}

			{/* Gif List */}
      <ol>

        {
          categories.map( category => {
            
          })
        }
        <li>ABC</li>
        
      </ol>
			{/* Gif Item */}
		</>
	);
};

export default GifExpertApp;
