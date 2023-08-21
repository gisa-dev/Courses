import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';

interface Props {
	isOn: boolean;
	onChange: (value: boolean) => void;
}

const CustomSwitch = ({ isOn, onChange }: Props) => {
	const [isEnabled, setIsEnabled] = useState(isOn);
	const toggleSwitch = () => {
		setIsEnabled(!isEnabled);
    onChange(!isEnabled);
	};

	return (
		<Switch
			trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
			thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
			onValueChange={toggleSwitch}
			value={isEnabled}
		/>
	);
};

export default CustomSwitch;

const styles = StyleSheet.create({});
