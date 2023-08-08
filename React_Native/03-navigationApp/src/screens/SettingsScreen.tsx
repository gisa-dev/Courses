import { Text, View, Button } from 'react-native';
import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Ionicons from '@expo/vector-icons/Ionicons';

const SettingsScreen = () => {
	const insets = useSafeAreaInsets();

	const { authState, signIn, logout } = useContext(AuthContext);

	return (
		<View style={{ ...styles.globalMargin, marginTop: insets.top + 20 }}>
			<Text style={styles.title}>SettingsScreen</Text>
			<Text>{JSON.stringify(authState, null, 4)}</Text>
			{!authState.isLoggedIn && <Button title='Sign In' onPress={signIn} />}
			{authState.isLoggedIn && (
				<Button title='Logout' color='red' onPress={logout} />
			)}

			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Ionicons
					name={authState.favoriteIcon}
					size={150}
					color={colors.primary}
				/>
			</View>
		</View>
	);
};

export default SettingsScreen;
