import { StyleSheet, Text, View } from 'react-native';

import { usePermissionsContext } from '../context/permissions/usePermissionsContext';
import BlackButton from '../components/BlackButton';

const PermissionsScreen = () => {
	const { askLoacationPermissions, checkLoacationPermissions, permissions } =
		usePermissionsContext();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>GPS is required to use this application.</Text>
			<BlackButton title='Permission' onPress={askLoacationPermissions} />
			<Text style={{ fontSize: 20, marginTop: 20 }}>
				{JSON.stringify(permissions, null, 3)}
			</Text>
		</View>
	);
};

export default PermissionsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		width: 200,
		textAlign:'center',
		fontSize:18
	},
});
