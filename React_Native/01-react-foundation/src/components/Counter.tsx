import {useState} from 'react'

export const Counter = () => {
	const [counter, setCounter] = useState<number>(10)

	const incrementBy = (value: number) => {
		setCounter(counter + value)
	}

	const decrementBy = (value: number) => {
		setCounter(counter - value)
	}

	return (
		<>
			<h3>
				Counter: <small>{counter}</small>
			</h3>

			<div>
				<button onClick={() => decrementBy(1)}>-1</button>
				&nbsp;
				<button onClick={() => incrementBy(1)}>+1</button>
			</div>
		</>
	)
}
