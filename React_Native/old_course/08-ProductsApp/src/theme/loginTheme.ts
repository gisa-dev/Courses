import { StyleSheet, Platform } from 'react-native';
export const loginStyles = StyleSheet.create({
	formContainer: {
		flex: 1,
		paddingHorizontal: 30,
		justifyContent: 'center',
		height: 600,
		marginBottom: 50,
	},

	title: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		marginTop: 20,
	},
	label: {
		marginTop: 25,
		color: 'white',
		fontWeight: 'bold',
	},
	inputField: {
		color: 'white',
		fontSize: 20,
		paddingBottom: Platform.OS === 'ios' ? 10 : 15,
		borderBottomColor: Platform.OS === 'ios' ? 'white' : 'transparent',
		borderBottomWidth: Platform.OS === 'ios' ? 2 : 0,
	},
	buttonContainer: {
		alignItems: 'center',
		marginTop: 50,
	},
	button: {
		borderWidth: 2,
		borderColor: 'white',
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderRadius: 50,
	},
	buttonText: {
		color: 'white',
		fontSize: 18,
	},
	newUserContainer: {
		alignItems: 'flex-end',
		marginTop: 10,
	},
	buttonBack: {
		position: 'absolute',
		top: 50,
		left: 20,
		borderWidth: 1,
		borderColor: 'white',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 50,
	},
});
