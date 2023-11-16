import { lazy, LazyExoticComponent } from 'react';
// import { NoLazy } from '../01-lazyload/pages/NoLazy';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { UsersPage } from '../pages/UsersPage';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: JSXComponent | LazyExoticComponent<JSXComponent>;
	name: string;
}

// const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
	// {
	// 	to: '/lazy-layout',
	// 	path: '/lazy-layout/*',
	// 	Component: LazyLayout,
	// 	name: 'Lazy Layout',
	// },
	// {
	// 	to: '/no-lazy',
	// 	path: 'no-lazy',
	// 	Component: NoLazy,
	// 	name: 'No Lazy',
	// },
	{
		to: '/shopping',
		path: 'shopping',
		Component: ShoppingPage,
		name: 'Shopping',
	},
	{
		to: '/about',
		path: 'about',
		Component: AboutPage,
		name: 'About',
	},
	{
		to: '/users',
		path: 'users',
		Component: UsersPage,
		name: 'Users',
	},
];
