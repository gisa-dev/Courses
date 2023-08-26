import { createContext, useReducer, useEffect } from 'react';
import { ThemeState, themeReducer } from './themeReducer';
import { darkTheme, lightTheme } from '../../theme/appTheme';
import { useColorScheme } from 'react-native';

interface ThemeContextProps {
	theme: ThemeState;
	setDarkTheme: () => void;
	setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
	const colorScheme = useColorScheme();
	console.log(colorScheme);

	const [theme, dispatch] = useReducer(
		themeReducer,
		colorScheme === 'dark' ? darkTheme : lightTheme,
	);

	useEffect(() => {
		colorScheme === 'light' ? setLightTheme() : setDarkTheme();
	}, [colorScheme]);

	const setDarkTheme = () => {
		dispatch({ type: 'set-dark-theme' });
		console.log('setDarkTheme');
	};
	const setLightTheme = () => {
		dispatch({ type: 'set-light-theme' });
		console.log('setLightTheme');
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setDarkTheme,
				setLightTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
