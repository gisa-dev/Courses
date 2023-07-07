import { FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';

export const NavBar = () => {
	return (
		<nav className='bg-white border-gray-200 dark:bg-gray-900'>
			<div className='flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto'>
				<div className='flex items-center gap-2'>
					<FaCalendarAlt color='white' size={25} />
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Gilbert
					</span>
				</div>

				<button className='flex items-center gap-2 p-2 text-red-500 transition duration-300 ease-in-out border border-red-500 rounded-md hover:bg-red-500 hover:text-white'>
					<FaSignOutAlt />
					<span>Exit</span>
				</button>
			</div>
		</nav>
	);
};
