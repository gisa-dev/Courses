import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='mx-auto mt-3 max-w-7xl'>{children}</main>
		</>
	);
};
