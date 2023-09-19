import { useEffect, useState, useReducer } from 'react';
import './App.css';

const getRandomNumberApi = async (): Promise<number> => {
	const resp = await fetch(
		'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new',
	);

	const numberString = await resp.text();

	// throw new Error('Auxilio!!');

	return Number(numberString);
};

const App = () => {
	const [number, setNumber] = useState<number>();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string>();

	const [key, forceRefetch] = useReducer((x) => x + 1, 0);

	useEffect(() => {
		setIsLoading(true);
		getRandomNumberApi()
			.then(setNumber)
			.catch((error: Error) => setError(error.message));
	}, [key]);

	useEffect(() => {
		if (number) setIsLoading(false);
	}, [number]);

	useEffect(() => {
		if (error) setIsLoading(false);
	}, [error]);

	return (
		<div className='App-header'>
			{isLoading ? <h2>Cargando...</h2> : <h1>Numero aleatorio: {number}</h1>}

			{!isLoading && error && <h3>{error}</h3>}

			<button onClick={forceRefetch} disabled={isLoading}>
				{isLoading ? '...' : 'Nuevo Numero'}
			</button>
		</div>
	);
};

export default App;
