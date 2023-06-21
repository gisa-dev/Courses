import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useUser = () => {
	const { logged, user, login, logout } = useContext(AuthContext);

	return {
		logged,
		user,
		login,
		logout,
	};
};
