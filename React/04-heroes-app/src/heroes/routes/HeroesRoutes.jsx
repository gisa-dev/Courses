import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../../ui/components/Layout';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
	return (
		<Layout>
			<Routes>
				<Route path='marvel' element={<MarvelPage />} />
				<Route path='dc' element={<DcPage />} />
				<Route path='search' element={<SearchPage />} />
				<Route path='hero' element={<HeroPage />} />

				<Route path='/' element={<Navigate to='/marvel' />} />
			</Routes>
		</Layout>
	);
};
