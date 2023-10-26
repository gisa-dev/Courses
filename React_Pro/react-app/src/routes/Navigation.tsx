import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
	Navigate,
} from 'react-router-dom';
import logo from '../assets/react.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
// import { HomePage } from '../pages/HomePage';
// import { AboutPage } from '../pages/AboutPage';
// import { UsersPage } from '../pages/UsersPage';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='logo' />
					<ul>
						<li>
							<NavLink
								to='/lazy1'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Lazy 1
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/lazy2'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Lazy 2
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/lazy3'
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Lazy 3
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='lazy1' element={<LazyPage1 />} />
					<Route path='lazy2' element={<LazyPage2 />} />
					<Route path='lazy3' element={<LazyPage3 />} />

					<Route path='/lazy1' element={<Navigate to='/lazy1' replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
