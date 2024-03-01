export const BasicFuntions = () => {
	const addTwoNumber = (a: number, b: number): number => {
		return a + b
	}

	return (
		<>
			<h3>Basic Funtions</h3>
			<span>The result of adding: {addTwoNumber(2, 8)}</span>
		</>
	)
}
