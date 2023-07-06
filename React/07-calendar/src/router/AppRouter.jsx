import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';

export const AppRouter = () => {
	const authStatus = 'not-authenticated';
	return (
		<Routes>
			{authStatus === 'not-authenticated' ? <Route /> : <Route />}

			<Route path='/auth.*' element={<LoginPage />} />
		</Routes>
	);
};
