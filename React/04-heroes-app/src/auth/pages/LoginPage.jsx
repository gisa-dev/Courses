import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export const LoginPage = () => {
	const { login } = useUser();

	const navigate = useNavigate();

	const handleLogin = () => {
		const lastPath = localStorage.getItem('lastPath') || '/';

		login('Gilbert Acosta');

		navigate(lastPath, {
			replace: true,
		});
	};

	return (
		<div className='px-2 mx-auto max-w-7xl lg:px-0'>
			<h1 className='title'>Login</h1>
			<button
				className='px-4 py-2 font-medium text-white transition duration-300 ease-in-out bg-indigo-400 rounded-md hover:bg-indigo-500'
				onClick={handleLogin}
			>
				Login
			</button>
		</div>
	);
};
