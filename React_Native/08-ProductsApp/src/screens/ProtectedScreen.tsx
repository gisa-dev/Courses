import { StyleSheet, Text, View, Button } from 'react-native';
import { useAuthContext } from '../context/auth/useAuthContext';

const ProtectedScreen = () => {
	const { user, token, logout } = useAuthContext();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>ProtectedScreen</Text>
			<Text>{JSON.stringify(user, null, 3)}</Text>
			<Text style={{ paddingHorizontal: 20 }}>
				{JSON.stringify(token, null, 3)}
			</Text>
			<Button title='Logout' color='red' onPress={logout} />
		</View>
	);
};

export default ProtectedScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginBottom: 20,
	},
});
