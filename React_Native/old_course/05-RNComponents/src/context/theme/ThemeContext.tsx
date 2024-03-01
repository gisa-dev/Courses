import { createContext, useReducer, useEffect } from 'react';
import { ThemeState, themeReducer } from './themeReducer';
import { darkTheme, lightTheme } from '../../theme/appTheme';
import { useColorScheme } from 'react-native';

interface ThemeContextProps {
	theme: ThemeState;
	setDarkTheme: (theme: ThemeState) => void;
	setLightTheme: (theme: ThemeState) => void;
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
		colorScheme === 'light' ? setLightTheme(lightTheme) : setDarkTheme(darkTheme);
	}, [colorScheme]);

	const setDarkTheme = (theme: ThemeState) => {
		dispatch({ type: 'set-dark-theme', payload: theme });
		console.log('setDarkTheme');
	};
	const setLightTheme = (theme: ThemeState) => {
		dispatch({ type: 'set-light-theme', payload: theme });
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
