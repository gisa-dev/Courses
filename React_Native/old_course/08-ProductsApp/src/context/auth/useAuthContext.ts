import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const useAuthContext = () => {
	const {
		errorMessage,
		logout,
		removeError,
		signIn,
		signUp,
		status,
		token,
		user,
	} = useContext(AuthContext);

	return {
		errorMessage,
		logout,
		removeError,
		signIn,
		signUp,
		status,
		token,
		user,
	};
};
