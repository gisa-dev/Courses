interface Person {
	firstName: string
	lastName: string
	age: number
	address: Address
	isAlive?: boolean
}

interface Address {
	country: string
	houseNo: number
}

export const ObjectLiterals = () => {
	const person: Person = {
		firstName: 'Gilbert',
		lastName: 'Acosta',
		age: 27,
		address: {
			country: 'Rep Dom',
			houseNo: 18,
		},
	}

	return (
		<>
			<h3>Object Literals</h3>
			<pre>{JSON.stringify(person, null, 3)}</pre>
		</>
	)
}
