import { Theme } from '@react-navigation/native';
import { lightTheme, darkTheme } from '../../theme/appTheme';

type ThemeAction =
	| { type: 'set-light-theme'; payload: ThemeState }
	| { type: 'set-dark-theme'; payload: ThemeState };

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
			return { ...action.payload };
		case 'set-dark-theme':
			return { ...action.payload };

		default:
			return state;
	}
};
