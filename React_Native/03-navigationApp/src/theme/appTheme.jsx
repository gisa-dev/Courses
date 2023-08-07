import { StyleSheet } from 'react-native';


export const colors = {
	primary: '#5856D6',
}

export const styles = StyleSheet.create({
	globalMargin: {
		marginHorizontal: 20,
	},
	title: {
		fontSize: 30,
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		gap: 10,
		marginTop: 15,
	},
	largeButton: {
		width: 100,
		height: 100,
		backgroundColor: 'red',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	largeButtonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},
	avatarContainer: {
		alignItems: 'center',
		marginTop: 20,
	},
	avatar: {
		width: 150,
		height: 150,
		borderRadius: 100,
	},
	menuContainer: {
		marginHorizontal: 50,
		marginVertical: 30,
	},
	menuButton: {
		marginVertical: 10,
	},
	menuText: {
		fontSize: 20,
	},
});
