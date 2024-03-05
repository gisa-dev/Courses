import { useUsers } from '../hooks'
import { UserRow } from './UserRow'

export const UserPage = () => {
	const { users, nextPage, prevPage } = useUsers()

	return (
		<>
			<h3>User:</h3>
			<table>
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<UserRow key={user.id} user={user} />
					))}
				</tbody>
			</table>

			<div style={{ display: 'flex', gap: '5px' }}>
				<button onClick={prevPage}>Prev</button>
				<button onClick={nextPage}>Next</button>
			</div>
		</>
	)
}
