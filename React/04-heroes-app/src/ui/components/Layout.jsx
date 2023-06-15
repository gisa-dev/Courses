import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='px-2 mx-auto mt-3 lg:px-0 max-w-7xl'>{children}</main>
		</>
	);
};
