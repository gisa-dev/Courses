import { useRandom } from './hooks/useRandom';
import './App.css';

const App = () => {
	const query = useRandom();

	return (
		<div className='App-header'>
			{query.isFetching ? (
				<h2>Cargando...</h2>
			) : (
				<h1>Numero aleatorio: {query.data}</h1>
			)}

			{!query.isLoading && query.isError && <h3>{`${query.error}`}</h3>}

			<button onClick={() => query.refetch()} disabled={query.isFetching}>
				{query.isFetching ? '...' : 'Nuevo Numero'}
			</button>
		</div>
	);
};

export default App;
