import { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	LoginData,
	RegisterData,
	LoginResponse,
	Usuario,
} from '../../interfaces/appInterfaces';
import { AuthState, authReducer } from './authReducer';
import cafeApi from '../../api/cafeApi';

type AuthContextProps = {
	errorMessage: string;
	token: string | null;
	user: Usuario | null;
	status: 'checking' | 'authenticated' | 'not-authenticated';
	signUp: ({ correo, password, nombre }: RegisterData) => void;
	signIn: ({ correo, password }: LoginData) => void;
	logout: () => void;
	removeError: () => void;
};

const AuthInicialState: AuthState = {
	status: 'checking',
	token: null,
	user: null,
	errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(authReducer, AuthInicialState);

	const checkToken = async () => {
		const token = await AsyncStorage.getItem('token');

		if (!token) {
			return dispatch({ type: 'notAuthenticated' });
		}

		const resp = await cafeApi.get('/auth');

		await AsyncStorage.setItem('token', resp.data.token);

		console.log(resp.data.token);

		dispatch({
			type: 'signUp',
			payload: {
				token: resp.data.token,
				user: resp.data.usuario,
			},
		});
	};

	useEffect(() => {
		checkToken();
	}, []);

	const signIn = async ({ correo, password }: LoginData) => {
		try {
			const resp = await cafeApi.post<LoginResponse>('/auth/login', {
				correo,
				password,
			});
			dispatch({
				type: 'signUp',
				payload: {
					token: resp.data.token,
					user: resp.data.usuario,
				},
			});

			await AsyncStorage.setItem('token', resp.data.token);
		} catch (error: any) {
			console.log(error.response.data.msg);
			dispatch({
				type: 'addError',
				payload: error.response.data.msg || 'wrong information',
			});
		}
	};
	const signUp = async ({ correo, nombre, password }: RegisterData) => {
		try {
			const resp = await cafeApi.post<LoginResponse>('/usuarios', {
				correo,
				password,
				nombre,
			});
			dispatch({
				type: 'signUp',
				payload: {
					token: resp.data.token,
					user: resp.data.usuario,
				},
			});

			await AsyncStorage.setItem('token', resp.data.token);
		} catch (error: any) {
			console.log(error.response.data.msg);
			dispatch({
				type: 'addError',
				payload: error.response.data.errors[0].msg || 'check information',
			});
		}
	};
	const logout = async () => {
		await AsyncStorage.removeItem('token');
		dispatch({ type: 'logout' });
	};
	const removeError = () => {
		dispatch({ type: 'removeError' });
	};

	return (
		<AuthContext.Provider
			value={{ ...state, signUp, signIn, logout, removeError }}
		>
			{children}
		</AuthContext.Provider>
	);
};
