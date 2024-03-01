import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const useThemeContext = () => {
	const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext);

	return {
		theme,
		setDarkTheme,
		setLightTheme,
	};
};
