import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
	decrement,
	increment,
	incrementByAmount,
} from './store/slices/counter';

function App() {
	const { counter } = useSelector((state) => state.counter);
	const dispath = useDispatch();

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>count is {counter}</h1>
			<div className='card'>
				<button onClick={() => dispath(increment())}>Increment</button>
				<button onClick={() => dispath(decrement())}>Decrement</button>
				<button onClick={() => dispath(incrementByAmount(2))}>
					Increment By 2
				</button>
			</div>
		</>
	);
}

export default App;
