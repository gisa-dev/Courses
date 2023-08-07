import { Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

const SettingsScreen = () => {
	const insets = useSafeAreaInsets();
	return (
		<View style={{ ...styles.globalMargin, marginTop: insets.top + 20 }}>
			<Text style={styles.title}>SettingsScreen</Text>
		</View>
	);
};

export default SettingsScreen;
