import React, { createContext, useReducer } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { authReducer } from './authReducer';
export interface AuthState {
	isLoggedIn: boolean;
	username?: string;
	favoriteIcon?: keyof typeof Ionicons.glyphMap;
}

export const auhtInitialState: AuthState = {
	isLoggedIn: false,
	username: undefined,
	favoriteIcon: undefined,
};

export interface AuthContextProps {
	authState: AuthState;
	signIn: () => void;
	logout: () => void;
	changeFavIcon: (iconName: keyof typeof Ionicons.glyphMap) => void;
	changeUsername: (username: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
	const [authState, dispatch] = useReducer(authReducer, auhtInitialState);

	const signIn = () => {
		dispatch({ type: 'signIn' });
	};
	const logout = () => {
		dispatch({ type: 'logout' });
	};

	const changeFavIcon = (iconName: keyof typeof Ionicons.glyphMap) => {
		dispatch({ type: 'changeFavIcon', payload: iconName });
	};
	const changeUsername = (username: string) => {
		dispatch({ type: 'changeUsername', payload: username });
	};

	return (
		<AuthContext.Provider
			value={{
				authState,
				signIn,
				logout,
				changeFavIcon,
				changeUsername,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
