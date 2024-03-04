import { useCounter } from '../hooks'

export const CounterWithHook = () => {
	const { counter, incrementBy, decrementBy } = useCounter({ initialValue: 10 })

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
