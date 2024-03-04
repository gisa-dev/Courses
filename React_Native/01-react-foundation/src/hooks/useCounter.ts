import { useState } from 'react'

interface Options {
	initialValue?: number
}

export const useCounter = ({ initialValue = 0 }: Options) => {
	const [counter, setCounter] = useState<number>(initialValue)

	const incrementBy = (value: number) => {
		const newValue = counter + value

		if (newValue >= 0) {
			setCounter(counter + value)
		}
	}

	const decrementBy = (value: number) => {
		setCounter(counter - value)
	}

	return {
		// Properties
		counter,

		// Methods
		incrementBy,
		decrementBy
	}
}
