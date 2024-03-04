import { useEffect } from 'react'
import { useAuthStore } from '../store/auth.store'

export const LoginPage = () => {
	const authStatus = useAuthStore((state) => state.status)
	const user = useAuthStore((state) => state.user)
	const login = useAuthStore((state) => state.login)
	const logout = useAuthStore((state) => state.logout)

	useEffect(() => {
		setTimeout(() => {
			// login('gilbert','12345')
			logout()
		}, 1500)
	}, [])

	if (authStatus === 'checking') {
		return <h3>Loading...</h3>
	}

	return (
		<>
			<h3>Login Page</h3>
			{authStatus === 'authenticated' ? (
				<div>Autenticado como: {JSON.stringify(user, null, 3)}</div>
			) : (
				<div>No autenticado</div>
			)}

			<div style={{ marginTop: '5px' }}>
				{authStatus === 'authenticated' ? (
					<button onClick={logout}>Logout</button>
				) : (
					<button onClick={() => login('john@gmail.com', '12345')}>
						Login
					</button>
				)}
			</div>
		</>
	)
}
