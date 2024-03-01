import Ionicons from '@expo/vector-icons/Ionicons';
import { AuthState } from './AuthContext';

type AuthAction =
	| { type: 'signIn' }
	| { type: 'changeFavIcon'; payload: keyof typeof Ionicons.glyphMap }
	| { type: 'logout' }
	| { type: 'changeUsername'; payload: string };

export const authReducer = (
	state: AuthState,
	action: AuthAction,
): AuthState => {
	switch (action.type) {
		case 'signIn':
			return {
				...state,
				isLoggedIn: true,
				username: 'no-username-yet',
			};
		case 'changeFavIcon':
			return {
				...state,
				favoriteIcon: action.payload,
			};
		case 'changeUsername':
			return {
				...state,
				username: action.payload,
			};
		case 'logout':
			return {
				...state,
				isLoggedIn: false,
				username: undefined,
				favoriteIcon: undefined,
			};

		default:
			return state;
	}
};
