import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/marvel', {
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
