import { Theme } from '@react-navigation/native';
import { lightTheme, darkTheme } from '../../theme/appTheme';

type ThemeAction = { type: 'set-light-theme' } | { type: 'set-dark-theme' };

export interface ThemeState extends Theme {
	currentTheme: 'light' | 'dark';
	dividerColor: string;
}

export const themeReducer = (
	state: ThemeState,
	action: ThemeAction,
): ThemeState => {
	switch (action.type) {
		case 'set-light-theme':
			return { ...lightTheme };
		case 'set-dark-theme':
			return { ...darkTheme };

		default:
			return state;
	}
};
