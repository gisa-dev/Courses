import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
	let activeClass =
		'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500';

	return (
		<nav className='bg-white border-gray-200 dark:bg-gray-900'>
			<div className='flex flex-wrap items-center justify-between max-w-screen-xl py-4 mx-auto'>
				<Link to='/'>
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Asociaciones
					</span>
				</Link>

				<div
					className='items-center justify-between hidden w-full md:flex md:w-auto'
					id='navbar-cta'
				>
					<ul className='flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeClass : 'text-white hover:text-blue-700'
								}
								to='/marvel'
							>
								Marvel
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? activeClass : 'text-white hover:text-blue-700'
								}
								to='/dc'
							>
								DC
							</NavLink>
						</li>
					</ul>
				</div>

				<div className='flex'>
					<button
						type='button'
						className='px-4 py-2 mr-3 text-sm font-medium text-center text-white transition duration-300 ease-in-out bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 md:mr-0'
					>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};
