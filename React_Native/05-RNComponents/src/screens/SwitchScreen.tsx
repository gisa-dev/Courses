import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';

const SwitchScreen = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(!isEnabled);
	return (
		<View style={{ marginTop: 50 }}>
			<Switch
				trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
				thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
				onValueChange={toggleSwitch}
				value={isEnabled}
			/>
		</View>
	);
};

export default SwitchScreen;

const styles = StyleSheet.create({});
