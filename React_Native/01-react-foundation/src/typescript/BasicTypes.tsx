export const BasicTypes = () => {
	const name: string = 'Gilbert'
	const age: number = 27
	const isActive: boolean = true
	const powers: string[] = ['React', 'ReactNative', 'Angular', 'Vue', 'Qwik']

	return (
		<>
			<h3>Basic Types</h3>
			{name} {age} {isActive ? 'true' : 'false'}
			<br />
			{powers.join(', ')}
		</>
	)
}
