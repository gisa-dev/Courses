import { StyleSheet } from 'react-native';
import { ThemeState } from '../context/theme/themeReducer';

export const styles = StyleSheet.create({
	globalMargin: {
		marginHorizontal: 20,
	},

	title: {
		fontSize: 35,
		fontWeight: 'bold',
	},
});

export const lightTheme: ThemeState = {
	currentTheme: 'light',
	dark: false,
	dividerColor: 'rgba(255,255,255,0.8)',
	colors: {
		primary: '#084F6A',
		background: 'white',
		card: 'white',
		text: '#252525',
		border: '#252525',
		notification: 'teal',
	},
};

export const darkTheme: ThemeState = {
	currentTheme: 'dark',
	dark: true,
	dividerColor: 'rgba(255,255,255,0.8)',
	colors: {
		primary: '#75CEDB',
		background: '#252525',
		card: '#252525',
		text: 'white',
		border: 'white',
		notification: 'teal',
	},
};
